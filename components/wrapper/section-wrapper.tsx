import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("w-full h-fit max-w-[1920px] px-4 lg:mt-20", className)}
    >
      {children}
    </section>
  );
}
