"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8">
        <div className="grid w-full items-center gap-25 lg:grid-cols-2">

          {/* Left */}
          <div className="max-w-xl">

            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 AI Career Guidance Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl ">
              Build Your{" "}<br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              With AI
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 ">
              Upload your resume, discover skill gaps, generate personalized
              career roadmaps, and receive AI-powered recommendations to land
              your dream job faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                className="px-8 py-4 text-lg "
                onClick={() => router.push("/login")}
              >
                Get Started
              </Button>

              <Button
                className="border border-blue-600 bg-white px-8 py-4 text-lg text-blue-600 shadow-none hover:bg-blue-50 "
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Features
              </Button>

            </div>


          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
                alt="CareerCompass AI"
                className="h-[480px] w-full rounded-2xl object-cover lg:w-[600px]"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}