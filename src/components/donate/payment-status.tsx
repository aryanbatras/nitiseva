"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type State =
  | { kind: "loading" }
  | { kind: "paid"; amount: number; orderId: string }
  | { kind: "pending"; amount: number; orderId: string }
  | { kind: "failed"; orderId: string }
  | { kind: "error"; message: string; orderId?: string };

export function PaymentStatus({ orderId }: { orderId?: string }) {
  const [state, setState] = useState<State>(() =>
    orderId
      ? { kind: "loading" }
      : {
          kind: "error",
          message:
            "There is no order reference in this link. If you have already paid, write to give@nitiseva.org with the time of your payment.",
        },
  );
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!orderId) return;
    const id = orderId;

    let cancelled = false;

    async function verify() {
      let next: State;

      try {
        const response = await fetch("/api/cashfree/verify", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ orderId: id }),
        });
        const data = (await response.json()) as {
          status?: string;
          amount?: number;
          orderId?: string;
          error?: string;
        };

        if (!response.ok) {
          next = {
            kind: "error",
            message:
              data.error ??
              "We could not check the payment status just now. Your money is safe.",
            orderId: id,
          };
        } else if (data.status === "PAID") {
          next = {
            kind: "paid",
            amount: data.amount ?? 0,
            orderId: data.orderId ?? id,
          };
        } else if (data.status === "ACTIVE") {
          next = {
            kind: "pending",
            amount: data.amount ?? 0,
            orderId: data.orderId ?? id,
          };
        } else {
          next = { kind: "failed", orderId: id };
        }
      } catch {
        next = {
          kind: "error",
          message:
            "We could not reach the payment status service. Keep your order ID and try again in a minute.",
          orderId: id,
        };
      }

      if (!cancelled) setState(next);
    }

    void verify();

    return () => {
      cancelled = true;
    };
  }, [orderId, attempt]);

  function recheck() {
    setState({ kind: "loading" });
    setAttempt((value) => value + 1);
  }

  if (state.kind === "loading") {
    return (
      <div className="shell flex min-h-[56svh] flex-col justify-center py-20">
        <p className="hindi text-[1.2rem] text-marigold">कृपया प्रतीक्षा करें</p>
        <h1 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] leading-[0.95] tracking-[-0.045em]">
          Checking your payment…
        </h1>
        <p className="mt-6 max-w-[40ch] text-[1rem] text-ink-soft">
          This usually takes a few seconds. Please do not close the window.
        </p>
      </div>
    );
  }

  if (state.kind === "paid") {
    return (
      <section className="shell py-20 md:py-28">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <p className="hindi text-[1.5rem] text-marigold">धन्यवाद</p>
            <h1 className="mt-4 text-[clamp(2.9rem,6.4vw,7rem)] leading-[0.94] tracking-[-0.045em]">
              Thank you. The plate is already being served.
            </h1>
            <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-ink-soft">
              Your payment has reached us. Keep the order ID below — write to{" "}
              <a
                href="mailto:give@nitiseva.org"
                className="underline underline-offset-2 hover:text-ink"
              >
                give@nitiseva.org
              </a>{" "}
              with it and we will send your 80G receipt within seven working
              days.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/programs" className="btn">
                See the work <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/" className="link-line self-center text-[0.95rem]">
                Back to home
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="border border-ink/20 bg-paper-warm p-6">
              <dl className="flex flex-col gap-5">
                <div>
                  <dt className="text-[0.8rem] text-ink-soft">Amount paid</dt>
                  <dd className="mt-1 text-[2rem] leading-none tracking-[-0.03em] tabular-nums">
                    {inr.format(state.amount)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] text-ink-soft">Order ID</dt>
                  <dd className="mt-1 font-mono text-[0.85rem] break-all">
                    {state.orderId}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] text-ink-soft">Status</dt>
                  <dd className="mt-1 text-[1rem]">Paid</dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-ink/15 pt-4 text-[0.8rem] leading-relaxed text-ink-soft">
                This receipt is not a tax certificate. The 80G certificate is
                issued separately after PAN verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state.kind === "pending") {
    return (
      <section className="shell py-20 md:py-28">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[0.9rem] text-ink-soft">Order {state.orderId}</p>
            <h1 className="mt-4 text-[clamp(2.9rem,6vw,6.4rem)] leading-[0.94] tracking-[-0.045em]">
              The bank is still confirming.
            </h1>
            <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-ink-soft">
              Cashfree has not received a final confirmation yet. This can take
              a few minutes for UPI and net banking. Do not pay again — refresh
              the status first.
            </p>
            <div className="mt-9 flex flex-wrap gap-5">
              <button type="button" onClick={recheck} className="btn">
                Check again <span aria-hidden="true">↻</span>
              </button>
              <Link href="/contact" className="link-line self-center text-[0.95rem]">
                Contact us
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="bg-paper-deep p-6">
              <p className="text-[0.8rem] text-ink-soft">If the money has left your account</p>
              <p className="mt-2 text-[1rem] leading-relaxed">
                It will be reconciled automatically. If the status has not
                changed in 24 hours, write to{" "}
                <a href="mailto:give@nitiseva.org" className="underline underline-offset-2">
                  give@nitiseva.org
                </a>{" "}
                with this order ID.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state.kind === "failed") {
    return (
      <section className="shell py-20 md:py-28">
        <div className="max-w-[54rem]">
          <p className="text-[0.9rem] text-ink-soft">Order {state.orderId}</p>
          <h1 className="mt-4 text-[clamp(2.9rem,6vw,6.4rem)] leading-[0.94] tracking-[-0.045em]">
            That payment did not go through.
          </h1>
          <p className="mt-7 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft">
            No money has left your account. The order may have expired or been
            cancelled. You can start again — it takes about a minute.
          </p>
          <div className="mt-9 flex flex-wrap gap-5">
            <Link href="/donate" className="btn btn-accent">
              Try again <span aria-hidden="true">↗</span>
            </Link>
            <a
              href="mailto:give@nitiseva.org"
              className="link-line self-center text-[0.95rem]"
            >
              Tell us what happened
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shell py-20 md:py-28">
      <div className="max-w-[54rem]">
        <h1 className="text-[clamp(2.9rem,6vw,6.4rem)] leading-[0.94] tracking-[-0.045em]">
          We could not confirm the status.
        </h1>
        <p className="mt-7 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft">
          {state.message}
        </p>
        {state.orderId ? (
          <p className="mt-4 font-mono text-[0.85rem] break-all text-ink-soft">
            Order ID: {state.orderId}
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap gap-5">
          <button type="button" onClick={recheck} className="btn">
            Check again
          </button>
          <a
            href="mailto:give@nitiseva.org"
            className="link-line self-center text-[0.95rem]"
          >
            give@nitiseva.org
          </a>
        </div>
        <p className="mt-8 text-[0.85rem] text-ink-soft">
          If you were charged and see no confirmation, do not pay again. Write
          to us with the time of payment and the order ID above.
        </p>
      </div>
    </section>
  );
}
