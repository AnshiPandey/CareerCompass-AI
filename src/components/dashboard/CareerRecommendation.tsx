"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

interface Props {
  recommendation: {
    role: string;
    confidence: number;
    reason: string;
  };
}

export default function CareerRecommendation({
  recommendation,
}: Props) {

  return (

<motion.div

whileHover={{
y:-5
}}

className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-8 overflow-hidden relative"

>

<div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full"/>

<div className="relative">

<div className="flex justify-between">

<div>

<p>

Recommended Career

</p>

<h2 className="text-5xl font-bold mt-5">

{recommendation.role}

</h2>

</div>

<BriefcaseBusiness size={60}/>

</div>

<div className="mt-8 flex items-center gap-3">

<TrendingUp/>

<p>

Confidence

<b>

{" "}

{recommendation.confidence}%

</b>

</p>

</div>

<p className="mt-8 leading-8 text-blue-100">

{recommendation.reason}

</p>

</div>

</motion.div>

)

}