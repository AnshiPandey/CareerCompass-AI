"use client";

import { CareerAnalysis } from "@/types/analysis";
import dynamic from "next/dynamic";

const DownloadReportButton = dynamic(
  () => import("./DownloadReportButton"),
  {
    ssr: false,
  }
);
import { useAuth } from "@/context/AuthContext";

import FadeIn from "@/components/ui/FadeIn";

import ATSScore from "@/components/dashboard/ATSScore";
import CareerRecommendation from "@/components/dashboard/CareerRecommendation";
import MissingSkills from "@/components/dashboard/MissingSkills";
import Roadmap from "@/components/dashboard/Roadmap";

interface Props {
  analysis: CareerAnalysis;
}

export default function AnalysisResult({
  analysis,
}: Props) {

  const { user } = useAuth();

  return (

<div className="space-y-8">
<div className="grid lg:grid-cols-2 gap-8">

<FadeIn delay={0.1}>
<ATSScore score={analysis.atsScore}/>
</FadeIn>

<FadeIn delay={0.2}>
<CareerRecommendation recommendation={ analysis.careerRecommendation }/>
</FadeIn>

</div>
<div className="grid lg:grid-cols-2 gap-8">
<FadeIn delay={0.3}>
<MissingSkills skills={ analysis.missingSkills }/>
</FadeIn>

<FadeIn delay={0.4}>
<Roadmap roadmap={ analysis.roadmap }/>
</FadeIn>

</div>

{user&&(

<FadeIn delay={0.5}>

<div className="bg-white rounded-3xl border shadow-md p-8">

<div className="flex justify-between items-center">

<div>

<h2 className="text-2xl font-bold">
Export Report
</h2>

<p className="text-gray-500 mt-2">
Download your AI report.
</p>

</div>

<DownloadReportButton
userName={ user.displayName ?? "Candidate"}
analysis={analysis}
/>

</div>

</div>

</FadeIn>

)}

</div>

)

}