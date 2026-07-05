"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProfileCard() {

  const { user } = useAuth();

  return (

<div className="bg-white rounded-3xl border shadow-sm p-8">

<div className="flex items-center gap-6">

<img
src={
user?.photoURL ??
"https://ui-avatars.com/api/?name=User"
}
alt="avatar"
className="w-24 h-24 rounded-full"
/>

<div>

<h2 className="text-3xl font-bold">

{user?.displayName}

</h2>

<p className="text-gray-500 mt-2">

{user?.email}

</p>

<p className="text-blue-600 mt-3">

CareerCompass AI Member

</p>

</div>

</div>

</div>

)

}