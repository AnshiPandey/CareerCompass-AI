import { NextRequest, NextResponse } from "next/server";
import { analyzeResume } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { resumeText } = body;

    if (!resumeText) {
      return NextResponse.json(
        {
          error: "Resume text is required.",
        },
        {
          status: 400,
        }
      );
    }

    const analysis = await analyzeResume(resumeText);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to analyze resume.",
      },
      {
        status: 500,
      }
    );
  }
}