import { Marquee } from "@/components/shadcn-space/animations/marquee";

const items = [
  { hindi: "अन्नपूर्णा", english: "Annapurna", note: "food" },
  { hindi: "विद्या", english: "Vidya", note: "learning" },
  { hindi: "आश्रय", english: "Aashray", note: "shelter" },
  { hindi: "सहायता", english: "Sahayata", note: "relief" },
];

export function ProgrammeTicker() {
  return (
    <section
      aria-label="Our programs"
      className="border-y-0 bg-marigold py-3.5 text-ink md:py-4"
    >
      <Marquee
        repeat={4}
        className="[--duration:52s] [--gap:3.5rem] p-0"
        pauseOnHover
      >
        {items.map((item) => (
          <div
            key={item.hindi}
            className="flex shrink-0 items-baseline gap-3 pr-3"
          >
            <span className="hindi text-[1.6rem] leading-none md:text-[2rem]">
              {item.hindi}
            </span>
            <span className="text-[0.95rem] font-medium md:text-[1.05rem]">
              {item.english}
            </span>
            <span className="hidden text-[0.85rem] text-ink/65 sm:inline">
              {item.note}
            </span>
            <span className="ml-10 text-[1.2rem] text-ink/40" aria-hidden="true">
              ✳
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
