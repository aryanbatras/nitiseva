import Link from "next/link";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="shell pt-8 pb-24 md:pt-14 md:pb-36">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-4">
          <h2 className="h2 max-w-[8ch]">Questions, answered.</h2>
          <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
            The things people ask before they give, join or visit. If yours is
            not here, write to us.
          </p>
          <Link href="/contact" className="link-line mt-5 text-[0.95rem]">
            Ask something else
          </Link>
        </div>

        <div className="col-span-12 flex flex-col gap-2 md:col-span-7 md:col-start-6">
          {faqs.slice(0, 6).map((faq) => (
            <details
              key={faq.q}
              className="group px-0 py-1 transition-colors open:-mx-5 open:bg-paper-deep open:px-5 open:py-5 md:open:-mx-6 md:open:px-6"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[1.18rem] leading-snug tracking-[-0.02em] text-ink md:text-[1.3rem]">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 h-4 w-4 shrink-0"
                >
                  <span className="absolute top-1/2 left-0 h-[2px] w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-[48ch] pb-2 text-[1rem] leading-relaxed text-ink-soft md:text-[1.05rem]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
