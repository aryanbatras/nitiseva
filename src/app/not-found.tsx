import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[68svh] flex-col justify-center py-20 md:py-28">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <p className="hindi text-[1.3rem] text-marigold">रास्ता भटक गया</p>
          <p
            aria-hidden="true"
            className="mt-2 text-[clamp(6rem,17vw,15rem)] leading-[0.8] font-semibold tracking-[-0.07em] text-ink"
          >
            404
          </p>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.02] tracking-[-0.04em]">
            This page is not at this address.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
            The link may be old, or the page may have moved. The work has not.
            Start again below, or write to us and we will point you to the right
            place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/" className="btn">
              Back to home <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/programs" className="link-line text-[0.98rem]">
              See the programmes
            </Link>
          </div>
        </div>

        <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
          <div className="border-t border-ink/20 pt-6">
            <p className="text-[0.9rem] text-ink-soft">Looking for one of these?</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/donate" className="link-line text-[1.05rem]">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/about" className="link-line text-[1.05rem]">
                  About NitiSeva
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="link-line text-[1.05rem]">
                  Volunteer or partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-line text-[1.05rem]">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-[0.85rem] leading-relaxed text-ink-soft">
              Still stuck? Write to{" "}
              <a
                href="mailto:hello@nitiseva.org"
                className="text-ink underline underline-offset-2"
              >
                hello@nitiseva.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
