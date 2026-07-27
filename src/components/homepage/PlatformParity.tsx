import type { PlatformGroup } from "@/lib/content/homepage";

type PlatformParityProps = {
  groups: PlatformGroup[];
};

export function PlatformParity({ groups }: PlatformParityProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.platform} className="card p-7">
          <p className="text-eyebrow text-brand-maroon">{group.platform}</p>
          <h3 className="text-h3 mt-2 text-navy-950">{group.heading}</h3>
          <ul className="mt-5 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] leading-[1.65] text-slate-700">
                <span aria-hidden="true" className="mt-0.5 text-brand-maroon">
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
