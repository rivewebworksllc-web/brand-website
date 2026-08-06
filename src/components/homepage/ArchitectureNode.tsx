type ArchitectureNodeProps = {
  index: number;
  label: string;
};

/**
 * RW-PW06A: the same node vocabulary as the hero's RiveOperatingArchitecture
 * (numbered gold ring) recurring, small, on the section that corresponds to
 * that stage — so a visitor who saw the hero diagram recognizes "this
 * section is the Governed AI stage" without reading a new label system.
 * Deliberately NOT styled as an eyebrow (no uppercase/letter-spacing) so it
 * doesn't reintroduce the eyebrow-overuse pattern removed in RW-PW05A —
 * this is a wayfinding marker, not a section label.
 */
export function ArchitectureNode({ index, label }: ArchitectureNodeProps) {
  return (
    <div aria-hidden="true" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gold-deep text-evidence font-semibold text-heading">
        {String(index).padStart(2, "0")}
      </span>
      <span className="text-[12px] font-semibold text-muted">{label}</span>
    </div>
  );
}
