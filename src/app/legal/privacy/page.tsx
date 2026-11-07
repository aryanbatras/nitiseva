import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How NitiSeva Foundation collects, uses, shares and protects personal data when you visit nitiseva.org or make a donation.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          NitiSeva Foundation (&ldquo;NitiSeva&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a registered public charitable trust with its
          office at 14 Ashok Marg, Lucknow 226001, Uttar Pradesh, India. For the
          purposes of the Digital Personal Data Protection Act, 2023, we are the
          data fiduciary for the personal data described in this policy.
        </p>
        <p>
          This policy explains what we collect, why we need it, who we share it
          with and what you can ask us to do with it. It applies to this website
          and to donations made through it.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>We try to collect only what a donation or an enquiry actually needs.</p>
        <ul>
          <li>
            <strong>Donation details:</strong> your name, email address, mobile
            number, the amount and programme you choose, an optional note, and
            an optional PAN if you want an 80G receipt.
          </li>
          <li>
            <strong>Payment records:</strong> the order ID we create, the
            payment status and the payment reference returned by Cashfree. We
            do not receive or store your card number, CVV, UPI PIN or bank
            credentials.
          </li>
          <li>
            <strong>Enquiry details:</strong> your name, email address, the
            subject you select and the message you send us.
          </li>
          <li>
            <strong>Technical data:</strong> standard server logs such as IP
            address, browser type, the page requested and the time of the
            request. These are used to keep the site available and secure.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <>
        <p>We use personal data to:</p>
        <ul>
          <li>process and verify your donation, and send it to the programme you chose;</li>
          <li>issue an 80G receipt and maintain the donation records Indian tax law requires;</li>
          <li>reply to your enquiry or volunteer application;</li>
          <li>prevent fraud, duplicate payments and misuse of the payment flow;</li>
          <li>produce aggregate, non-identifying reports about how funds are used; and</li>
          <li>meet legal, audit and regulatory obligations.</li>
        </ul>
        <p>
          We rely on your consent for the donation and enquiry information you
          submit, and on legal obligation for the records we must keep. We do
          not use your data for advertising, and we do not build donor profiles
          for sale.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments and Cashfree",
    body: (
      <>
        <p>
          Donations are processed by Cashfree Payments India Private Limited, a
          payment aggregator regulated by the Reserve Bank of India. When you
          press the donate button, we send Cashfree the order amount and the
          name, email address and mobile number you entered so it can complete
          the payment.
        </p>
        <p>
          Cashfree handles the payment page, your chosen payment instrument and
          the authentication step. Its own privacy policy and terms apply to
          that processing. NitiSeva never sees your card, UPI or net-banking
          credentials. You should not send those details to us by email.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <>
        <p>
          This site uses only the cookies and local storage needed to make it
          work and to keep the donation flow secure. We do not run advertising
          cookies, cross-site trackers or third-party marketing pixels.
        </p>
        <p>
          If we add privacy-respecting analytics in future, this page will be
          updated before it is switched on.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share with",
    body: (
      <>
        <p>We share personal data only where there is a reason:</p>
        <ul>
          <li>
            <strong>Cashfree</strong>, to process your payment and confirm its
            status.
          </li>
          <li>
            <strong>Auditors and accountants</strong>, who review donation
            records under confidentiality.
          </li>
          <li>
            <strong>Service providers</strong> such as our hosting and email
            providers, who process data on our instructions.
          </li>
          <li>
            <strong>Authorities</strong>, where a statute, court order or lawful
            request requires disclosure.
          </li>
        </ul>
        <p>
          We do not sell, rent or exchange donor lists. We do not share your
          details with other charities, political parties or commercial
          marketers. Where a service provider is outside India, we use
          contractual safeguards and share only what the service needs.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>
          Donation and 80G records, including PAN where provided, are kept for
          eight years after the end of the relevant financial year, as required
          by Indian tax law. Enquiry emails are kept for two years unless they
          relate to a donation or a legal matter. Server logs are rotated and
          kept for a short period.
        </p>
        <p>
          When a record is no longer needed, we delete or anonymise it. If you
          ask us to erase data we are legally required to keep, we will explain
          what must stay and why.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Subject to applicable law, you can ask us to:</p>
        <ul>
          <li>confirm what personal data we hold about you and give you a copy;</li>
          <li>correct information that is inaccurate or out of date;</li>
          <li>erase data that we no longer need and are not required to keep;</li>
          <li>withdraw consent for future processing; and</li>
          <li>nominate a person to exercise your rights in the event of death or incapacity.</li>
        </ul>
        <p>
          Write to{" "}
          <a href="mailto:hello@nitiseva.org">hello@nitiseva.org</a> with the
          subject &ldquo;Data request&rdquo;. We will acknowledge within two
          working days and respond within thirty days. We may need to verify
          your identity before acting. There is no fee for a reasonable request.
        </p>
        <p>
          If you are not satisfied with our response, you may complain to the
          Data Protection Board of India under the Digital Personal Data
          Protection Act, 2023.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <>
        <p>
          The site is served over TLS. Access to donation records is limited to
          the finance and programme staff who need it, under individual
          accounts. Payment secrets are held in server-side environment
          variables and are never sent to the browser.
        </p>
        <p>
          No system is perfect. If we become aware of a breach that affects your
          data, we will notify you and the relevant authority as required. If
          you think you have found a vulnerability, please write to{" "}
          <a href="mailto:hello@nitiseva.org">hello@nitiseva.org</a> before
          disclosing it publicly.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This website is not directed at children under 18 and we do not
        knowingly collect their personal data. If you believe a child has sent
        us personal data, write to us and we will delete it. Photographs of
        children in our programmes are used only with the written consent of a
        parent or guardian.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy when the law or our practices change. The
        &ldquo;last updated&rdquo; date at the top will change, and material
        changes will be flagged on the homepage for a reasonable period. The
        current version always governs.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>
          NitiSeva Foundation, 14 Ashok Marg, Lucknow 226001, Uttar Pradesh,
          India.
        </p>
        <p>
          Email: <a href="mailto:hello@nitiseva.org">hello@nitiseva.org</a>
          <br />
          Phone: <a href="tel:+915224000000">+91 522 400 0000</a>
        </p>
        <p>
          Read the <Link href="/legal/terms">terms of use</Link> and the{" "}
          <Link href="/legal/refund">refund policy</Link>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy, in plain language."
      hindi="गोपनीयता"
      updated="7 November 2026"
      intro="What we collect when you visit or give, why we need it, and how you can ask us to change or delete it."
      sections={sections}
    />
  );
}
