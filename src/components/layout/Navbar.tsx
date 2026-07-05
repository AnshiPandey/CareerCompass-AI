"use client";

import Link from "next/link";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";

const links = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Contact",
    href: "#footer",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/login">
          <Button className=" px-6 py-2">
            Login
          </Button>
        </Link>

      </div>
    </header>
  );
}