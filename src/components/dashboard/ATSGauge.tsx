"use client";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  score: number;
}

export default function ATSGauge({ score }: Props) {
  const data = [
    {
      name: "ATS",
      value: score,
      fill: "#2563eb",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md border p-8 h-[380px]">

      <h2 className="text-2xl font-bold mb-6">

        ATS Performance

      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >

          <PolarAngleAxis
            type="number"
            domain={[0,100]}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            background
            dataKey="value"
            cornerRadius={20}
          />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-800 text-5xl font-bold"
          >

            {score}%

          </text>

        </RadialBarChart>

      </ResponsiveContainer>

    </div>
  );
}