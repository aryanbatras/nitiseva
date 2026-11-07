import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  title,
  intro,
  children,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`shell pt-12 pb-14 md:pt-20 md:pb-20 ${className}`}>
      <div className="grid-12 gap-y-8">
        <h1 className="col-span-12 text-[clamp(3rem,6.6vw,7.5rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance lg:col-span-9">
          {title}
        </h1>
        {intro ? (
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="lead text-ink-soft">{intro}</div>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  link,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  link?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={`grid-12 gap-y-6 ${className}`}>
      <h2 className="h2 col-span-12 md:col-span-7">{title}</h2>
      <div className="col-span-12 flex flex-col gap-5 md:col-span-4 md:col-start-9 md:justify-end">
        {intro ? (
          <div className="body-copy max-w-[42ch]">{intro}</div>
        ) : null}
        {link ? (
          <Link href={link.href} className="link-line w-fit text-[1rem]">
            {link.label} <span aria-hidden="true">↗</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-line w-fit ${className}`}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}
