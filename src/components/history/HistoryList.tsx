"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserAnalyses } from "@/lib/firestore";

import HistoryCard from "./HistoryCard";
import HistoryFilters from "./HistoryFilters";
import EmptyState from "@/components/ui/EmptyState";

export default function HistoryList() {
  const { user } = useAuth();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const [analyses, setAnalyses] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    const uid = user.uid;
    async function load() {
      const data = await getUserAnalyses(uid);
      setAnalyses(data);
    }

    load();
  }, [user]);

  // Search
  const filtered = analyses.filter((item) =>
    (item.resumeFileName || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Sorting
  const sorted = [...filtered];

  switch (sortBy) {
    case "latest":
      sorted.sort(
        (a, b) =>
          (b.createdAt?.seconds ?? 0) -
          (a.createdAt?.seconds ?? 0)
      );
      break;

    case "oldest":
      sorted.sort(
        (a, b) =>
          (a.createdAt?.seconds ?? 0) -
          (b.createdAt?.seconds ?? 0)
      );
      break;

    case "highest":
      sorted.sort(
        (a, b) => b.atsScore - a.atsScore
      );
      break;
  }

  if (sorted.length === 0) {
    return (
      <EmptyState
        title="No Analysis Found"
        description="Upload your first resume."
      />
    );
  }

  return (
    <div className="space-y-8">

      <HistoryFilters
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="space-y-6">
        {sorted.map((item) => (
          <HistoryCard
            key={item.id}
            analysis={item}
          />
        ))}
      </div>

    </div>
  );
}