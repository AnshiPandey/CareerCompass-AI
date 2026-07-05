"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

interface Props {
  roadmap: string[];
}

export default function ProgressChart({
  roadmap,
}: Props) {

  const data = roadmap.map((step,index)=>({

    week:`Step ${index+1}`,

    progress:(index+1)*20,

  }));

  return(

<div className="bg-white rounded-3xl shadow-md border p-8 h-[380px]">

<h2 className="text-2xl font-bold mb-6">

Career Progress

</h2>

<ResponsiveContainer width="100%" height="85%">

<LineChart data={data}>

<XAxis dataKey="week"/>

<Tooltip/>

<Line
type="monotone"
dataKey="progress"
strokeWidth={4}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}