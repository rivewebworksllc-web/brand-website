import type { ProofItem } from "@/lib/content/homepage";

type ProofPlaceholderProps = {
  items: ProofItem[];
};

/**
 * Until real, approved case studies exist, every card is labeled for
 * exactly what it is — never presented as customer success evidence.
 */
export function ProofPlaceholder({ items }: ProofPlaceholderProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <li key={item.label} className="card h-full border-dashed p-5">
          <p className="text-evidence text-muted">{item.label}</p>
          <p className="mt-2 text-[14px] leading-[1.6] text-body">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
