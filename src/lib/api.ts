import { CareerAnalysis } from "@/types/analysis";

export async function analyzeResumeAPI(
  resumeText: string
): Promise<CareerAnalysis> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resumeText,
    }),
  });

  if (!response.ok) {
    throw new Error("Analysis failed.");
  }

  return response.json();
}