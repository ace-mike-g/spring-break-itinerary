interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-lg text-white/60">{subtitle}</p>
      )}
    </div>
  );
}
