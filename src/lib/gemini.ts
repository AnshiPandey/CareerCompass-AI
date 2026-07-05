import { GoogleGenAI } from "@google/genai";
import { CareerAnalysis } from "@/types/analysis";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function analyzeResume(
  resumeText: string
): Promise<CareerAnalysis> {
  try {
    const prompt = `
You are an expert ATS Resume Reviewer and Career Mentor.

Analyze the following resume.

Return ONLY valid JSON.

Do NOT write explanations.
Do NOT use markdown.
Do NOT wrap JSON inside \`\`\`.

Return exactly in this format:

{
  "atsScore": number,
  "missingSkills": [
    "skill1",
    "skill2"
  ],
  "careerRecommendation": {
    "role": "",
    "confidence": integer (0-100),
    "reason": ""
  },
  "roadmap": [
    "",
    "",
    ""
  ]
}

Resume:

${resumeText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text ?? "";

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error("Unable to analyze resume.");
  }
}