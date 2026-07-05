"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Welcome() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-10 shadow-xl overflow-hidden relative"
    >

      <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">

        <div>

          <p className="uppercase tracking-widest text-blue-100">

            CareerCompass AI

          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">

            Build Your Dream Career 🚀

          </h2>

          <p className="mt-6 max-w-2xl text-blue-100 text-lg">

            Analyze your resume with AI, discover missing skills,
            improve your ATS score, and receive a personalized
            career roadmap.

          </p>

        </div>

        <Sparkles size={90} />

      </div>

    </motion.section>
  );
}