"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { analyzeResumeAPI } from "@/lib/api";
import { saveAnalysis } from "@/lib/firestore";
import { useAuth } from "@/context/AuthContext";
import { CareerAnalysis } from "@/types/analysis";

interface ResumeUploaderProps {
  onAnalysisComplete: (analysis: CareerAnalysis) => void;
}

export default function ResumeUploader({
  onAnalysisComplete,
}: ResumeUploaderProps) {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function analyzeFile(file: File) {
    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Resume should be smaller than 5 MB.");
      return;
    }

    try {
      setLoading(true);
      setSelectedFile(file);

      setStatus("📄 Extracting resume...");
      const { processResume } = await import("@/lib/pdf");

const processedResume = await processResume(file);

      setStatus("🤖 Analyzing with Gemini AI...");
      const analysis = await analyzeResumeAPI(processedResume.text);

      setStatus("💾 Saving analysis...");

      if (user) {
        await saveAnalysis(user.uid, analysis, file.name);
      }

      setStatus("✅ Analysis completed!");

      onAnalysisComplete(analysis);

      toast.success("Resume analyzed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Unable to analyze resume.");
    } finally {
      setLoading(false);
    }
  }

  const onDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    analyzeFile(acceptedFiles[0]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    multiple: false,
    disabled: loading,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

      <div className="text-center">

        <h2 className="text-3xl font-bold">
          Resume Analysis
        </h2>

        <p className="text-gray-500 mt-3">
          Upload your resume and receive AI-powered career insights,
          ATS score, missing skills, and a personalized roadmap.
        </p>

      </div>

      {/* Upload Area */}

      <div
        {...getRootProps()}
        className={`mt-8 border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300
        ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-slate-300 hover:border-blue-500 hover:bg-slate-50"
        }`}
      >

        <input {...getInputProps()} />

        <UploadCloud
          size={70}
          className="mx-auto text-blue-600"
        />

        <h3 className="mt-6 text-2xl font-semibold">

          {isDragActive
            ? "Drop your resume here"
            : "Drag & Drop your Resume"}

        </h3>

        <p className="text-gray-500 mt-3">
          or click to browse
        </p>

        <p className="text-sm text-gray-400 mt-2">
          PDF only • Maximum 5 MB
        </p>

      </div>

      {/* Selected File */}

      {selectedFile && (

        <div className="mt-8 bg-blue-50 rounded-2xl p-5 flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

            <FileText className="text-blue-600" />

          </div>

          <div>

            <h3 className="font-semibold">

              {selectedFile.name}

            </h3>

            <p className="text-sm text-gray-500">

              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

            </p>

          </div>

        </div>

      )}

      {/* Loading */}

      {loading && (

        <div className="mt-8 rounded-2xl bg-slate-100 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold">

                {status}

              </h3>

              <p className="text-gray-500 text-sm mt-1">

                Please wait while CareerCompass AI processes your resume.

              </p>

            </div>

            <LoaderCircle
              className="animate-spin text-blue-600"
              size={32}
            />

          </div>

          <div className="mt-5 h-3 rounded-full bg-gray-200 overflow-hidden">

            <div className="h-full w-2/3 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse rounded-full" />

          </div>

        </div>

      )}

    </div>
  );
}