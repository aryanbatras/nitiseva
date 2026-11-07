import type { Metadata } from "next";
import { Suspense } from "react";
import { PaymentStatus } from "@/components/donate/payment-status";

export const metadata: Metadata = {
  title: "Payment status",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ order_id?: string }>;
};

async function ReturnStatus({ searchParams }: Props) {
  const params = await searchParams;
  return <PaymentStatus orderId={params.order_id} />;
}

function ReturnFallback() {
  return (
    <div className="shell flex min-h-[56svh] flex-col justify-center py-20">
      <p className="hindi text-[1.2rem] text-marigold">कृपया प्रतीक्षा करें</p>
      <p className="mt-4 text-[clamp(2.8rem,6vw,6rem)] leading-[0.95] tracking-[-0.045em]">
        Checking your payment…
      </p>
      <p className="mt-6 max-w-[40ch] text-[1rem] text-ink-soft">
        This usually takes a few seconds. Please do not close the window.
      </p>
    </div>
  );
}

export default function DonationReturnPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<ReturnFallback />}>
      <ReturnStatus searchParams={searchParams} />
    </Suspense>
  );
}
