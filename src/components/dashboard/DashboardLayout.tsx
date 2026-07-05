"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="flex">

        <Sidebar />

        <div className="flex-1 flex flex-col min-h-screen lg:ml-72">

          <Header />

          <main className="flex-1 p-5 md:p-8">

            {children}

          </main>

        </div>

      </div>


    </div>
  );
}