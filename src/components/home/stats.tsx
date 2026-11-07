import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="shell py-24 md:py-36">
      <div className="grid-12 gap-y-14">
        <div className="col-span-12 md:col-span-6 md:col-start-2">
          <h2 className="text-[1.8rem] leading-tight tracking-[-0.03em]">
            The work, in numbers.
          </h2>

          <dl className="mt-12 flex flex-col gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[8rem_1fr] items-baseline gap-6 md:grid-cols-[9.5rem_1fr] md:gap-8"
              >
                <dd className="text-right text-[1.85rem] leading-none font-medium tracking-[-0.03em] tabular-nums md:text-[2rem]">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </dd>
                <dt className="max-w-[38ch] text-[0.98rem] leading-relaxed text-ink-soft">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <p className="mt-10 pl-[8rem] text-[0.82rem] text-ink-soft md:pl-[9.5rem] md:ml-8">
            Figures for the year ending 31 March 2026.
          </p>
        </div>

        <BlurFade
          inView
          direction="up"
          delay={0.15}
          className="col-span-10 col-start-2 md:col-span-3 md:col-start-9 md:mt-24"
        >
          <div className="photo-frame aspect-square">
            <Image
              src="/images/school.jpg"
              alt="Children at a government school holding new notebooks and stationery kits"
              fill
              sizes="(max-width: 768px) 84vw, 24vw"
              className="object-cover object-[48%_42%]"
            />
          </div>
          <p className="mt-3 max-w-[30ch] text-[0.82rem] leading-relaxed text-ink-soft">
            Vidya centre, Patna. Forty new books arrived in June; all forty are
            already in circulation.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
