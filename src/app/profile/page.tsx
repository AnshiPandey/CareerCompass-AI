"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileStats from "@/components/profile/ProfileStats";
import RecentAnalysis from "@/components/profile/RecentAnalysis";
import PageTitle from "@/components/ui/PageTitle";

export default function ProfilePage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <PageTitle
          title="Profile"
          subtitle="Track your AI career journey."
        />

        <ProfileCard />

        <ProfileStats />

        <RecentAnalysis />

      </div>

    </DashboardLayout>
  );
}