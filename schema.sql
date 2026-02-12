-- Sakhisizwe Day Care Centre - Database Schema (2026)
-- Designed for PostgreSQL with JSONB support for flexible form data

-- 1. USERS TABLE
-- Handles authentication for administrators, teachers, and parents.
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'parent' CHECK (role IN ('admin', 'teacher', 'parent')),
    phone_number VARCHAR(20),
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. GALLERY MEDIA TABLE
-- Stores metadata and URLs for images and videos displayed on the site.
CREATE TABLE gallery_media (
    media_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    caption TEXT,
    media_url TEXT NOT NULL, -- Points to external storage (e.g., S3, Cloudinary)
    media_type VARCHAR(50) NOT NULL CHECK (media_type IN ('image', 'video')),
    category VARCHAR(100) NOT NULL CHECK (category IN ('Normal Day', 'Event', 'Graduation', 'Culture')),
    uploaded_by UUID REFERENCES users(user_id),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. ENROLMENTS TABLE
-- Persists the multi-step form data from the enrolment page.
CREATE TABLE enrolments (
    enrolment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES users(user_id), -- Optional: Links to a registered user account
    parent_json JSONB NOT NULL,     -- Stores guardian contact and residential details
    children_json JSONB NOT NULL,   -- Array of children details (Name, DOB, BC#, etc.)
    medical_json JSONB NOT NULL,    -- Stores health conditions, allergies, and doctor info
    consents_json JSONB NOT NULL,   -- Stores marketing and medical consent flags
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'declined')),
    registration_fee_paid BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. CONTACT REQUESTS TABLE
-- Tracks facility tours and contact form submissions.
CREATE TABLE contact_requests (
    request_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name VARCHAR(255) NOT NULL,
    child_name VARCHAR(255),
    child_age VARCHAR(50),
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. SYSTEM LOGS
-- Tracks administrative actions for security and auditing.
CREATE TABLE audit_logs (
    log_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    action_type VARCHAR(100) NOT NULL,
    description TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- PERFORMANCE INDEXES
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_gallery_category ON gallery_media(category);
CREATE INDEX idx_enrolments_status ON enrolments(status);
CREATE INDEX idx_enrolments_parent ON enrolments(parent_id);
CREATE INDEX idx_contact_phone ON contact_requests(phone);
