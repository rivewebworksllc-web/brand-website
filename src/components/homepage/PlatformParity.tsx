import type { PlatformGroup } from "@/lib/content/homepage";

type PlatformParityProps = {
  groups: PlatformGroup[];
  sharedLayer: string[];
};

export function PlatformParity({ groups, sharedLayer }: PlatformParityProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.platform} className="card p-7">
            <p className="text-eyebrow text-brand-maroon">{group.platform}</p>
            <h3 className="text-h3 mt-2 text-heading">{group.heading}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-[1.65] text-body">
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

      <div className="card mt-6 p-6">
        <p className="text-eyebrow text-brand-maroon">Shared layer</p>
        <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-[14px] font-medium text-heading">
          {sharedLayer.map((item, index) => (
            <li key={item} className="flex items-center gap-2">
              {item}
              {index < sharedLayer.length - 1 ? (
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
