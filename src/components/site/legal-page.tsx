import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  hindi,
  updated,
  intro,
  sections,
}: {
  title: string;
  hindi: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="shell pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="grid-12 gap-y-8 border-b border-ink/15 pb-10 md:pb-14">
          <div className="col-span-12 lg:col-span-8">
            <p className="hindi text-[1.2rem] text-marigold">{hindi}</p>
            <h1 className="mt-4 text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance">
              {title}
            </h1>
          </div>
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-4 lg:justify-end">
            <p className="text-[0.85rem] text-ink-soft">Last updated {updated}</p>
            <p className="text-[1.1rem] leading-relaxed tracking-[-0.015em] text-ink-soft">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <div className="grid-12 gap-y-12">
          <nav aria-label="On this page" className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.78rem] tracking-[0.16em] text-ink-soft uppercase">
                On this page
              </p>
              <ol className="mt-4 flex flex-col gap-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-[0.92rem] leading-snug text-ink-soft transition-colors hover:text-ink"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-9 bg-paper-deep p-5">
                <p className="text-[0.92rem] leading-relaxed text-ink-soft">
                  A question about this page? Write to{" "}
                  <a
                    href="mailto:hello@nitiseva.org"
                    className="text-ink underline underline-offset-2"
                  >
                    hello@nitiseva.org
                  </a>
                  . A person replies within two working days.
                </p>
              </div>
            </div>
          </nav>

          <div className="col-span-12 flex flex-col gap-12 lg:col-span-8 lg:col-start-5">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.08] tracking-[-0.03em]">
                  {section.title}
                </h2>
                <div className="mt-5 flex flex-col gap-4 text-[1rem] leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:pl-5">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
