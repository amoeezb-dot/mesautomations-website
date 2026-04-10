import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
