import { cn } from "@/lib/utils";

export function StandardHeader({
  title,
  position = "left",
  description,
}: {
  title: string;
  position?: "left" | "right" | "center";
  description: string;
}) {
  return (
    <header
      aria-labelledby={title}
      className={cn(
        "flex flex-col max-w-full text-black dark:text-white mb-10",
        position === "left" && "items-start",
        position === "right" && "items-end",
        position === "center" && "items-center"
      )}
    >
      <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
    </header>
  );
}
