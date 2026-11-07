import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/site/section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to NitiSeva about donations, 80G receipts, volunteering, CSR partnerships or visiting a community kitchen in Lucknow.",
};

const desks = [
  {
    title: "General",
    body: "Visits, press, complaints and anything without a better home.",
    email: "hello@nitiseva.org",
  },
  {
    title: "Giving",
    body: "Donations, 80G receipts, monthly giving and bank transfers.",
    email: "give@nitiseva.org",
  },
  {
    title: "Partnerships",
    body: "CSR programmes, institutional grants and in-kind support.",
    email: "partnerships@nitiseva.org",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Write to us.
            <br className="hidden sm:block" /> A person will reply.
          </>
        }
        intro={
          <p>
            No ticket numbers or autoresponders. The three desks below reach
            real people, and we answer within two working days. If your question
            is about a payment, include the order ID.
          </p>
        }
      />

      <section className="shell pb-24 md:pb-32">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 flex flex-col gap-10 md:col-span-5">
            <div className="flex flex-col gap-8">
              {desks.map((desk) => (
                <div key={desk.title}>
                  <h2 className="text-[1.15rem] leading-tight tracking-[-0.02em]">
                    {desk.title}
                  </h2>
                  <p className="mt-2 max-w-[34ch] text-[0.92rem] leading-relaxed text-ink-soft">
                    {desk.body}
                  </p>
                  <a
                    href={`mailto:${desk.email}`}
                    className="link-line mt-2 text-[0.98rem]"
                  >
                    {desk.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/15 pt-8">
              <h2 className="text-[1.15rem] leading-tight tracking-[-0.02em]">
                Office
              </h2>
              <address className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft not-italic">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a href={`tel:${site.phoneHref}`} className="link-line mt-3 text-[0.98rem]">
                {site.phone}
              </a>
              <p className="mt-4 text-[0.85rem] text-ink-soft">{site.hours}</p>
              <a
                href="https://maps.google.com/?q=14+Ashok+Marg+Lucknow+226001"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line mt-4 text-[0.9rem]"
              >
                Open in Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="bg-paper-deep p-6">
              <h2 className="text-[1.15rem] leading-tight tracking-[-0.02em]">
                Visiting the kitchen
              </h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                The Lucknow kitchen hosts visitors on Saturday mornings, 8–10
                am. Write to{" "}
                <a href="mailto:hello@nitiseva.org" className="underline underline-offset-2">
                  hello@nitiseva.org
                </a>{" "}
                with the date you have in mind. Shelters are private homes, so
                visits are arranged with residents&apos; consent and are limited
                to two people at a time.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ContactForm />

            <div className="mt-8 text-[0.85rem] leading-relaxed text-ink-soft">
              <p>
                For payment problems, do not send card details by email. Send
                only the order ID and the amount. We will reconcile it with
                Cashfree.
              </p>
              <p className="mt-3">
                Media requests: write to{" "}
                <a href="mailto:hello@nitiseva.org" className="underline underline-offset-2">
                  hello@nitiseva.org
                </a>{" "}
                with &ldquo;Press&rdquo; in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo py-16 text-paper md:py-20">
        <div className="shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] leading-tight tracking-[-0.035em]">
              Prefer to give instead of write?
            </h2>
            <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-relaxed text-paper/65">
              The donation page takes about a minute. UPI, cards and net banking
              are all supported.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/donate" className="btn btn-accent">
              Donate <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/get-involved" className="link-line self-center text-[0.95rem] text-paper">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
