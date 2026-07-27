import Link from "next/link";
import type { SolutionLane } from "@/lib/content/homepage";

export function SolutionLaneCard({ title, buyerNeed, href }: SolutionLane) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-brand-gold motion-reduce:transition-none"
    >
      <h3 className="text-h3 text-navy-950">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-slate-600">{buyerNeed}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 group-hover:underline">
        Explore
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
