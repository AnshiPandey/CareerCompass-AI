"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { getPlacementTrend } from "@/lib/admin";

export default function PlacementChart() {
  const [data, setData] = useState<
    {
      month: string;
      students: number;
    }[]
  >([]);

  useEffect(() => {
    async function load() {
      const result = await getPlacementTrend();
      setData(result);
    }

    load();
  }, []);

  return (
    <div
      id="analytics"
      className="bg-white rounded-3xl shadow-md p-8"
    >
      <h2 className="text-2xl font-bold mb-8">
        Resume Analysis Trend
      </h2>

      {data.length === 0 ? (
        <div className="h-[320px] flex items-center justify-center text-gray-500">
          No analyses available.
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}