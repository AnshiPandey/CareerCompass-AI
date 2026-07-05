"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import StatCards from "@/components/admin/StatCards";

import PlacementChart from "@/components/admin/PlacementChart";
import CareerDistribution from "@/components/admin/CareerDistribution";

import RecentStudents from "@/components/admin/RecentStudents";

import { getAdminStats, AdminStats } from "@/lib/admin";

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalStudents: 0,
    totalResumes: 0,
    averageATS: 0,
    topCareer: "N/A",
  });

  useEffect(() => {
    async function load() {
      const data = await getAdminStats();
      setStats(data);
    }

    load();
  }, []);

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1">
        <Header />

        <div className="p-10 space-y-8">
          <section id="overview">
            <StatCards stats={stats} />
          </section>

          <section
            id="analytics"
            className="grid lg:grid-cols-5 gap-8"
          >
            <div className="lg:col-span-2">
            <PlacementChart /></div>
            <div className="lg:col-span-3">
            <CareerDistribution /></div>
          </section>

          <section id="resume-analysis">
            <RecentStudents />
          </section>
        </div>
      </section>
    </main>
  );
}