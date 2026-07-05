import {
  Brain,
  FileText,
  GraduationCap,
  Briefcase,
  Bot,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Advisor",
    description:
      "Receive personalized career guidance based on your interests, skills, and career goals.",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Upload your resume and instantly receive an ATS score with AI suggestions.",
  },
  {
    icon: GraduationCap,
    title: "Learning Roadmaps",
    description:
      "Get personalized learning paths to prepare for your dream career.",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    description:
      "Find internships and jobs based on your skills and interests.",
  },
  {
    icon: Bot,
    title: "AI Career Reports",
    description:
      "Generate detailed reports with strengths, weaknesses and recommendations.",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and receive personalized improvement plans.",
  },
];

export default function Features() {
  return (

    <section
      id="features"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-6xl px-8 pt-12 text-center">

          <h2 className="text-5xl font-bold text-gray-900 ">
            Everything You Need
          </h2>

          <p className=" mt-6 text-lg text-gray-500">
            Powerful AI tools designed to help students become industry ready.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon
                    size={30}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-500">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}