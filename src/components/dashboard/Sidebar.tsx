"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  LayoutDashboard,
  History,
  User,
  Shield,
  LogOut,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Admin",
    href: "/admin",
    icon: Shield,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <motion.aside
      initial={{
        x: -80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 shadow-sm hidden lg:flex flex-col z-40"
    >

      <div className="h-20 border-b flex items-center px-8">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">

          <Sparkles />

        </div>

        <div className="ml-4">

          <h2 className="font-bold text-xl">

            CareerCompass

          </h2>

          <p className="text-sm text-gray-500">

            AI Career Guide

          </p>

        </div>

      </div>

      <nav className="flex-1 p-6 space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300
              ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "hover:bg-slate-100 text-gray-700"
              }`}
            >

              <Icon size={22} />

              <span className="font-medium">

                {item.title}

              </span>

            </Link>

          );

        })}

      </nav>

      <div className="border-t p-10">

        <button
  onClick={async () => {
    await logout();
    router.push("/login");
  }}
  className="flex items-center gap-3 text-red-500 hover:text-red-600 transition"
>
  <LogOut size={20} />
  Logout
</button>

      </div>

    </motion.aside>
  );
}