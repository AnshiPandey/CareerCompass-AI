"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {Brain,Award,BarChart3} from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import {getAnalysisCount,getUserAnalyses} from "@/lib/firestore";

export default function ProfileStats(){

const {user}=useAuth();
const [count,setCount]=useState(0);
const [average,setAverage]=useState(0);
const [role,setRole]=useState("-");

useEffect(() => {
  if (!user) return;

  const uid = user.uid;

  async function load() {
    const analyses = await getUserAnalyses(uid);
    const total = await getAnalysisCount(uid);
    setCount(total);

    if (analyses.length) {
      const avg =
        analyses.reduce(
          (sum: any, item: any) => sum + item.atsScore,
          0
        ) / analyses.length;

      setAverage(Math.round(avg));

      setRole(analyses[0].careerRecommendation.role);
    }
  }

  load();
}, [user]);

return(
<div className="grid md:grid-cols-3 gap-6">
<StatCard title="Total Analyses" value={count} icon={Brain}/>
<StatCard title="Average ATS" value={`${average}%`} icon={BarChart3} color="bg-green-600"/>
<StatCard title="Best Career" value={role} icon={Award} color="bg-purple-600"/>
</div>
)
}