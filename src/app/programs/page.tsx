import type { Metadata } from "next";
import { PageCta } from "@/components/site/page-cta";
import { PageHero } from "@/components/site/section";
import { ProgrammeScatter } from "@/components/home/programme-scatter";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Annapurna community kitchens, Vidya learning centres, Aashray shelters and Sahayata relief work across northern India.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Four ways
            <br className="hidden sm:block" /> to show up.
          </>
        }
        intro={
          <p>
            Food, learning, shelter and relief. Each programme is run by a local
            team, measured honestly, and kept small enough to know people by
            name.
          </p>
        }
      />

      <section className="shell pb-24 md:pb-32">
        <div className="border-t border-ink/15 pt-16 md:pt-20">
          <ProgrammeScatter />
        </div>
      </section>

      <PageCta
        title="Fund a kitchen. Or a classroom. Or a bed."
        body="Every programme has a unit cost you can check. Choose where your money goes, or let our team send it where the week is hardest."
        primary={{ label: "Donate", href: "/donate" }}
        secondary={{ label: "See the impact of ₹1,000", href: "/donate?amount=1000" }}
      />
    </>
  );
}
