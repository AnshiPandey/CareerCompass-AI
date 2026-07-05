"use client";

import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b h-20 flex justify-between items-center px-10">

      <div>

        <h1 className="text-3xl font-bold">

          Admin Dashboard

        </h1>

        <p className="text-gray-500">

          Placement Analytics & AI Reports

        </p>

      </div>

      <div className="flex items-center gap-5">

        <Bell />

        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

          A

        </div>

      </div>

    </header>
  );
}