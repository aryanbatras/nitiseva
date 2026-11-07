import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { programmes } from "@/lib/content";

export function ProgrammeScatter() {
  return (
    <div className="flex flex-col">
      {programmes.map((programme, index) => {
        if (index === 0) {
          return (
            <article key={programme.slug} className="grid-12 gap-y-7">
              <div className="col-span-12 md:col-span-5">
                <p className="hindi text-[1.15rem] text-marigold">
                  {programme.hindi}
                </p>
                <h3 className="h3 mt-2">
                  <Link
                    href={`/programs/${programme.slug}`}
                    className="transition-colors hover:text-marigold"
                  >
                    {programme.name}
                  </Link>
                </h3>
              </div>
              <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:col-start-8 md:row-start-1 md:self-end">
                <p className="body-copy max-w-[44ch]">{programme.summary}</p>
                <Link
                  href={`/programs/${programme.slug}`}
                  className="link-line w-fit text-[0.95rem]"
                >
                  Read more <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <BlurFade
                inView
                direction="up"
                className="col-span-12 md:col-span-7 md:row-start-2"
              >
                <Link
                  href={`/programs/${programme.slug}`}
                  className="photo-frame block aspect-[3/2]"
                  aria-label={`Read about ${programme.name}`}
                >
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover"
                  />
                </Link>
              </BlurFade>
            </article>
          );
        }

        if (index === 1) {
          return (
            <article
              key={programme.slug}
              className="grid-12 mt-24 items-center gap-y-8 md:mt-40"
            >
              <div className="col-span-12 flex flex-col gap-5 md:col-span-4 md:col-start-2 md:pt-16">
                <div>
                  <p className="hindi text-[1.15rem] text-marigold">
                    {programme.hindi}
                  </p>
                  <h3 className="h3 mt-2">
                    <Link
                      href={`/programs/${programme.slug}`}
                      className="transition-colors hover:text-marigold"
                    >
                      {programme.name}
                    </Link>
                  </h3>
                </div>
                <p className="body-copy max-w-[38ch]">{programme.summary}</p>
                <Link
                  href={`/programs/${programme.slug}`}
                  className="link-line w-fit text-[0.95rem]"
                >
                  Read more <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <BlurFade
                inView
                direction="up"
                delay={0.1}
                className="col-span-9 col-start-4 md:col-span-5 md:col-start-8"
              >
                <Link
                  href={`/programs/${programme.slug}`}
                  className="photo-frame block aspect-[4/5]"
                  aria-label={`Read about ${programme.name}`}
                >
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 75vw, 42vw"
                    className="object-cover"
                  />
                </Link>
              </BlurFade>
            </article>
          );
        }

        if (index === 2) {
          return (
            <article
              key={programme.slug}
              className="grid-12 mt-24 items-end gap-y-8 md:mt-40"
            >
              <BlurFade
                inView
                direction="up"
                className="col-span-12 md:col-span-8 md:col-start-2 md:row-start-1"
              >
                <Link
                  href={`/programs/${programme.slug}`}
                  className="photo-frame block aspect-[16/9]"
                  aria-label={`Read about ${programme.name}`}
                >
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 62vw"
                    className="object-cover"
                  />
                </Link>
              </BlurFade>
              <div className="col-span-12 flex flex-col gap-4 md:col-span-3 md:col-start-10 md:row-start-1 md:pb-2">
                <div>
                  <p className="hindi text-[1.05rem] text-marigold">
                    {programme.hindi}
                  </p>
                  <h3 className="mt-1 text-[1.6rem] leading-tight tracking-[-0.03em]">
                    <Link
                      href={`/programs/${programme.slug}`}
                      className="transition-colors hover:text-marigold"
                    >
                      {programme.name}
                    </Link>
                  </h3>
                </div>
                <p className="body-copy !text-[0.98rem]">
                  {programme.summary}
                </p>
                <Link
                  href={`/programs/${programme.slug}`}
                  className="link-line w-fit text-[0.95rem]"
                >
                  Read more <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          );
        }

        return (
          <article
            key={programme.slug}
            className="grid-12 mt-24 items-end gap-y-8 md:mt-40"
          >
            <div className="col-span-12 flex flex-col gap-5 md:col-span-5 md:col-start-2 md:pb-16">
              <div>
                <p className="hindi text-[1.15rem] text-marigold">
                  {programme.hindi}
                </p>
                <h3 className="h3 mt-2">
                  <Link
                    href={`/programs/${programme.slug}`}
                    className="transition-colors hover:text-marigold"
                  >
                    {programme.name}
                  </Link>
                </h3>
              </div>
              <p className="body-copy max-w-[40ch]">{programme.summary}</p>
              <Link
                href={`/programs/${programme.slug}`}
                className="link-line w-fit text-[0.95rem]"
              >
                Read more <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <BlurFade
              inView
              direction="up"
              delay={0.1}
              className="col-span-9 col-start-4 md:col-span-4 md:col-start-9"
            >
              <Link
                href={`/programs/${programme.slug}`}
                className="photo-frame block aspect-[4/5]"
                aria-label={`Read about ${programme.name}`}
              >
                <Image
                  src={programme.image}
                  alt={programme.imageAlt}
                  fill
                  sizes="(max-width: 768px) 75vw, 36vw"
                  className="object-cover"
                />
              </Link>
            </BlurFade>
          </article>
        );
      })}
    </div>
  );
}
