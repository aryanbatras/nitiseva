import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/section";
import { PageCta } from "@/components/site/page-cta";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Volunteer in a NitiSeva kitchen, become a reading buddy, help with relief logistics or bring your professional skills. Corporate CSR partnerships welcome.",
};

const roles = [
  {
    title: "Kitchen shift",
    where: "Lucknow, Varanasi, Patna",
    ask: "One three-hour morning a month. Chopping, serving, washing up.",
    body: "The kitchen is the easiest place to start and the hardest place to leave. You will work beside the regular team, not in front of a camera. Saturday shifts run 6:30–9:30 am.",
  },
  {
    title: "Reading buddy",
    where: "Lucknow, Patna, Bhopal",
    ask: "Two hours, twice a month, for at least six months.",
    body: "Sit with one child or a small group and read. No teaching degree required; patience and consistency are. We ask for a six-month commitment because children notice when adults disappear.",
  },
  {
    title: "Relief logistics",
    where: "On call, across programme districts",
    ask: "Flexible. Peak need during floods and cold waves.",
    body: "Packing kits, loading trucks, driving, managing distribution lists. You need to be able to lift 15 kg and follow a local coordinator's instructions without improvising.",
  },
  {
    title: "Professional skills",
    where: "Remote or Lucknow",
    ask: "A defined project, usually 10–20 hours total.",
    body: "Legal aid, medical camps, accounting, translation, design, data. We will write a short scope with you before you start, so the work is useful and finite.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title={
          <>
            The work needs hands,
            <br className="hidden sm:block" /> not applause.
          </>
        }
        intro={
          <p>
            Volunteers are part of the routine here, not a special event. We ask
            for a real commitment, give you a real job, and never use your
            photograph with a child to raise money.
          </p>
        }
      />

      <div className="relative h-[42svh] w-full md:h-[58svh]">
        <Image
          src="/images/warmth.jpg"
          alt="Volunteers distributing blankets at a winter relief camp"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_35%]"
        />
      </div>
      <div className="shell mt-3 flex flex-wrap justify-between gap-2 text-[0.82rem] text-ink-soft">
        <p>Winter distribution, Bahraich.</p>
        <p>Volunteers from the Lucknow and Bahraich teams.</p>
      </div>

      <section className="shell py-24 md:py-36">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="h2 max-w-[8ch]">Four ways in.</h2>
            <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
              We do not run one-day volunteering. Every role has a defined ask
              and a named coordinator. If none of these fit, write to us anyway.
            </p>
          </div>

          <div className="col-span-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {roles.map((role) => (
              <div key={role.title} className="flex flex-col gap-3">
                <h3 className="text-[1.5rem] leading-tight tracking-[-0.03em]">
                  {role.title}
                </h3>
                <p className="text-[0.8rem] text-marigold">{role.where}</p>
                <p className="text-[0.9rem] font-medium">{role.ask}</p>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {role.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-24 md:py-32">
        <div className="shell grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <h2 className="h2 max-w-[11ch]">What volunteers do not do.</h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ul className="flex flex-col gap-5 text-[1rem] leading-relaxed text-ink-soft">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                Take photographs of people receiving food, blankets or shelter.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                Visit a shelter alone, or ask residents why they are there.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                Raise money on our behalf without a written agreement.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                Promise a child a scholarship, a trip or a gift we have not
                agreed to.
              </li>
            </ul>
            <p className="mt-8 max-w-[46ch] text-[0.9rem] leading-relaxed text-ink-soft">
              These rules exist for the people we serve, not to make
              volunteering difficult. Most volunteers tell us the boundaries
              make the work easier to do well.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <h2 className="h2 max-w-[10ch]">For companies.</h2>
            <p className="mt-6 max-w-[34ch] text-[1rem] leading-relaxed text-ink-soft">
              We have a CSR-1 registration and a short list of programmes that
              can absorb a corporate team without turning the kitchen into a
              photo opportunity.
            </p>
            <Link
              href={`mailto:${site.partnershipsEmail}?subject=CSR%20partnership`}
              className="link-line mt-6 text-[0.98rem]"
            >
              {site.partnershipsEmail}
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <dl className="flex flex-col">
              <div className="border-b border-ink/15 py-5">
                <dt className="text-[1.1rem]">Programme adoption</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  Fund one kitchen or one learning centre for a year. We report
                  against a written budget and a quarterly site visit.
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-[1.1rem]">Employee giving</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  Payroll giving with 80G receipts for each employee. We handle
                  the paperwork; your team handles the generosity.
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="text-[1.1rem]">Skilled volunteering</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  A defined project with your professional team — legal review,
                  financial controls, translation, design, data.
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[1.1rem]">In-kind support</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  Grain, blankets, books, medical supplies or transport. We
                  confirm the need before you buy anything.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <PageCta
        title="Start with one Saturday."
        body="Tell us which role fits and how much time you can give. A coordinator will reply within two working days with the next available shift."
        primary={{
          label: "Write to volunteer@",
          href: `mailto:${site.volunteerEmail}?subject=Volunteering%20with%20NitiSeva`,
        }}
        secondary={{ label: "Read about our programs", href: "/programs" }}
      />
    </>
  );
}
