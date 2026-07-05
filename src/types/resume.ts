export interface ResumeAnalysisInput {
  file: File;
}

export interface ResumeTextResult {
  text: string;
  pageCount: number;
  characterCount: number;
}