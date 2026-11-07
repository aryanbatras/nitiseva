import Image from "next/image";
import Link from "next/link";
import { FadeUp, MaskedLine } from "@/components/motion/masked-line";

export function Hero() {
  return (
    <section className="shell pt-4 pb-14 md:pt-8 md:pb-24">
      <div className="grid-12">
        <div className="col-span-12 md:col-span-8 md:col-start-1">
          <h1 className="display text-ink">
            <MaskedLine>Showing up,</MaskedLine>
            <MaskedLine delay={0.12} className="md:pl-[24%]">
              every day.
            </MaskedLine>
          </h1>
        </div>

        <div className="col-span-8 col-start-5 mt-8 md:col-span-3 md:col-start-10 md:mt-2">
          <FadeUp delay={0.45}>
            <div className="photo-frame aspect-[4/3]">
              <Image
                src="/images/warmth.jpg"
                alt="A volunteer handing a grey blanket to an elderly man at a winter relief distribution"
                fill
                priority
                sizes="(max-width: 768px) 62vw, 24vw"
                className="object-cover object-[42%_38%]"
              />
            </div>
            <p className="mt-2.5 text-[0.82rem] leading-snug text-ink-soft">
              Winter distribution, Bahraich. 6:40 am.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="grid-12 mt-10 items-end gap-y-10 md:mt-14">
        <div className="col-span-9 col-start-1 md:col-span-4 md:col-start-2">
          <FadeUp delay={0.35}>
            <div className="photo-frame aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="A teacher reading a picture book with four children at a NitiSeva learning centre"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 30vw"
                className="object-cover object-[52%_45%]"
              />
            </div>
          </FadeUp>
        </div>

        <div className="col-span-12 flex flex-col gap-7 md:col-span-5 md:col-start-7 md:pb-6">
          <FadeUp delay={0.55}>
            <p className="lead max-w-[34ch] text-ink">
              Community kitchens, learning centres, shelter and relief across
              northern India. Not a campaign. A routine.
            </p>
          </FadeUp>

          <FadeUp delay={0.65}>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/donate" className="btn btn-accent">
                Donate <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/programs" className="link-line text-[1rem]">
                See our programs
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.75}>
            <p className="max-w-[36ch] text-[0.9rem] leading-relaxed text-ink-soft">
              A registered public charitable trust. 80G receipts. Every rupee
              accounted for.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
