import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { DottedMap } from "@/components/ui/dotted-map";
import { SectionHeading } from "@/components/site/section";

const cities = [
  { lat: 26.85, lng: 80.95, size: 0.55, name: "Lucknow" },
  { lat: 28.61, lng: 77.21, size: 0.45, name: "Delhi" },
  { lat: 25.59, lng: 85.14, size: 0.45, name: "Patna" },
  { lat: 26.91, lng: 75.79, size: 0.42, name: "Jaipur" },
  { lat: 23.26, lng: 77.41, size: 0.42, name: "Bhopal" },
  { lat: 25.32, lng: 82.97, size: 0.42, name: "Varanasi" },
  { lat: 27.7, lng: 80.9, size: 0.36, name: "Bahraich" },
];

const facts = [
  { value: "6", label: "states" },
  { value: "24", label: "districts" },
  { value: "11", label: "kitchens" },
  { value: "9", label: "shelters" },
];

export function PromiseSection() {
  return (
    <section id="about" className="shell pt-24 pb-8 md:pt-36 md:pb-14">
      <SectionHeading
        title={
          <>
            Service is a promise
            <br className="hidden sm:block" /> you keep.
          </>
        }
        intro={
          <>
            <p>
              We started in 2014 with one kitchen and a borrowed pressure
              cooker. Twelve years later, the rule is still the same: open the
              door, serve a hot plate, ask nothing at the counter.
            </p>
            <p className="mt-4">
              Niti means policy. Seva means service. We keep the two together —
              not a campaign that arrives with the cameras, but a routine that
              is there on an ordinary Tuesday.
            </p>
            <Link href="/about" className="link-line mt-6 text-[1rem]">
              How we work <span aria-hidden="true">↗</span>
            </Link>
          </>
        }
      />

      <div className="grid-12 mt-14 items-start gap-y-10 md:mt-20">
        <BlurFade
          inView
          direction="up"
          delay={0.05}
          className="col-span-12 md:col-span-8"
        >
          <div className="relative">
            <div className="photo-frame aspect-[16/10]">
              <Image
                src="/images/food.jpg"
                alt="A cook at a NitiSeva community kitchen serving a plate of hot food to a young girl"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-[45%_45%]"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-[0.82rem] text-ink-soft">
              <p>The Lucknow kitchen, 7:10 am.</p>
              <p>212 plates before noon.</p>
            </div>

            <div className="mt-8 bg-paper p-0 md:absolute md:top-8 md:-right-8 md:mt-0 md:w-[19rem] md:p-6">
              <p className="text-[1.25rem] leading-[1.3] tracking-[-0.025em] text-ink">
                “No one is asked why they are hungry. That is the whole
                policy.”
              </p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-soft">
                Sunita Devi, kitchen lead, Lucknow
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="col-span-12 md:col-span-4 md:col-start-10">
          <BlurFade inView direction="up" delay={0.15}>
            <div className="bg-marigold p-3">
              <DottedMap
                width={150}
                height={75}
                viewBox="102 21 14 17"
                mapSamples={18000}
                markers={cities}
                dotColor="rgba(23, 35, 60, 0.34)"
                markerColor="#17233c"
                dotRadius={0.14}
                className="aspect-[4/5] w-full"
                role="img"
                aria-label="Dotted map of India marking NitiSeva's kitchen and shelter locations"
              />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="text-[0.8rem] text-ink-soft">{fact.label}</dt>
                  <dd className="text-[1.7rem] leading-none tracking-[-0.03em]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-[28ch] text-[0.85rem] leading-relaxed text-ink-soft">
              From Lucknow outward: kitchens, classrooms and shelters within a
              day&apos;s drive of the communities that run them.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
