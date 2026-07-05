"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Props{
roadmap:string[];
}

export default function Roadmap({
roadmap
}:Props){

return(

<motion.div

whileHover={{
y:-5
}}

className="bg-white rounded-3xl border shadow-md p-8"

>

<div className="flex gap-3 items-center">

<GraduationCap className="text-blue-600"/>

<h2 className="text-2xl font-bold">

Learning Roadmap

</h2>

</div>

<div className="mt-8 space-y-8">

{

roadmap.map((step,index)=>(

<div
key={index}
className="flex gap-5"
>

<div className="flex flex-col items-center">

<div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">

{index+1}

</div>

{

index!==roadmap.length-1&&(

<div className="w-1 h-12 bg-blue-200"/>

)

}

</div>

<div>

<h3 className="font-semibold">

Step {index+1}

</h3>

<p className="text-gray-600">

{step}

</p>

</div>

</div>

))

}

</div>

</motion.div>

)

}