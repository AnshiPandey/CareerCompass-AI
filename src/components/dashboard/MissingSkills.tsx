"use client";

import { motion } from "framer-motion";
import { BadgeAlert } from "lucide-react";

interface Props{
skills:string[];
}

export default function MissingSkills({
skills
}:Props){

return(

<motion.div

whileHover={{
y:-5
}}

className="bg-white rounded-3xl border shadow-md p-8"

>

<div className="flex items-center gap-3">

<BadgeAlert className="text-red-500"/>

<h2 className="text-2xl font-bold">

Missing Skills

</h2>

</div>

<p className="mt-2 text-gray-500">

AI recommends learning these technologies.

</p>

<div className="flex flex-wrap gap-4 mt-8">

{

skills.length===0?

<div className="bg-green-100 text-green-700 px-5 py-3 rounded-full">

Excellent Resume 🎉

</div>

:

skills.map(skill=>(

<div

key={skill}

className="rounded-full bg-red-100 px-5 py-3 text-red-700 font-medium"

>

{skill}

</div>

))

}

</div>

</motion.div>

)

}