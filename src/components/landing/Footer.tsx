import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-900 text-white"
    >
      <div className="mx-auto max-width-7xl px-6 py-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <h2 className="text-3xl font-bold">

              CareerCompass AI

            </h2>

            <p className="mt-6 leading-8 text-gray-400">

              AI-powered career guidance platform helping students build
              successful careers through personalized recommendations.

            </p>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">

              Platform

            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Resume Analyzer</p>

              <p>Career Roadmaps</p>

              <p>Skill Gap Analysis</p>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">

              Resources

            </h3>

            <div className="space-y-3 text-gray-400">

              <p>About</p>

              <p>FAQ</p>

              <p>Contact</p>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">

              Connect

            </h3>

            <div className="flex gap-5">

              <FaGithub
                size={24}
                className="cursor-pointer transition hover:text-blue-400"
              />

              <FaLinkedin
                size={24}
                className="cursor-pointer transition hover:text-blue-400"
              />

              <MdEmail
                size={24}
                className="cursor-pointer transition hover:text-blue-400"
              />

            </div>

          </div>

        </div>

        <div className="my-12 border-t border-slate-700"></div>

        <p className="text-center text-gray-400">

          © 2026 CareerCompass AI. All rights reserved.

        </p>

      </div>
    </footer>
  );
}