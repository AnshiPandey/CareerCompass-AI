import { Inbox } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-12 text-center">

      <Inbox
        size={60}
        className="mx-auto text-gray-400"
      />

      <h2 className="text-2xl font-bold mt-6">

        {title}

      </h2>

      <p className="text-gray-500 mt-3">

        {description}

      </p>

    </div>
  );
}