"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm px-5 py-3 flex items-center gap-4">

      <Search className="text-gray-400" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="flex-1 outline-none bg-transparent"
      />

    </div>
  );
}