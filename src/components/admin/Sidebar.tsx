"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Home,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const { logout } = useAuth();

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <aside className="w-80 h-screen sticky top-0 bg-white border-r shadow-sm flex flex-col">

      {/* ================= LOGO ================= */}

      <div className="px-8 py-8 border-b">

        <h1 className="text-3xl font-bold text-blue-600 leading-tight">
          CareerCompass AI
        </h1>

        <p className="text-gray-500 mt-2">
          Admin Console
        </p>

      </div>

      {/* ================= NAVIGATION ================= */}

      <div className="flex-1 overflow-y-auto">

        <nav className="px-4 py-6 space-y-2">

          <a
            href="#overview"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            <LayoutDashboard size={22} />
            <span className="font-medium">
              Overview
            </span>
          </a>

          <a
            href="#analytics"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            <BarChart3 size={22} />
            <span className="font-medium">
              Analytics
            </span>
          </a>

          <a
            href="#resume-analysis"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            <FileText size={22} />
            <span className="font-medium">
              Resume Analyses
            </span>
          </a>

        </nav>

      </div>

      {/* ================= FIXED BOTTOM ================= */}

      <div className="border-t bg-white p-4 space-y-2">

        <Link
          href="/dashboard"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-100 transition-all duration-200"
        >
          <Home size={22} />

          <span className="font-medium">
            User Dashboard
          </span>

        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={22} />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}