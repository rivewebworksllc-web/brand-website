type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="h-full rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="text-h3 text-navy-950">{title}</h3>
      <p className="mt-2 text-[15px] leading-[1.65] text-slate-600">{description}</p>
    </div>
  );
}
