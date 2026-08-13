type PlatformDomainVisualProps = { domain: "aws" | "azure" | "microsoft-365" };

const labels = {
  aws: "Conceptual cloud-foundation layers separated into operating zones.",
  azure: "Conceptual identity and application paths crossing governed boundaries.",
  "microsoft-365": "Conceptual people, devices, and information connected through shared controls.",
};

export function PlatformDomainVisual({ domain }: PlatformDomainVisualProps) {
  return (
    <figure aria-label={labels[domain]} className="relative h-36 overflow-hidden border-y border-hairline-faint md:h-40">
      <div aria-hidden="true" className="absolute inset-0">
        {domain === "aws" ? <>
          <span className="absolute inset-x-[8%] top-[22%] h-px bg-hairline" />
          <span className="absolute inset-x-[18%] top-1/2 h-px bg-brand-maroon" />
          <span className="absolute inset-x-[28%] top-[76%] h-px bg-hairline" />
          <span className="absolute top-[22%] bottom-[24%] left-[23%] w-px bg-hairline" />
          <span className="absolute top-[22%] bottom-[24%] right-[23%] w-px bg-hairline" />
          <span className="absolute top-[calc(50%-5px)] left-[calc(50%-5px)] h-2.5 w-2.5 border border-brand-maroon bg-surface-alt" />
        </> : null}
        {domain === "azure" ? <>
          <span className="absolute top-[18%] bottom-[18%] left-[22%] w-px bg-hairline" />
          <span className="absolute top-[18%] bottom-[18%] left-1/2 w-px bg-brand-maroon" />
          <span className="absolute top-[18%] bottom-[18%] right-[22%] w-px bg-hairline" />
          <span className="absolute top-[30%] left-[22%] h-px w-[28%] bg-hairline" />
          <span className="absolute right-[22%] bottom-[30%] h-px w-[28%] bg-hairline" />
          <span className="absolute top-[calc(30%-4px)] left-[calc(50%-4px)] h-2 w-2 rotate-45 border border-brand-maroon bg-surface-alt" />
          <span className="absolute right-[calc(22%-4px)] bottom-[calc(30%-4px)] h-2 w-2 rotate-45 border border-brand-maroon bg-surface-alt" />
        </> : null}
        {domain === "microsoft-365" ? <>
          <span className="absolute top-1/2 right-[16%] left-[16%] h-px bg-hairline" />
          <span className="absolute top-[24%] bottom-[24%] left-1/2 w-px bg-brand-maroon" />
          {["left-[16%]", "left-[38%]", "right-[38%]", "right-[16%]"].map((position) => (
            <span key={position} className={`absolute top-[calc(50%-6px)] h-3 w-3 rounded-full border border-brand-maroon bg-surface-alt ${position}`} />
          ))}
          <span className="absolute top-[24%] left-[calc(50%-6px)] h-3 w-3 border border-brand-maroon bg-surface-alt" />
          <span className="absolute bottom-[24%] left-[calc(50%-6px)] h-3 w-3 border border-brand-maroon bg-surface-alt" />
        </> : null}
      </div>
    </figure>
  );
}
