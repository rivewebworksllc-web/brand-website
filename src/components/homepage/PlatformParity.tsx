import type { PlatformGroup } from "@/lib/content/homepage";

type PlatformParityProps = {
  groups: PlatformGroup[];
};

export function PlatformParity({ groups }: PlatformParityProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.platform} className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-eyebrow text-brand-maroon">{group.platform}</p>
          <h3 className="text-h3 mt-2 text-navy-950">{group.heading}</h3>
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] leading-[1.65] text-slate-600">
                <span aria-hidden="true" className="text-brand-maroon">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
