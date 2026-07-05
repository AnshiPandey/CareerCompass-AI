"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleGoogleLogin = async () => {
  try {
    const user = await signInWithGoogle();

    console.log("Logged in:", user);

    router.push("/dashboard");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <main className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <section className="hidden lg:flex bg-gradient-to-br from-blue-600 to-purple-700 text-white items-center justify-center p-16">

        <div>

          <h1 className="text-6xl font-bold leading-tight">

            Welcome to

            <br />

            CareerCompass AI

          </h1>

          <p className="mt-8 text-xl leading-9 text-blue-100">

            Discover careers.

            <br />

            Improve your resume.

            <br />

            Find internships.

            <br />

            Build personalized roadmaps.

          </p>

        </div>

      </section>

      {/* Right Side */}

<section className="flex items-center justify-center px-6">

  <div className=" w-full max-w-md ">

    <div className=" rounded-3xl bg-white border border-slate-200 shadow-2xl min-h-[60vh] ">

      {/* Logo */}

      <div className="flex justify-center">

        <div className="mt-10 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">

          <span className=" text-3xl">🤖</span>

        </div>

      </div>

      {/* Heading */}

      <h2  className="mt-6 text-center text-4xl font-bold text-slate-900"> 
        Welcome Back 
      </h2>

      <p className="mt-3 text-center text-gray-500 leading-7">

        Sign in with your Google account to continue your
        AI-powered career journey.

      </p>

      {/* Google Button */}

      <button
        onClick={handleGoogleLogin}
        className="
        mt-10
        w-full
        flex
        items-center
        justify-center
        gap-4
        rounded-2xl
        border
        border-slate-300
        bg-white
        py-4
        text-lg
        font-medium
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-lg
      "
      >
        <FcGoogle size={30} />
        Continue with Google
      </button>

      {/* Trust text */}

      <p className="mt-6 text-center text-sm text-gray-400">

        Secure authentication powered by Google.

      </p>

      {/* Divider */}

      <div className="my-8 flex items-center">

        <div className="h-px flex-1 bg-slate-200"></div>

        <span className="px-4 text-sm text-slate-400">

          CareerCompass AI

        </span>

        <div className="h-px flex-1 bg-slate-200"></div>

      </div>

      {/* Back */}

      <Link
        href="/"
        className="
        flex justify-center text-blue-600 font-medium
        hover:text-blue-700 mb-3 transition
      "
      >
        ← Back to Home
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}