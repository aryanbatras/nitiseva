"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const photos = [
  {
    src: "/images/food.jpg",
    alt: "A cook serving a hot plate at the Lucknow community kitchen",
    position: "object-[38%_45%]",
    className: "left-[3%] top-[5%] w-[16%]",
    drift: 18,
  },
  {
    src: "/images/school.jpg",
    alt: "Children holding new notebooks and stationery kits at school",
    position: "object-[45%_40%]",
    className: "right-[5%] top-[1%] w-[13%]",
    drift: 30,
  },
  {
    src: "/images/warmth.jpg",
    alt: "A volunteer handing a blanket to an elderly man at a relief distribution",
    position: "object-[35%_40%]",
    className: "left-[13%] bottom-[2%] w-[14%]",
    drift: 26,
  },
  {
    src: "/images/care.jpg",
    alt: "A reading circle at a learning centre in Patna",
    position: "object-[55%_45%]",
    className: "right-[12%] bottom-[4%] w-[15%]",
    drift: 14,
  },
  {
    src: "/images/hero.jpg",
    alt: "A teacher and four children reading together",
    position: "object-[55%_45%]",
    className: "left-[46%] top-[0%] w-[11%]",
    drift: 34,
  },
];

function DriftPhoto({
  src,
  alt,
  position,
  className,
  drift,
}: {
  src: string;
  alt: string;
  position: string;
  className: string;
  drift: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduceMotion ? 0 : y }}
      className={`absolute ${className}`}
    >
      <div className="photo-frame aspect-[9/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 45vw, 16vw"
          className={`object-cover ${position}`}
        />
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  return (
    <section className="shell py-24 md:py-36">
      <div className="relative mx-auto hidden h-[46rem] max-w-[76rem] md:block">
        {photos.map((photo) => (
          <DriftPhoto key={photo.src} {...photo} />
        ))}

        <div className="absolute top-1/2 left-1/2 flex w-[30rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 text-center">
          <h2 className="text-[clamp(2.2rem,3vw,2.9rem)] leading-[1.02] tracking-[-0.04em]">
            A year, in fragments.
          </h2>
          <p className="max-w-[38ch] text-[1.02rem] leading-relaxed text-ink-soft">
            Ordinary mornings from the kitchens, classrooms and distribution
            lines where the work actually happens.
          </p>
          <Link href="/programs" className="link-line text-[0.95rem]">
            See where we work
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 md:hidden">
        <div className="flex max-w-[24rem] flex-col items-center gap-4 text-center">
          <h2 className="text-[2.1rem] leading-[1.02] tracking-[-0.04em]">
            A year, in fragments.
          </h2>
          <p className="text-[1rem] leading-relaxed text-ink-soft">
            Ordinary mornings from the kitchens, classrooms and distribution
            lines where the work actually happens.
          </p>
          <Link href="/programs" className="link-line text-[0.95rem]">
            See where we work
          </Link>
        </div>

        <div className="flex w-full flex-col gap-7">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`photo-frame aspect-[9/10] ${
                index % 3 === 0
                  ? "w-[78%] self-start"
                  : index % 3 === 1
                    ? "w-[58%] self-end"
                    : "w-[68%] self-start ml-[8%]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="78vw"
                className={`object-cover ${photo.position}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
