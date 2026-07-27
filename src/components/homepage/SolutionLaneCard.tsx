import Link from "next/link";
import type { SolutionLane } from "@/lib/content/homepage";

export function SolutionLaneCard({ title, buyerNeed, href }: SolutionLane) {
  return (
    <Link
      href={href}
      className="card card-interactive group relative flex h-full flex-col overflow-hidden p-7"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gold-deep" />
      <h3 className="text-h3 text-navy-950">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-slate-700">{buyerNeed}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 group-hover:underline">
        Explore
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
