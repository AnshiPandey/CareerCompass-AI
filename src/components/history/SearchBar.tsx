"use client";

import { Search } from "lucide-react";

interface Props{

value:string;

onChange:(value:string)=>void;

}

export default function SearchBar({

value,

onChange

}:Props){

return(

<div className="bg-white rounded-2xl shadow border p-4 flex items-center gap-4">

<Search/>

<input

value={value}

onChange={(e)=>onChange(e.target.value)}

placeholder="Search resume..."

className="flex-1 outline-none"

/>

</div>

)

}