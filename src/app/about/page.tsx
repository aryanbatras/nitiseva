import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { PageHero } from "@/components/site/section";
import { PageCta } from "@/components/site/page-cta";
import { principles, reach, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "NitiSeva is a public charitable trust running kitchens, learning centres, shelters and relief work across northern India since 2014.",
};

const finance = [
  { label: "Programmes", value: 82, colour: "bg-neem" },
  { label: "People", value: 11, colour: "bg-marigold" },
  { label: "Operations and audit", value: 7, colour: "bg-indigo" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            We are not a campaign.
            <br className="hidden sm:block" /> We are a routine.
          </>
        }
        intro={
          <p>
            NitiSeva is a public charitable trust working in northern India
            since 2014. We run eleven community kitchens, thirty-four learning
            centres, nine shelters and a relief network that moves before the
            roads close.
          </p>
        }
      />

      <div className="relative h-[46svh] w-full md:h-[64svh]">
        <Image
          src="/images/food.jpg"
          alt="A meal being served at the Lucknow community kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_42%]"
        />
      </div>
      <div className="shell mt-3 flex flex-wrap justify-between gap-2 text-[0.82rem] text-ink-soft">
        <p>Annapurna kitchen, Lucknow.</p>
        <p>Breakfast service, 7:10 am.</p>
      </div>

      <section className="shell py-24 md:py-36">
        <div className="grid-12 gap-y-10">
          <h2 className="h2 col-span-12 md:col-span-5">
            It began with a kitchen that would not close.
          </h2>
          <div className="col-span-12 flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <p className="lead text-ink">
              On a January night in 2014, a cold wave settled over Lucknow. Four
              teachers, a cook and a social worker had forty plates of food left
              over from a community event.
            </p>
            <p className="body-copy">
              They served them under a tin roof on Ashok Marg. More people came.
              The cook went home for more rice. By two in the morning, the pots
              were empty and nobody wanted to leave. The next morning, they
              opened again.
            </p>
            <p className="body-copy">
              That kitchen is still running. It became Annapurna. A borrowed room
              in Patna became the first Vidya centre in 2016. The first Aashray
              shelter opened in 2018. Sahayata began with the 2019 floods, when
              we realised that a kitchen is only as useful as its ability to
              move.
            </p>
            <p className="body-copy">
              We registered as a public charitable trust later in 2014. We have
              grown slowly on purpose. Every new district has to be run by
              someone who already lives there, and every programme has to be
              able to show its books before it can open a second site.
            </p>
            <p className="mt-2 text-[0.9rem] text-ink-soft">
              — The founding trustees, Lucknow
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-24 md:py-32">
        <div className="shell grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="h2 max-w-[9ch]">How we hold the line.</h2>
            <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
              Four rules we wrote down in 2015, after the first busy winter
              taught us what we were not willing to trade.
            </p>
          </div>

          <div className="col-span-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {principles.map((principle) => (
              <div key={principle.title} className="flex flex-col gap-3">
                <h3 className="text-[1.45rem] leading-tight tracking-[-0.03em]">
                  {principle.title}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-ink-soft">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24 md:py-36">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="h2 max-w-[8ch]">The people who hold it.</h2>
            <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
              A small board, an executive director, and 216 staff and
              volunteers. Most of them are from the neighbourhoods they serve.
            </p>
          </div>

          <div className="col-span-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col gap-2">
                <p className="text-[1.3rem] leading-tight tracking-[-0.025em]">
                  {person.name}
                </p>
                <p className="text-[0.85rem] text-marigold">{person.role}</p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="accountability" className="bg-indigo py-24 text-paper md:py-32">
        <div className="shell grid-12 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <h2 className="h2 text-paper">Of every ₹100, eighty-two reach the work.</h2>
            <p className="mt-6 max-w-[38ch] text-[1.05rem] leading-relaxed text-paper/70">
              We publish audited accounts every year. Salaries, programme spend
              and balances are listed separately. Nothing is aggregated into a
              number that cannot be checked.
            </p>
            <Link
              href="mailto:hello@nitiseva.org?subject=Annual%20accounts"
              className="link-line mt-7 text-[0.95rem] text-paper"
            >
              Request the audited accounts
            </Link>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[0.9rem] text-paper/55">How a rupee is spent</p>
            <div
              className="mt-4 flex h-16 w-full overflow-hidden"
              role="img"
              aria-label="Spending split: 82 percent programmes, 11 percent people, 7 percent operations and audit"
            >
              {finance.map((item) => (
                <div
                  key={item.label}
                  className={item.colour}
                  style={{ width: `${item.value}%` }}
                />
              ))}
            </div>
            <dl className="mt-7 flex flex-col">
              {finance.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-b border-paper/20 py-3 last:border-0"
                >
                  <dt className="flex items-center gap-3 text-[0.95rem] text-paper/75">
                    <span
                      aria-hidden="true"
                      className={`inline-block h-2.5 w-2.5 ${item.colour}`}
                    />
                    {item.label}
                  </dt>
                  <dd className="text-[1.1rem] tabular-nums text-paper">
                    {item.value}%
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-[44ch] text-[0.82rem] leading-relaxed text-paper/50">
              Financial year 2025–26, audited by S. R. Mehrotra &amp; Co.,
              Lucknow. 80G and CSR-1 registrations are current.
            </p>
          </div>
        </div>
      </section>

      <section id="where" className="shell py-24 md:py-36">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="h2 max-w-[9ch]">One day&apos;s drive from a kitchen.</h2>
            <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
              We work in six states. Every site is within a day&apos;s drive of
              a kitchen, a shelter or a programme office. That is deliberate.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {reach.map((state) => (
                <li
                  key={state}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-4"
                >
                  <span className="text-[1.3rem] tracking-[-0.02em]">{state}</span>
                  <span className="text-[0.8rem] text-ink-soft">
                    {state === "Uttar Pradesh"
                      ? "5 kitchens · 3 shelters · 16 centres"
                      : state === "Bihar"
                        ? "3 kitchens · 2 shelters · 9 centres"
                        : state === "Madhya Pradesh"
                          ? "1 kitchen · 1 shelter · 4 centres"
                          : state === "Rajasthan"
                            ? "2 kitchens · 1 shelter · 3 centres"
                            : state === "Delhi"
                              ? "1 shelter · 1 centre"
                              : "Relief network only"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[48ch] text-[0.85rem] leading-relaxed text-ink-soft">
              Sahayata also responds in Maharashtra and Assam through local
              partners. Those distributions are listed in the annual report but
              are not counted as programme sites.
            </p>
          </div>
        </div>
      </section>

      <BlurFade inView direction="up" className="shell pb-24 md:pb-32">
        <div className="photo-frame aspect-[21/9]">
          <Image
            src="/images/hero.jpg"
            alt="A teacher reading with children at a NitiSeva learning centre"
            fill
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
        <div className="mt-3 flex flex-wrap justify-between gap-2 text-[0.82rem] text-ink-soft">
          <p>Vidya centre, Patna.</p>
          <p>Saturday reading hour, 4:15 pm.</p>
        </div>
      </BlurFade>

      <PageCta
        title="Come and see for yourself."
        body="The Lucknow kitchen hosts visitors on Saturday mornings. Shelters are private homes, so those visits are arranged with residents' consent."
        primary={{ label: "Arrange a visit", href: "/contact" }}
        secondary={{ label: "Read our programs", href: "/programs" }}
      />
    </>
  );
}
