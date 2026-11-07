import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Refund policy",
  description:
    "When NitiSeva will refund a donation, how to request one, how long it takes, and the cases where a donation cannot be returned.",
};

const sections: LegalSection[] = [
  {
    id: "the-short-version",
    title: "The short version",
    body: (
      <>
        <p>
          A donation is not a purchase, and most donations are spent within
          weeks. We do not refund a gift simply because you change your mind.
        </p>
        <p>
          We will refund a <strong>duplicate payment</strong>, a{" "}
          <strong>payment made in error</strong>, an{" "}
          <strong>unauthorised transaction</strong> reported promptly, or a
          donation we cannot lawfully accept. If one of those applies, write to{" "}
          <a href="mailto:give@nitiseva.org">give@nitiseva.org</a> with the order
          ID and we will sort it out.
        </p>
      </>
    ),
  },
  {
    id: "when-we-refund",
    title: "When we will refund",
    body: (
      <>
        <ul>
          <li>
            <strong>Duplicate payment.</strong> You were charged more than once
            for the same order, or you paid twice for the same gift.
          </li>
          <li>
            <strong>Incorrect amount.</strong> A technical fault caused a
            different amount to be charged from the one you entered.
          </li>
          <li>
            <strong>Unauthorised transaction.</strong> Someone used your payment
            instrument without your permission and you tell us within seven
            days of the transaction.
          </li>
          <li>
            <strong>Payment without an order.</strong> You were charged but no
            valid order exists in our records, or the payment succeeded after
            the order had expired and cannot be reconciled.
          </li>
          <li>
            <strong>Donation we cannot accept.</strong> For example, a foreign
            contribution that cannot be accepted under the Foreign Contribution
            (Regulation) Act, 2010, or a donation that fails our lawful-source
            checks.
          </li>
        </ul>
        <p>
          Where the fault is ours or the gateway&rsquo;s, we refund the full
          amount you paid. We do not keep the payment gateway fee in those
          cases.
        </p>
      </>
    ),
  },
  {
    id: "how-to-ask",
    title: "How to request a refund",
    body: (
      <>
        <p>
          Email <a href="mailto:give@nitiseva.org">give@nitiseva.org</a> within
          seven days of the payment, with:
        </p>
        <ul>
          <li>the order ID shown on your payment confirmation;</li>
          <li>the amount and date of the payment;</li>
          <li>the last four digits of the card, or the UPI or bank reference;</li>
          <li>a short description of what went wrong; and</li>
          <li>the email address or phone number used for the donation.</li>
        </ul>
        <p>
          Never send your full card number, CVV or UPI PIN. We do not need them
          and will never ask for them.
        </p>
        <p>
          If you cannot find the order ID, send the payment date, amount and the
          name used, and we will search for it.
        </p>
      </>
    ),
  },
  {
    id: "what-happens-next",
    title: "What happens next",
    body: (
      <>
        <ul>
          <li>We acknowledge your request within two working days.</li>
          <li>
            We check the order against Cashfree and our own records, usually
            within five to seven working days.
          </li>
          <li>
            If the refund is approved, we initiate it to the original payment
            method. Cashfree and your bank then take five to ten working days to
            credit it.
          </li>
          <li>
            We will tell you when the refund is initiated and give you the
            gateway reference. We cannot control how long your bank takes to
            post it.
          </li>
        </ul>
        <p>
          Refunds are made in Indian rupees to the original instrument. We
          cannot refund to a different card, account or person, except where the
          original instrument has been closed and the law permits an alternative.
        </p>
      </>
    ),
  },
  {
    id: "when-we-cannot",
    title: "When we cannot refund",
    body: (
      <>
        <ul>
          <li>
            <strong>A change of mind</strong> more than seven days after the
            payment, or after the donation has been receipted and deployed.
          </li>
          <li>
            <strong>A completed monthly or recurring gift</strong> for a period
            that has already been processed. You can ask us to cancel future
            instalments at any time.
          </li>
          <li>
            <strong>A chargeback raised without contacting us first.</strong> We
            cooperate with genuine bank disputes, but a chargeback for a
            donation you intended to make may be contested.
          </li>
          <li>
            <strong>An anonymous cash gift</strong> where we cannot verify the
            payment or the payer.
          </li>
        </ul>
        <p>
          If we decline a refund, we will explain why in writing and tell you
          how to escalate the matter.
        </p>
      </>
    ),
  },
  {
    id: "chargebacks",
    title: "Chargebacks and disputes",
    body: (
      <p>
        If you see an unexpected charge, write to us before asking your bank for
        a chargeback. Most issues are a duplicate authorisation or a pending UPI
        confirmation that we can resolve or reverse faster than a dispute. If
        you do raise a chargeback, send us the case reference so we can respond
        with the order records.
      </p>
    ),
  },
  {
    id: "foreign-donations",
    title: "Foreign donations",
    body: (
      <p>
        NitiSeva may accept foreign contributions only where permitted by the
        Foreign Contribution (Regulation) Act, 2010 and its rules. If a
        contribution cannot lawfully be accepted, we will return the full amount
        to the originating account within fifteen working days and tell you in
        writing. Bank charges on the return are borne by us where the refusal is
        ours.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>
          Refunds and payment queries:{" "}
          <a href="mailto:give@nitiseva.org">give@nitiseva.org</a>
          <br />
          General queries:{" "}
          <a href="mailto:hello@nitiseva.org">hello@nitiseva.org</a>
          <br />
          Phone: <a href="tel:+915224000000">+91 522 400 0000</a>
        </p>
        <p>
          NitiSeva Foundation, 14 Ashok Marg, Lucknow 226001, Uttar Pradesh,
          India. Monday to Saturday, 9:30 am – 5:30 pm IST.
        </p>
        <p>
          See also the <Link href="/legal/terms">terms of use</Link> and the{" "}
          <Link href="/legal/privacy">privacy policy</Link>.
        </p>
      </>
    ),
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="If something went wrong with a payment."
      hindi="धनवापसी"
      updated="7 November 2026"
      intro="Donations are not purchases, but mistakes happen. Here is what we will refund, how to ask, and how long it takes."
      sections={sections}
    />
  );
}
