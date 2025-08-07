import { GoogleGenAI } from "@google/genai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = new GoogleGenAI({apiKey});
  
  
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = ai.chats.create({
      model: "gemini-2.5-flash",
      history : [],
      config: generationConfig,
      
    })
  
