import {
  Users,
  FileText,
  Trophy,
  Brain,
} from "lucide-react";

interface Props {
  stats: {
    totalStudents: number;
    totalResumes: number;
    averageATS: number;
    topCareer: string;
  };
}

export default function StatCards({ stats }: Props) {
  const cards = [
    {
      title: "Students",
      value: stats.totalStudents,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Resumes",
      value: stats.totalResumes,
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Average ATS",
      value: `${stats.averageATS}%`,
      icon: Trophy,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Top Career",
      value: stats.topCareer,
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-3xl shadow-md p-8"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.color}`}
              >
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}