"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does CareerCompass AI work?",
    answer:
      "CareerCompass AI analyzes your resume, interests and skills to generate personalized career recommendations.",
  },
  {
    question: "Is resume analysis ATS-friendly?",
    answer:
      "Yes. The platform evaluates resumes using ATS-based standards and provides improvement suggestions.",
  },
  {
    question: "Can I receive internship recommendations?",
    answer:
      "Yes. AI recommends internships and jobs based on your profile and target role.",
  },
  {
    question: "Does it generate learning roadmaps?",
    answer:
      "Absolutely. It creates customized learning plans for your career goals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <h2 className=" text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Everything you need to know about CareerCompass AI.
          </p>

        </div>

        <div className="mt-20 flex flex-col gap-6">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-8 py-6"
              >

                <span className="text-lg font-semibold text-left">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-gray-100 px-8 pb-6 pt-4">

                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}