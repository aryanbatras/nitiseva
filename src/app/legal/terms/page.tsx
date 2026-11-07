import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms that govern use of nitiseva.org, donations made through the site, tax receipts, intellectual property and liability.",
};

const sections: LegalSection[] = [
  {
    id: "these-terms",
    title: "These terms",
    body: (
      <>
        <p>
          These terms govern your use of nitiseva.org and any donation you make
          through it. By using the site or donating, you accept them. If you do
          not agree, please do not use the site.
        </p>
        <p>
          The site is operated by NitiSeva Foundation, a registered public
          charitable trust at 14 Ashok Marg, Lucknow 226001, Uttar Pradesh,
          India.
        </p>
      </>
    ),
  },
  {
    id: "what-nitiseva-is",
    title: "What NitiSeva is",
    body: (
      <>
        <p>
          NitiSeva runs community kitchens, learning centres, shelters and
          relief programmes in northern India. Content on this site is provided
          to explain that work. It is not an offer of goods or services, and a
          donation does not entitle you to anything in return.
        </p>
        <p>
          Programme descriptions, statistics and unit costs are reviewed
          regularly. They describe our work in good faith at the time of
          publication and may change as needs change.
        </p>
      </>
    ),
  },
  {
    id: "donations",
    title: "Donations",
    body: (
      <>
        <ul>
          <li>
            All amounts are in Indian rupees. The minimum online donation is
            ₹100 and the maximum in a single transaction is ₹2,00,000.
          </li>
          <li>
            You confirm that the money is from a lawful source, belongs to you
            or to an entity you are authorised to act for, and is not connected
            to money laundering or a prohibited person or organisation.
          </li>
          <li>
            You must be at least 18, or have the consent of a parent or
            guardian, to donate.
          </li>
          <li>
            Choosing a programme is an expression of preference. It does not
            create a restricted endowment or a legal trust over the funds. If a
            programme is fully funded or cannot be delivered as described, we
            may apply the gift to closely related work and will say so in our
            annual reporting.
          </li>
          <li>
            We may decline or refund a donation where we cannot lawfully accept
            it, where it appears fraudulent, or where accepting it would breach
            our policies. Foreign contributions are accepted only if permitted
            under the Foreign Contribution (Regulation) Act, 2010.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "receipts",
    title: "Receipts and 80G",
    body: (
      <>
        <p>
          NitiSeva Foundation holds 80G registration. To receive an 80G
          certificate, provide a valid PAN with your donation. Certificates are
          issued within seven working days when the payment and PAN are
          verified.
        </p>
        <p>
          A payment confirmation is not itself a tax certificate. Tax treatment
          depends on your own circumstances and the law in force when you claim
          it. We do not provide tax advice. If a receipt is wrong, write to{" "}
          <a href="mailto:give@nitiseva.org">give@nitiseva.org</a> and we will
          correct it.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payment processing",
    body: (
      <>
        <p>
          Payments are processed by Cashfree Payments India Private Limited.
          When you donate, you are also subject to Cashfree&rsquo;s terms and the
          terms of your bank or payment instrument. We do not control and are
          not responsible for a bank, UPI app or gateway failure that is outside
          our reasonable control.
        </p>
        <p>
          Never send full card details, a CVV or a UPI PIN to us by email. If
          you are unsure whether a payment succeeded, do not pay again before
          checking the status with the order ID.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Use of the website",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the site for an unlawful purpose or to interfere with its operation;</li>
          <li>attempt to gain access to systems, accounts or data you are not authorised to access;</li>
          <li>scrape, copy or republish substantial parts of the site without written permission;</li>
          <li>misrepresent an affiliation with NitiSeva or raise funds in our name without a written agreement; or</li>
          <li>upload malicious code or use the site to harass or defraud anyone.</li>
        </ul>
        <p>
          We may suspend or restrict access where we reasonably believe these
          terms have been broken.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Photographs, text and marks",
    body: (
      <>
        <p>
          The NitiSeva name, logo, text, photography and design are owned by
          NitiSeva Foundation or used under licence. Photographs of people in
          our programmes are published with consent and must not be reused to
          imply endorsement, to raise money, or for commercial purposes.
        </p>
        <p>
          You may share a page link and short quotations with attribution for
          non-commercial, educational or press use. For anything else — including
          reproducing a photograph or using our logo — write to{" "}
          <a href="mailto:hello@nitiseva.org">hello@nitiseva.org</a>.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links",
    body: (
      <p>
        Where we link to another website — a partner, a map or the payment
        gateway — that site is not under our control and has its own terms and
        privacy policy. A link is not an endorsement of everything on the
        destination site.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability and accuracy",
    body: (
      <>
        <p>
          We work to keep the site accurate and available, but it is provided on
          an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not
          warrant that it will be uninterrupted, error-free or free of harmful
          code, or that every programme detail is current at every moment.
        </p>
        <p>
          If you rely on a figure for a financial or legal decision, confirm it
          with us in writing first.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the extent permitted by Indian law, NitiSeva Foundation is not
          liable for indirect, incidental or consequential loss arising from
          use of the site or from a payment service failure outside our
          reasonable control.
        </p>
        <p>
          Nothing in these terms limits liability for fraud, wilful misconduct,
          or any liability that cannot lawfully be excluded. If you have made a
          payment that was not intended, the{" "}
          <Link href="/legal/refund">refund policy</Link> explains what to do.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. The courts at Lucknow,
        Uttar Pradesh have exclusive jurisdiction over disputes arising from
        them, subject to any right you have under consumer or other mandatory
        law.
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
          See also the <Link href="/legal/privacy">privacy policy</Link> and the{" "}
          <Link href="/legal/refund">refund policy</Link>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="The terms, without the fog."
      hindi="नियम"
      updated="7 November 2026"
      intro="What using this site and giving through it means, what you can expect from us, and the limits on both sides."
      sections={sections}
    />
  );
}
