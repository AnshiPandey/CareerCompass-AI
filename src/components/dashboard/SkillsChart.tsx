"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

interface Props {
  skills: string[];
}

export default function SkillsChart({
  skills,
}: Props) {

  const data = skills.map((skill) => ({
    skill,
    gap: 100,
  }));

  return (
    <div className="bg-white rounded-3xl shadow-md border p-8 h-[380px]">

      <h2 className="text-2xl font-bold mb-6">

        Skills Gap

      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <BarChart data={data}>

          <XAxis dataKey="skill" />

          <Tooltip />

          <Bar
            dataKey="gap"
            radius={[10,10,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}