"use client";

import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <motion.header
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200 h-20 px-5 md:px-8 flex items-center justify-between"
    >

      <div>

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>

        <p className="text-gray-500">

          Welcome back 👋

        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-3">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            placeholder="Search..."
            className="bg-transparent ml-3 outline-none"
          />

        </div>

        <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center">

          <Bell size={20} />

        </button>

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">

            {user?.displayName?.charAt(0) ?? "U"}

          </div>

          <div className="hidden lg:block">

            <h3 className="font-semibold">

              {user?.displayName ?? "User"}

            </h3>

            <p className="text-sm text-gray-500">

              {user?.email}

            </p>

          </div>

        </div>

      </div>

    </motion.header>
  );
}