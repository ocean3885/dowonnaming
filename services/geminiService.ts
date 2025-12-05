import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key is present to avoid errors during static render if env is missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateSlogan = async (concern: string): Promise<string> => {
  if (!ai) {
    console.warn("API Key is missing.");
    return "API 키를 확인해주세요.";
  }

  try {
    // Modified prompt for Fortune/Wisdom advice
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `User's concern: "${concern}".
      Act as a wise, warm, and traditional Korean philosophy master (Do-sa).
      Provide a short, comforting, and insightful piece of advice or a "favorable sentence" related to their concern.
      The tone should be polite, mystical but grounded, and encouraging.
      Respond with ONLY the Korean text. Keep it under 2 sentences.`,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating advice:", error);
    return "마음을 차분히 하고 잠시 후 다시 시도해주세요.";
  }
};