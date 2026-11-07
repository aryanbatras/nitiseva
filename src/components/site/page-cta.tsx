import Link from "next/link";

export function PageCta({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-marigold text-ink">
      <div className="shell flex flex-col justify-between gap-10 py-14 md:flex-row md:items-end md:py-20">
        <div className="max-w-[38rem]">
          <h2 className="text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.05] tracking-[-0.04em]">
            {title}
          </h2>
          <p className="mt-4 max-w-[46ch] text-[1rem] leading-relaxed text-ink/70">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href={primary.href} className="btn">
            {primary.label} <span aria-hidden="true">↗</span>
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="link-line text-[0.95rem] text-ink"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
