
import { GoogleGenAI } from "@google/genai";

export const getParentAssistantResponse = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `
          You are the "Teacher Sakhisizwe", a warm and nurturing AI helper for Sakhisizwe Day Care Centre in Alexandra, Johannesburg.
          The current year is 2026.
          Your personality is safe, patient, family-oriented, and encouraging.
          Motto: "Building Stars For The Future".
          School philosophy: We believe in nurturing every child's potential as a future star through love and structured play.
          Address: 3504 Far East Bank, Alexandra.
          Email: info@sakhisizwedaycarecentre.co.za.
          Phone Numbers: 084 940 6377 and 067 096 1542.
          Hours: 6AM to 6PM, Monday to Friday.
          Key Information:
          - Registration fee: R600-R800.
          - Established in 2014.
          - We nurture stars from 3 months old up to 6 years old.
          - Focuses on "stretching young minds" through interesting materials and thought-stretching questions.
          Always mention "future stars" or "nurturing" when appropriate.
          Keep responses concise (1-2 sentences max) and very friendly.
          Use star emojis: ⭐.
        `,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble thinking right now. Please call our office at 084 940 6377 or 067 096 1542 to speak with a teacher! ⭐";
  }
};
