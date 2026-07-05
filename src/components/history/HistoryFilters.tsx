"use client";

import SearchBar from "@/components/ui/SearchBar";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function HistoryFilters({
  search,
  setSearch,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between">

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border p-3 bg-white"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="highest">Highest ATS</option>
      </select>

    </div>
  );
}