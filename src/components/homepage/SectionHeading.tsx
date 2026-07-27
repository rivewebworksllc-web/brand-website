type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-eyebrow text-brand-maroon">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-h2 mt-2 text-navy-950">
        {heading}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-[1.65] text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
