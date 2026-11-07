import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  title?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
    >
      <path
        d="M5 45V21.5C5 11.835 12.835 4 22.5 4h3C35.165 4 43 11.835 43 21.5V45H31.5V22.5a7.5 7.5 0 0 0-15 0V45H5Z"
        fill="currentColor"
      />
      <circle cx="24" cy="32.5" r="4.75" fill="var(--marigold)" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  title = "NitiSeva home",
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      {showWordmark ? (
        <span
          className={cn(
            "text-[1.4rem] leading-none font-semibold tracking-[-0.04em]",
            wordmarkClassName,
          )}
        >
          {title === "NitiSeva home" ? "NitiSeva" : title}
        </span>
      ) : null}
    </span>
  );
}
