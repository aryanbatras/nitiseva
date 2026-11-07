import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { DonationForm } from "@/components/donate/donation-form";
import { PageHero } from "@/components/site/section";
import { faqs, programmeOptions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give to NitiSeva's community kitchens, learning centres, shelters or relief work. Secure payments via Cashfree, 80G receipts, and unit costs you can check.",
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type Props = {
  searchParams: Promise<{ amount?: string; program?: string }>;
};

async function DonateFormPanel({ searchParams }: Props) {
  const params = await searchParams;
  const requested = Number(params.amount);
  const initialAmount =
    Number.isFinite(requested) && requested >= 100 && requested <= 200000
      ? Math.round(requested)
      : 1000;
  const initialProgram = programmeOptions.some(
    (option) => option.value === params.program,
  )
    ? (params.program as string)
    : "general";

  return (
    <DonationForm
      initialAmount={initialAmount}
      initialProgram={initialProgram}
    />
  );
}

function DonateFormFallback() {
  return (
    <div className="flex min-h-[42rem] flex-col justify-end border border-ink/25 bg-paper-warm p-6 md:p-8">
      <p className="text-[0.95rem] text-ink-soft">Preparing the donation form…</p>
    </div>
  );
}

export default function DonatePage({ searchParams }: Props) {

  return (
    <>
      <PageHero
        title={
          <>
            Give what you can.
            <br className="hidden sm:block" /> We will do the rest.
          </>
        }
        intro={
          <p>
            A donation is not a transaction that ends when the receipt arrives.
            It is a plate, a book, a bed or a blanket — usually within the same
            week. Choose where it goes, or leave it to the team.
          </p>
        }
      />

      <section className="shell pb-24 md:pb-32">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 flex flex-col gap-12 md:col-span-5">
            <div>
              <p className="text-[0.9rem] text-ink-soft">Your ₹1,000 becomes</p>
              <dl className="mt-4 flex flex-col">
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4">
                  <dt className="text-[0.98rem] text-ink-soft">hot meals</dt>
                  <dd className="text-[2rem] leading-none tracking-[-0.03em] tabular-nums">
                    40
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4">
                  <dt className="text-[0.98rem] text-ink-soft">school kits</dt>
                  <dd className="text-[2rem] leading-none tracking-[-0.03em] tabular-nums">
                    2
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4">
                  <dt className="text-[0.98rem] text-ink-soft">winter kits</dt>
                  <dd className="text-[2rem] leading-none tracking-[-0.03em] tabular-nums">
                    1
                  </dd>
                </div>
              </dl>
              <p className="mt-4 max-w-[36ch] text-[0.85rem] leading-relaxed text-ink-soft">
                Or 2 safe nights at an Aashray shelter. Unit costs are reviewed
                every quarter against actual bills.
              </p>
            </div>

            <div className="bg-neem p-6 text-paper md:p-7">
              <p className="text-[1.5rem] leading-tight tracking-[-0.03em]">
                Of every ₹100, eighty-two reach the work.
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-paper/70">
                Eleven go to the people who run the programmes. Seven to audit,
                compliance and the unglamorous work of staying honest.
              </p>
              <Link
                href="/about#accountability"
                className="link-line mt-5 text-[0.9rem] text-paper"
              >
                See the accounts
              </Link>
            </div>

            <div>
              <h2 className="text-[1.3rem] leading-tight tracking-[-0.03em]">
                What happens next
              </h2>
              <ul className="mt-4 flex flex-col gap-4 text-[0.95rem] leading-relaxed text-ink-soft">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                  You pay through Cashfree — UPI, card, net banking or a wallet.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                  You return here with the payment status and an order ID.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                  Write to give@nitiseva.org with that order ID for your 80G
                  receipt. We reply within seven working days.
                </li>
              </ul>
            </div>

            <div className="text-[0.9rem] leading-relaxed text-ink-soft">
              <p>
                Prefer a bank transfer, a monthly standing instruction or a CSR
                contribution?
              </p>
              <a
                href="mailto:give@nitiseva.org"
                className="link-line mt-3 text-[0.95rem] text-ink"
              >
                give@nitiseva.org
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Suspense fallback={<DonateFormFallback />}>
              <DonateFormPanel searchParams={searchParams} />
            </Suspense>

            <div className="mt-6 grid grid-cols-3 gap-4 text-[0.8rem] leading-relaxed text-ink-soft">
              <p>80G registered</p>
              <p>CSR-1 registered</p>
              <p>Audited annually</p>
            </div>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-soft">
              NitiSeva Foundation does not store card or UPI details. Cashfree
              processes the payment under its own privacy policy. By donating
              you agree to our{" "}
              <Link href="/legal/terms" className="underline underline-offset-2">
                terms
              </Link>{" "}
              and{" "}
              <Link href="/legal/refund" className="underline underline-offset-2">
                refund policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <div className="shell grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <h2 className="h2 max-w-[9ch]">Before you give.</h2>
            <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
              The short answers. The longer ones are in our{" "}
              <Link href="/#faq" className="underline underline-offset-2 hover:text-ink">
                FAQ
              </Link>
              .
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="flex flex-col gap-2">
              {faqs.slice(0, 4).map((faq) => (
                <details key={faq.q} className="group bg-paper px-5 py-1">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 py-4 text-[1.1rem] leading-snug tracking-[-0.02em]">
                    <span>{faq.q}</span>
                    <span aria-hidden="true" className="relative mt-1.5 h-4 w-4 shrink-0">
                      <span className="absolute top-1/2 left-0 h-[2px] w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="max-w-[52ch] pb-2 text-[0.95rem] leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-[0.85rem] text-ink-soft">
              Still unsure? Write to{" "}
              <a href="mailto:give@nitiseva.org" className="underline underline-offset-2">
                give@nitiseva.org
              </a>{" "}
              and a person will reply. Example: {inr.format(1000)} is a typical
              first gift; there is no minimum beyond ₹100.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
