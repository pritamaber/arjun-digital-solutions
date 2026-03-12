import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ShinyButton({ children, className }: Props) {
  return (
    <button
      className={`group relative overflow-hidden bg-[#1E6FAF] text-white px-6 py-3 rounded-full font-medium transition hover:scale-[1.02] cursor-pointer ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/30 rotate-12 animate-shine"></span>
    </button>
  );
}
