"use client";

import { useEffect, useState } from "react";
import { getRecentStudents, RecentStudent } from "@/lib/admin";

export default function RecentStudents() {
  const [students, setStudents] = useState<RecentStudent[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getRecentStudents();
      setStudents(data);
    }

    load();
  }, []);

  return (
    <div
      id="students"
      className="bg-white rounded-3xl shadow-md p-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        Recent Resume Analyses
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Resume</th>

              <th className="text-left py-3">ATS</th>

              <th className="text-left py-3">Career</th>

              <th className="text-left py-3">Date</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="py-4 font-medium">

                  {student.resumeFileName}

                </td>

                <td className="py-4 text-green-600 font-semibold">

                  {student.atsScore}%

                </td>

                <td className="py-4">

                  {student.career}

                </td>

                <td className="py-4 text-gray-500">

                  {student.createdAt?.toDate?.().toLocaleDateString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}