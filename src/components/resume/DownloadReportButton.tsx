"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";

import CareerReport from "../pdf/CareerReport";

import { CareerAnalysis } from "@/types/analysis";

interface Props {
  userName: string;
  analysis: CareerAnalysis;
}

export default function DownloadReportButton({
  userName,
  analysis,
}: Props) {
  return (
    <PDFDownloadLink
      document={
        <CareerReport
          userName={userName}
          analysis={analysis}
        />
      }
      fileName="CareerCompass_Report.pdf"
    >
      {({ loading }) =>
        loading ? (
          <button className="rounded-lg bg-gray-400 px-5 py-3 text-white">
            Preparing PDF...
          </button>
        ) : (
          <button className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
            Download Report
          </button>
        )
      }
    </PDFDownloadLink>
  );
}