import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export function StorySection() {
  return (
    <section className="bg-paper-deep py-24 md:py-32">
      <div className="shell grid-12 gap-y-12">
        <div className="col-span-12 md:col-span-4 md:col-start-2">
          <h2 className="text-[1.7rem] leading-none tracking-[-0.03em]">
            From the field.
          </h2>
        </div>

        <BlurFade
          inView
          direction="up"
          className="col-span-10 col-start-2 md:col-span-4 md:col-start-2 md:row-start-2"
        >
          <div className="photo-frame aspect-[3/4]">
            <Image
              src="/images/care.jpg"
              alt="A caregiver sitting with a group of children, reading from a picture book"
              fill
              sizes="(max-width: 768px) 84vw, 30vw"
              className="object-cover object-[40%_45%]"
            />
          </div>
          <p className="mt-3 text-[0.82rem] text-ink-soft">
            Vidya centre, Patna. Saturday reading hour.
          </p>
        </BlurFade>

        <div className="col-span-12 flex flex-col md:col-span-5 md:col-start-7 md:row-start-2 md:pt-24">
          <BlurFade inView direction="up" delay={0.1}>
            <blockquote>
              <p className="text-[clamp(1.8rem,2.9vw,2.9rem)] leading-[1.16] tracking-[-0.035em] text-balance">
                “The kitchen opens at six. By seven there is a line, and by
                eight the first pots are empty. Hunger is not a story here. It
                is a timetable.”
              </p>
              <footer className="mt-8 text-[1rem]">
                <p className="font-medium">Sunita Devi</p>
                <p className="mt-1 text-ink-soft">
                  Kitchen lead, Annapurna, Lucknow
                </p>
              </footer>
            </blockquote>
          </BlurFade>

          <BlurFade
            inView
            direction="up"
            delay={0.18}
            className="mt-12 self-end md:mt-16"
          >
            <div className="w-[11rem] md:w-[13rem]">
              <div className="photo-frame aspect-square">
                <Image
                  src="/images/food.jpg"
                  alt="A cook ladling dal into a steel plate at the community kitchen"
                  fill
                  sizes="13rem"
                  className="object-cover object-[30%_50%]"
                />
              </div>
              <p className="mt-2.5 text-[0.8rem] leading-snug text-ink-soft">
                The same kitchen, a year later. Same rule.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
