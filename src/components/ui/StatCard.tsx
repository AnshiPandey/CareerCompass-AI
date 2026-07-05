import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-500",
}: Props) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-6 hover:shadow-lg transition-all duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center`}
        >
          <Icon size={28} />
        </div>

      </div>

    </div>
  );
}