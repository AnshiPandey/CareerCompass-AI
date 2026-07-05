"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

import { getCareerDistribution } from "@/lib/admin";

const COLORS = [
  "#2563EB",
  "#7C3AED",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#14B8A6",
  "#8B5CF6",
  "#06B6D4",
  "#F97316",
];

export default function CareerDistribution() {
  const [data, setData] = useState<
    {
      name: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    async function load() {
      const result = await getCareerDistribution();
      setData(result);
    }

    load();
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-bold mb-8">
        Career Distribution
      </h2>

      {data.length === 0 ? (
        <div className="h-[380px] flex items-center justify-center text-gray-500">
          No analyses available.
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={380}
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="35%"
              cy="50%"
              innerRadius={55}
              outerRadius={105}
              paddingAngle={2}
              label={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
                lineHeight: "18px",
                paddingLeft: "20px",
              }}
              formatter={(value: string) => (
                <span
                  style={{
                    color: "#374151",
                    fontSize: "12px",
                  }}
                >
                  {value.length > 28
                    ? value.slice(0, 28) + "..."
                    : value}
                </span>
              )}
            />

          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}