"use client";

import {

useEffect,

useState,

} from "react";

import { useAuth } from "@/context/AuthContext";

import {

getUserAnalyses,

} from "@/lib/firestore";

export default function RecentAnalysis(){

const {user}=useAuth();

const [analyses,setAnalyses]=useState<any[]>([]);

useEffect(()=>{

if(!user) return;
const uid = user.uid;
async function load(){
const data=await getUserAnalyses(uid);
setAnalyses(data.slice(0,5));
}

load();

},[user]);

return(

<div className="bg-white rounded-3xl border shadow-sm p-8">

<h2 className="text-2xl font-bold">

Recent Analyses

</h2>

<div className="mt-6 space-y-5">

{

analyses.map((item)=>(

<div

key={item.id}

className="flex justify-between border-b pb-4"

>

<div>

<h3 className="font-semibold">

{item.resumeFileName}

</h3>

<p className="text-gray-500">

{item.careerRecommendation.role}

</p>

</div>

<div className="text-green-600 font-bold">

{item.atsScore}%

</div>

</div>

))

}

</div>

</div>

)

}