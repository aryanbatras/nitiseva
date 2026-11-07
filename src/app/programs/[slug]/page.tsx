import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurFade } from "@/components/ui/blur-fade";
import { PageCta } from "@/components/site/page-cta";
import { PageHero } from "@/components/site/section";
import { programmes } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    return { title: "Program not found" };
  }

  return {
    title: programme.name,
    description: programme.tagline,
    openGraph: {
      title: `${programme.name} — NitiSeva`,
      description: programme.tagline,
      images: [{ url: programme.image, width: 1536, height: 1024, alt: programme.imageAlt }],
    },
  };
}

export default async function ProgrammePage({ params }: Props) {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    notFound();
  }

  const others = programmes.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={programme.name}
        intro={
          <>
            <p className="hindi mb-4 text-[1.3rem] text-marigold">
              {programme.hindi}
            </p>
            <p>{programme.tagline}</p>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
              {programme.summary}
            </p>
          </>
        }
      />

      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-ink/15 py-4 text-[0.85rem] text-ink-soft">
          <Link href="/programs" className="hover:text-ink">
            Programs
          </Link>
          <p>
            {programme.verb} · Four programmes, one routine.
          </p>
        </div>
      </div>

      <div className="relative mt-6 h-[46svh] w-full md:h-[68svh]">
        <Image
          src={programme.image}
          alt={programme.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%]"
        />
      </div>
      <div className="shell mt-3 flex flex-wrap justify-between gap-2 text-[0.82rem] text-ink-soft">
        <p>{programme.name} field photograph.</p>
        <p>Northern India, 2025–26.</p>
      </div>

      <section className="shell py-16 md:py-24">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          {programme.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <dd className="text-[clamp(1.9rem,3vw,2.7rem)] leading-none tracking-[-0.03em] tabular-nums">
                {fact.value}
              </dd>
              <dt className="max-w-[24ch] text-[0.9rem] leading-relaxed text-ink-soft">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="grid-12 gap-y-10">
          <h2 className="h2 col-span-12 md:col-span-5">How it works.</h2>
          <div className="col-span-12 flex flex-col gap-6 md:col-span-6 md:col-start-7">
            {programme.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraph.slice(0, 30)}
                className={
                  paragraphIndex === 0
                    ? "lead text-ink"
                    : "body-copy"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neem py-20 text-paper md:py-28">
        <div className="shell grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <h2 className="h2 max-w-[11ch] text-paper">What your money does.</h2>
            <p className="mt-6 max-w-[38ch] text-[1.02rem] leading-relaxed text-paper/70">
              Unit costs are reviewed every quarter against actual bills. A
              gift to {programme.name} is spent on {programme.name.toLowerCase()}.
            </p>
            <Link
              href={`/donate?program=${programme.slug}`}
              className="btn btn-accent mt-8"
            >
              Give to {programme.name} <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ol className="flex flex-col">
              {programme.actions.map((action) => (
                <li
                  key={action}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-t border-paper/20 py-6 first:border-t-0 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-2 w-2 rotate-45 bg-marigold"
                  />
                  <span className="text-[1.05rem] leading-relaxed text-paper/85">
                    {action}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <div className="shell grid-12 gap-y-10">
          <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-2">
            <div className="photo-frame aspect-[4/5]">
              <Image
                src={programme.image}
                alt={programme.imageAlt}
                fill
                sizes="(max-width: 768px) 84vw, 30vw"
                className="object-cover object-[40%_40%]"
              />
            </div>
          </div>
          <blockquote className="col-span-12 flex flex-col justify-center md:col-span-5 md:col-start-7">
            <p className="text-[clamp(1.7rem,2.6vw,2.6rem)] leading-[1.16] tracking-[-0.035em]">
              “{programme.quote.text}”
            </p>
            <footer className="mt-8">
              <p className="text-[1rem] font-medium">{programme.quote.name}</p>
              <p className="mt-1 text-[0.9rem] text-ink-soft">
                {programme.quote.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <h2 className="h2 max-w-[10ch]">The other three.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {others.map((other, otherIndex) => (
            <BlurFade key={other.slug} inView direction="up" delay={otherIndex * 0.08}>
              <Link
                href={`/programs/${other.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="photo-frame aspect-[4/3]">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="hindi text-[1rem] text-marigold">
                    {other.hindi}
                  </p>
                  <p className="mt-1 text-[1.5rem] leading-tight tracking-[-0.03em] transition-colors group-hover:text-marigold">
                    {other.name}
                  </p>
                  <p className="mt-2 max-w-[32ch] text-[0.95rem] leading-relaxed text-ink-soft">
                    {other.tagline}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <PageCta
        title={`Somebody is waiting for ${programme.name.toLowerCase()}.`}
        body="Give once, or write to us about a monthly standing instruction. Every gift is receipted, and 80G certificates are issued within seven working days."
        primary={{ label: `Donate to ${programme.name}`, href: `/donate?program=${programme.slug}` }}
        secondary={{ label: "All programs", href: "/programs" }}
      />
    </>
  );
}
