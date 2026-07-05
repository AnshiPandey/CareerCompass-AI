"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Welcome from "@/components/dashboard/Welcome";

import ResumeUploader from "@/components/resume/ResumeUploader";
import AnalysisResult from "@/components/resume/AnalysisResult";

import FadeIn from "@/components/ui/FadeIn";

import { CareerAnalysis } from "@/types/analysis";

export default function Dashboard() {
  const [analysis, setAnalysis] =
    useState<CareerAnalysis | null>(null);

  return (
    <DashboardLayout>

      <div className="space-y-20">

        <FadeIn>

          <Welcome />

        </FadeIn>

        <FadeIn delay={0.2}>

          <ResumeUploader
            onAnalysisComplete={setAnalysis}
          />

        </FadeIn>

        {analysis && (

          <FadeIn delay={0.3}>

            <AnalysisResult
              analysis={analysis}
            />

          </FadeIn>

        )}

      </div>

    </DashboardLayout>
  );
}