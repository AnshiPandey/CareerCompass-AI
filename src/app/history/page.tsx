"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import PageTitle from "@/components/ui/PageTitle";

import HistoryList from "@/components/history/HistoryList";

export default function HistoryPage(){

return(

<DashboardLayout>

<div className="space-y-8">

<PageTitle

title="Resume History"

subtitle="Review all AI analyses."

/>

<HistoryList/>

</div>

</DashboardLayout>

)

}