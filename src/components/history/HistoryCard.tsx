"use client";

import { motion } from "framer-motion";
import {FileText,ArrowRight,Brain,CalendarDays} from "lucide-react";
import Link from "next/link";

interface Props{
analysis:any;
}

export default function HistoryCard({
analysis
}:Props){

return(

<motion.div

whileHover={{
y:-5
}}

className="bg-white rounded-3xl border shadow-sm p-8"

>

<div className="flex justify-between">

<div className="flex gap-5">

<div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

<FileText className="text-blue-600"/>

</div>

<div>

<h2 className="font-bold text-xl">

{analysis.resumeFileName}

</h2>

<div className="flex items-center gap-2 mt-2 text-gray-500">

<CalendarDays size={16}/>

{analysis.createdAt?.toDate?.().toLocaleDateString()}

</div>

</div>

</div>

<div>

<h2 className="text-4xl font-bold text-green-600">

{analysis.atsScore}%

</h2>

<p className="text-gray-500">

ATS

</p>

</div>

</div>

<div className="mt-8 flex justify-between items-center">

<div className="flex items-center gap-3">

<Brain className="text-purple-600"/>

<span>

{analysis.careerRecommendation.role}

</span>

</div>

<Link
  href={`/history/${analysis.id}`}
  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
>
  View
  <ArrowRight size={18} />
</Link>

</div>

</motion.div>

)

}