"use client";

import Link from "next/link";
import { useState } from "react";
import { donationTiers, programmeOptions } from "@/lib/content";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const plain = new Intl.NumberFormat("en-IN");

type Status = "idle" | "submitting" | "error";

export function DonationForm({
  initialAmount = 1000,
  initialProgram = "general",
}: {
  initialAmount?: number;
  initialProgram?: string;
}) {
  const [amount, setAmount] = useState(
    Number.isFinite(initialAmount) ? initialAmount : 1000,
  );
  const [program, setProgram] = useState(initialProgram);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [note, setNote] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const meals = Math.floor(Math.max(0, amount) / 25);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/cashfree/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          amount,
          name,
          email,
          phone,
          pan,
          note,
          program,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        orderId?: string;
        paymentSessionId?: string;
        mode?: "sandbox" | "production";
      };

      if (!response.ok || !data.paymentSessionId) {
        throw new Error(
          data.error ?? "We could not start the payment. Please try again.",
        );
      }

      const { load } = await import("@cashfreepayments/cashfree-js");
      const cashfree = await load({ mode: data.mode ?? "sandbox" });

      if (!cashfree) {
        throw new Error("The payment window could not be loaded.");
      }

      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_self",
      });

      if (result?.error) {
        throw new Error(result.error.message ?? "Payment could not start.");
      }
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "We could not start the payment. Please try again.",
      );
      setStatus("error");
      return;
    }

    setStatus("idle");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink/25 bg-paper-warm p-5 sm:p-7 md:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-[1.65rem] leading-tight tracking-[-0.03em]">
          Make a donation
        </h2>
        <p className="text-[0.8rem] text-ink-soft">Secure payment via Cashfree</p>
      </div>

      <fieldset className="mt-7">
        <legend className="text-[0.92rem] font-medium">Choose an amount</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {donationTiers.map((tier) => {
            const active = amount === tier;
            return (
              <button
                key={tier}
                type="button"
                onClick={() => setAmount(tier)}
                aria-pressed={active}
                className={`min-h-12 border px-3 text-[0.95rem] tabular-nums transition-colors ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/30 text-ink hover:border-ink"
                }`}
              >
                ₹{plain.format(tier)}
              </button>
            );
          })}
        </div>

        <label
          htmlFor="donation-amount"
          className="mt-5 block text-[0.92rem] font-medium"
        >
          Or enter another amount
        </label>
        <div className="mt-2 flex items-stretch border-[1.5px] border-ink/60 bg-paper focus-within:border-marigold focus-within:shadow-[inset_0_0_0_1px_var(--marigold)]">
          <span className="flex items-center pl-3.5 text-[1.2rem] text-ink-soft">
            ₹
          </span>
          <input
            id="donation-amount"
            name="amount"
            type="number"
            inputMode="numeric"
            min={100}
            max={200000}
            step={100}
            required
            value={amount || ""}
            onChange={(event) => {
              const next = Number(event.target.value);
              setAmount(Number.isFinite(next) ? next : 0);
            }}
            className="w-full bg-transparent px-2 py-2.5 text-[1.5rem] leading-none tracking-[-0.03em] tabular-nums outline-none"
          />
        </div>
        <p className="mt-2 text-[0.8rem] text-ink-soft">
          Minimum ₹100. That is {plain.format(meals)} hot meals in Lucknow.
        </p>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="donation-program" className="block text-[0.92rem] font-medium">
          Where should it go?
        </label>
        <select
          id="donation-program"
          name="program"
          value={program}
          onChange={(event) => setProgram(event.target.value)}
          className="field mt-2"
        >
          {programmeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="donation-name" className="block text-[0.92rem] font-medium">
            Full name
          </label>
          <input
            id="donation-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field mt-2"
            placeholder="As it should appear on the receipt"
          />
        </div>

        <div>
          <label htmlFor="donation-email" className="block text-[0.92rem] font-medium">
            Email
          </label>
          <input
            id="donation-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="field mt-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="donation-phone" className="block text-[0.92rem] font-medium">
            Mobile number
          </label>
          <input
            id="donation-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            className="field mt-2"
            placeholder="98765 43210"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="donation-pan" className="block text-[0.92rem] font-medium">
            PAN <span className="font-normal text-ink-soft">(optional, for 80G)</span>
          </label>
          <input
            id="donation-pan"
            name="pan"
            autoComplete="off"
            maxLength={10}
            value={pan}
            onChange={(event) => setPan(event.target.value.toUpperCase())}
            className="field mt-2 uppercase"
            placeholder="ABCDE1234F"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="donation-note" className="block text-[0.92rem] font-medium">
            A note <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <textarea
            id="donation-note"
            name="note"
            rows={3}
            maxLength={200}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="field mt-2 resize-y"
            placeholder="In memory of, or a message for the team"
          />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-[0.88rem] leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-marigold"
        />
        <span>
          I have read the{" "}
          <Link href="/legal/terms" className="underline underline-offset-2 hover:text-ink">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/legal/refund" className="underline underline-offset-2 hover:text-ink">
            refund policy
          </Link>
          . I understand this is a donation, not a purchase.
        </span>
      </label>

      {error ? (
        <div
          role="alert"
          className="mt-5 border-l-4 border-destructive bg-destructive/10 px-4 py-3 text-[0.9rem] leading-relaxed text-destructive"
        >
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting" || !agreed || amount < 100}
        className="btn btn-accent mt-6 w-full text-[1.05rem]"
      >
        {status === "submitting"
          ? "Opening secure payment…"
          : `Give ${inr.format(Math.max(0, amount || 0))}`}
        <span aria-hidden="true">↗</span>
      </button>

      <p className="mt-4 text-center text-[0.78rem] leading-relaxed text-ink-soft">
        You will be redirected to Cashfree. NitiSeva never sees or stores your
        card or UPI details.
      </p>
    </form>
  );
}
