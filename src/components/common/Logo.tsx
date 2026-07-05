import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <h1
      className={clsx(
        "text-4xl font-extrabold tracking-tight text-blue-600",
        className
      )}
    >
      CareerCompass AI
    </h1>
  );
}