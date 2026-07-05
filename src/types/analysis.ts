export interface CareerRecommendation {
  role: string;
  confidence: number;
  reason: string;
}

export interface CareerAnalysis {
  atsScore: number;

  missingSkills: string[];

  careerRecommendation: CareerRecommendation;

  roadmap: string[];
}