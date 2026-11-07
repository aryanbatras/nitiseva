import Image from "next/image";
import Link from "next/link";

const strip = [
  {
    src: "/images/food.jpg",
    alt: "A hot meal being served at the Lucknow kitchen",
    position: "object-[40%_45%]",
  },
  {
    src: "/images/school.jpg",
    alt: "Children holding school kits in a classroom",
    position: "object-[50%_40%]",
  },
  {
    src: "/images/care.jpg",
    alt: "A reading circle at a NitiSeva learning centre",
    position: "object-[55%_45%]",
  },
];

export function ClosingCta() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {strip.map((photo, index) => (
          <div
            key={photo.src}
            className={`relative aspect-square md:aspect-auto md:h-[40svh] ${
              index === 0 ? "col-span-2 aspect-[4/3] md:col-span-1" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 33vw"
                  : "(max-width: 768px) 50vw, 33vw"
              }
              className={`object-cover ${photo.position}`}
            />
          </div>
        ))}
      </div>

      <div className="bg-marigold text-ink">
        <div className="shell grid-12 items-end gap-y-10 py-14 md:min-h-[44svh] md:py-16">
          <div className="col-span-12 md:col-span-8">
            <p className="max-w-[19ch] text-[clamp(1.9rem,3.6vw,3.6rem)] leading-[1.08] tracking-[-0.04em] text-balance">
              Somebody is already waiting for today&apos;s meal.{" "}
              <Link
                href="/donate"
                className="underline decoration-[4px] underline-offset-[6px] transition-colors hover:text-paper"
              >
                Fund today&apos;s kitchen.
              </Link>
            </p>
            <p className="mt-8 max-w-[46ch] text-[1rem] leading-relaxed text-ink/75">
              ₹2,500 feeds 100 people. Every gift is receipted, and 80G
              certificates are issued within seven working days.
            </p>
          </div>

          <div className="col-span-6 col-start-7 md:col-span-2 md:col-start-11">
            <div className="photo-frame aspect-[4/5] w-[9rem] md:w-full">
              <Image
                src="/images/warmth.jpg"
                alt="A volunteer at a winter relief distribution in Bahraich"
                fill
                sizes="150px"
                className="object-cover object-[18%_28%]"
              />
            </div>
            <p className="mt-2 text-[0.78rem] leading-snug text-ink/65">
              Bahraich, winter 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
