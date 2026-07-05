"use client";

import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

interface Props {
  score: number;
}

export default function ATSScore({
  score,
}: Props) {

  const color =
    score >= 85
      ? "text-green-600"
      : score >= 70
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="bg-white rounded-3xl border shadow-md p-8"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">

            ATS Compatibility

          </p>

          <h2 className={`text-6xl font-bold mt-4 ${color}`}>

            {score}%

          </h2>

        </div>

        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">

          <CircleCheckBig
            className={color}
            size={45}
          />

        </div>

      </div>

      <div className="mt-8 h-4 rounded-full bg-gray-200 overflow-hidden">

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${score}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-green-500"
        />

      </div>

      <p className="text-gray-500 mt-6">

        AI Resume Score

      </p>

    </motion.div>
  );
}