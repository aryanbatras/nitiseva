"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";

const nav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

const menuPrograms = [
  { label: "Annapurna", hindi: "अन्नपूर्णा", href: "/programs/annapurna" },
  { label: "Vidya", hindi: "विद्या", href: "/programs/vidya" },
  { label: "Aashray", hindi: "आश्रय", href: "/programs/aashray" },
  { label: "Sahayata", hindi: "सहायता", href: "/programs/sahayata" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="shell flex h-[4.25rem] items-center justify-between gap-6 md:h-[5rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 text-ink transition-colors hover:text-indigo"
          aria-label="NitiSeva home"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.98rem] transition-colors hover:text-marigold ${
                  active ? "text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/donate" className="btn btn-accent hidden sm:inline-flex">
            Donate
            <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-ink text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`block h-[1.5px] w-5 bg-current transition-transform ${
                open ? "translate-y-[3.75px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-transform ${
                open ? "-translate-y-[3.75px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className={`fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-indigo-deep text-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="shell flex min-h-full flex-col justify-between gap-16 py-10">
          <div className="flex flex-col gap-10">
            <nav aria-label="Mobile primary" className="flex flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[2.1rem] leading-none tracking-[-0.04em] text-paper transition-colors hover:text-marigold"
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-paper/20 pt-8">
              <p className="text-sm text-paper/60">Our programs</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {menuPrograms.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-2 text-paper/80 transition-colors hover:text-marigold"
                    tabIndex={open ? 0 : -1}
                  >
                    <span className="hindi text-[1.05rem] text-marigold-pale">
                      {program.hindi}
                    </span>
                    <span className="text-[0.95rem]">{program.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="btn btn-accent w-full"
              tabIndex={open ? 0 : -1}
            >
              Donate to NitiSeva <span aria-hidden="true">↗</span>
            </Link>
            <div className="text-sm leading-relaxed text-paper/60">
              <p>NitiSeva Foundation</p>
              <p>14 Ashok Marg, Lucknow 226001, Uttar Pradesh</p>
              <a
                href="mailto:hello@nitiseva.org"
                className="mt-2 inline-block text-paper/85 underline underline-offset-4 hover:text-marigold"
                tabIndex={open ? 0 : -1}
              >
                hello@nitiseva.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
