import {addDoc,collection,serverTimestamp,getDocs,query,where,orderBy} from "firebase/firestore";
import { db } from "./firebase";
import { CareerAnalysis } from "@/types/analysis";
import { doc, getDoc } from "firebase/firestore";
/**
 * Save AI Analysis
 */
export async function saveAnalysis(
  uid: string,
  analysis: CareerAnalysis,
  resumeFileName?: string
) {
  await addDoc(collection(db, "resumeAnalysis"), {
    uid,

    resumeFileName: resumeFileName ?? "Resume.pdf",

    atsScore: analysis.atsScore,

    missingSkills: analysis.missingSkills,

    careerRecommendation: analysis.careerRecommendation,

    roadmap: analysis.roadmap,

    createdAt: serverTimestamp(),
  });
}

/**
 * Get total number of analyses
 */
export async function getAnalysisCount(uid: string) {
  const q = query(
    collection(db, "resumeAnalysis"),
    where("uid", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.size;
}

/**
 * Get all analyses of a user
 */
export async function getUserAnalyses(
  uid: string
): Promise<(CareerAnalysis & { id: string; resumeFileName?: string })[]> {
  const q = query(
    collection(db, "resumeAnalysis"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as CareerAnalysis & { resumeFileName?: string }),
  }));
}

export async function getAnalysisById(
  id: string
): Promise<(CareerAnalysis & { id: string; resumeFileName?: string }) | null> {
  const ref = doc(db, "resumeAnalysis", id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as CareerAnalysis & { resumeFileName?: string }),
  };
}