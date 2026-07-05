"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import ATSScore from "@/components/dashboard/ATSScore";
import CareerRecommendation from "@/components/dashboard/CareerRecommendation";
import MissingSkills from "@/components/dashboard/MissingSkills";
import Roadmap from "@/components/dashboard/Roadmap";

import { getAnalysisById } from "@/lib/firestore";

export default function HistoryDetailPage() {
  const { id } = useParams();

  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    async function load() {
      if (!id) return;

      const data = await getAnalysisById(id as string);

      setAnalysis(data);
    }

    load();
  }, [id]);

  if (!analysis) {
    return (
      <DashboardLayout>
        <div className="p-10">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">

            Resume Analysis

          </h1>

          <p className="text-gray-500 mt-2">

            {analysis.resumeFileName}

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <ATSScore
            score={analysis.atsScore}
          />

          <CareerRecommendation
            recommendation={analysis.careerRecommendation}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <MissingSkills
            skills={analysis.missingSkills}
          />

          <Roadmap
            roadmap={analysis.roadmap}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}