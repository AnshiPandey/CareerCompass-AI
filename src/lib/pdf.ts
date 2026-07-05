import { ResumeTextResult } from "@/types/resume";

/**
 * Clean extracted resume text
 */
function cleanText(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Extract text from PDF
 */
export async function processResume(
  file: File
): Promise<ResumeTextResult> {

  const pdfjsLib = await import("pdfjs-dist");

  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let fullText = "";

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);

    const content = await page.getTextContent();

    const pageText = content.items
      .map((item: any) => item.str)
      .join(" ");

    fullText += pageText + "\n";
  }

  const cleanedText = cleanText(fullText);

  return {
    text: cleanedText,
    pageCount: pdf.numPages,
    characterCount: cleanedText.length,
  };
}