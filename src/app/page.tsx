import { ClosingCta } from "@/components/home/closing-cta";
import { FaqSection } from "@/components/home/faq";
import { GallerySection } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";
import { ImpactCalculator } from "@/components/home/impact-calculator";
import { ProgrammeScatter } from "@/components/home/programme-scatter";
import { ProgrammeTicker } from "@/components/home/ticker";
import { PromiseSection } from "@/components/home/promise";
import { StatsSection } from "@/components/home/stats";
import { StorySection } from "@/components/home/story";
import { SectionHeading } from "@/components/site/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgrammeTicker />
      <PromiseSection />

      <section className="shell pt-20 md:pt-32">
        <SectionHeading
          title={
            <>
              Four ways
              <br className="hidden sm:block" /> we show up.
            </>
          }
          intro={
            <p>
              Food, learning, shelter and relief. Each programme is run by a
              local team, measured honestly, and kept small enough to know
              people by name.
            </p>
          }
          link={{ href: "/programs", label: "All programs" }}
        />
        <div className="mt-16 pb-6 md:mt-24 md:pb-12">
          <ProgrammeScatter />
        </div>
      </section>

      <div className="mt-20 md:mt-28">
        <ImpactCalculator />
      </div>

      <StatsSection />
      <StorySection />
      <GallerySection />
      <FaqSection />
      <ClosingCta />
    </>
  );
}
