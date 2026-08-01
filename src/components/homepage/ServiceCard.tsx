type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="card card-interactive h-full p-7">
      <span
        aria-hidden="true"
        className="mb-3 block h-1.5 w-6 rounded-full bg-brand-maroon/70"
      />
      <h3 className="text-h3 text-navy-950">{title}</h3>
      <p className="mt-2 text-[15px] leading-[1.65] text-slate-700">{description}</p>
    </div>
  );
}
