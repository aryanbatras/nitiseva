import Link from "next/link";
import { LogoMark } from "@/components/brand/logo";

const columns = [
  {
    title: "Programs",
    links: [
      { label: "Annapurna", href: "/programs/annapurna" },
      { label: "Vidya", href: "/programs/vidya" },
      { label: "Aashray", href: "/programs/aashray" },
      { label: "Sahayata", href: "/programs/sahayata" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "About us", href: "/about" },
      { label: "Get involved", href: "/get-involved" },
      { label: "Contact", href: "/contact" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    title: "Accountability",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Refund policy", href: "/legal/refund" },
      { label: "Annual reports", href: "/about#accountability" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-indigo-deep text-paper">
      <div className="shell flex min-h-[42rem] flex-col justify-between gap-20 pt-16 pb-8 md:min-h-[62svh] md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-5 md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-paper"
              aria-label="NitiSeva home"
            >
              <LogoMark className="h-9 w-9" />
              <span className="text-[1.55rem] leading-none font-semibold tracking-[-0.04em]">
                NitiSeva
              </span>
            </Link>
            <p className="max-w-[27ch] text-[1.02rem] leading-relaxed text-paper/65">
              A quiet, daily practice of care. Community kitchens, learning
              centres, shelter and relief across northern India.
            </p>
            <div className="mt-3 flex flex-col gap-1.5 text-[0.95rem] text-paper/80">
              <p>14 Ashok Marg, Lucknow 226001</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3 md:gap-8">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="text-[0.95rem] font-medium text-paper">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.95rem] text-paper/65 transition-colors hover:text-marigold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2 text-[0.95rem] text-paper/65">
              <a
                href="mailto:hello@nitiseva.org"
                className="w-fit text-[1.1rem] text-paper transition-colors hover:text-marigold"
              >
                hello@nitiseva.org
              </a>
              <a
                href="tel:+915224000000"
                className="w-fit transition-colors hover:text-marigold"
              >
                +91 522 400 0000
              </a>
            </div>
            <p className="max-w-[38ch] text-[0.9rem] leading-relaxed text-paper/45">
              NitiSeva Foundation is a registered public charitable trust.
              Donations are eligible for 80G exemption. Registration details
              available on request.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="select-none text-[19.2vw] leading-[0.74] font-semibold tracking-[-0.065em] text-paper md:text-[18.2vw]"
          >
            NitiSeva<span className="text-marigold">.</span>
          </div>

          <div className="flex flex-col gap-3 pt-2 text-[0.82rem] text-paper/45 md:flex-row md:items-center md:justify-between">
            <p>© 2026 NitiSeva Foundation. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/legal/privacy" className="hover:text-paper">
                Privacy
              </Link>
              <Link href="/legal/terms" className="hover:text-paper">
                Terms
              </Link>
              <Link href="/legal/refund" className="hover:text-paper">
                Refunds
              </Link>
              <a href="mailto:hello@nitiseva.org" className="hover:text-paper">
                hello@nitiseva.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
