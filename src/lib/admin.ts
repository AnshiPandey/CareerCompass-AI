import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

export interface AdminStats {
  totalStudents: number;
  totalResumes: number;
  averageATS: number;
  topCareer: string;
}
export interface RecentStudent {
  id: string;
  resumeFileName: string;
  atsScore: number;
  career: string;
  createdAt: any;
}

export async function getAdminStats(): Promise<AdminStats> {
  const usersSnapshot = await getDocs(collection(db, "users"));

  const analysisSnapshot = await getDocs(
    collection(db, "resumeAnalysis")
  );

  const analyses = analysisSnapshot.docs.map((doc) => doc.data());

  const totalStudents = usersSnapshot.size;

  const totalResumes = analyses.length;

  let totalATS = 0;

  const careers: Record<string, number> = {};

  analyses.forEach((analysis: any) => {
    totalATS += analysis.atsScore ?? 0;

    const role =
      analysis.careerRecommendation?.role ??
      "Unknown";

    careers[role] = (careers[role] || 0) + 1;
  });

  const averageATS =
    totalResumes === 0
      ? 0
      : Math.round(totalATS / totalResumes);

  let topCareer = "N/A";
  let max = 0;

  Object.entries(careers).forEach(([role, count]) => {
    if (count > max) {
      max = count;
      topCareer = role;
    }
  });

  return {
    totalStudents,
    totalResumes,
    averageATS,
    topCareer,
  };
}

export async function getRecentStudents(): Promise<RecentStudent[]> {
  const snapshot = await getDocs(collection(db, "resumeAnalysis"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[];

  data.sort(
    (a, b) =>
      (b.createdAt?.seconds ?? 0) -
      (a.createdAt?.seconds ?? 0)
  );

  return data.slice(0, 5).map((item) => ({
    id: item.id,
    resumeFileName: item.resumeFileName ?? "Resume.pdf",
    atsScore: item.atsScore,
    career:
      item.careerRecommendation?.role ?? "Unknown",
    createdAt: item.createdAt,
  }));
}

export async function getCareerDistribution() {
  const snapshot = await getDocs(
    collection(db, "resumeAnalysis")
  );

  const careers: Record<string, number> = {};

  snapshot.docs.forEach((doc) => {
    const role =
      doc.data().careerRecommendation?.role ??
      "Unknown";

    careers[role] = (careers[role] || 0) + 1;
  });

  return Object.entries(careers).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
}

export async function getPlacementTrend() {
  const snapshot = await getDocs(
    collection(db, "resumeAnalysis")
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const counts = new Array(12).fill(0);

  snapshot.docs.forEach((doc) => {
    const createdAt = doc.data().createdAt;

    if (!createdAt) return;

    const date = createdAt.toDate();

    counts[date.getMonth()]++;
  });

  return months.map((month, index) => ({
    month,
    students: counts[index],
  }));
}