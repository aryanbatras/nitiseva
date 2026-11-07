"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { donationTiers } from "@/lib/content";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("en-IN");

export function ImpactCalculator() {
  const [amount, setAmount] = useState(1000);
  const id = useId();

  const results = useMemo(() => {
    return [
      {
        value: Math.floor(amount / 25),
        unit: amount < 50 ? "meal" : "meals",
        label: "hot plates at an Annapurna kitchen",
      },
      {
        value: Math.floor(amount / 500),
        unit: amount < 1000 ? "school kit" : "school kits",
        label: "books, notebooks and stationery",
      },
      {
        value: Math.floor(amount / 750),
        unit: amount < 1500 ? "winter kit" : "winter kits",
        label: "blanket, socks and a ground sheet",
      },
      {
        value: Math.floor(amount / 350),
        unit: amount < 700 ? "safe night" : "safe nights",
        label: "a bed and three meals at Aashray",
      },
    ];
  }, [amount]);

  const primary = results[0];

  return (
    <section className="bg-neem py-20 text-paper md:py-28">
      <div className="shell grid-12 gap-y-14">
        <div className="col-span-12 md:col-span-6">
          <h2 className="h2 max-w-[12ch] text-paper">Put a number on care.</h2>
          <p className="mt-6 max-w-[40ch] text-[1.08rem] leading-relaxed text-paper/75">
            Every programme has a unit cost we can defend. Move the amount and
            see what it actually buys. No estimates dressed up as promises.
          </p>

          <div className="mt-10 max-w-[30rem]">
            <label
              htmlFor={id}
              className="text-[0.9rem] font-medium text-paper/75"
            >
              Your gift, in rupees
            </label>
            <div className="mt-3 flex items-stretch border-[1.5px] border-paper/60 bg-paper text-ink">
              <span className="flex items-center pl-4 text-[1.5rem] text-ink-soft">
                ₹
              </span>
              <input
                id={id}
                type="number"
                inputMode="numeric"
                min={100}
                max={100000}
                step={100}
                value={amount}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  if (Number.isFinite(next)) {
                    setAmount(Math.min(100000, Math.max(0, next)));
                  }
                }}
                className="w-full bg-transparent px-3 py-3 text-[2rem] leading-none tracking-[-0.03em] tabular-nums outline-none"
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {donationTiers.map((tier) => {
                const active = amount === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setAmount(tier)}
                    aria-pressed={active}
                    className={`min-h-11 border px-2 py-2 text-[0.92rem] tabular-nums transition-colors ${
                      active
                        ? "border-marigold bg-marigold text-ink"
                        : "border-paper/35 text-paper/80 hover:border-paper hover:text-paper"
                    }`}
                  >
                    ₹{number.format(tier)}
                  </button>
                );
              })}
            </div>

            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={Math.min(10000, amount)}
              onChange={(event) => setAmount(Number(event.target.value))}
              aria-label="Donation amount slider"
              className="range-marigold mt-8 w-full"
            />

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={`/donate?amount=${Math.max(100, Math.round(amount))}`}
                className="btn btn-accent"
              >
                Give {formatter.format(Math.max(100, Math.round(amount)))}
              </Link>
              <span className="text-[0.82rem] text-paper/55">
                Secure payment via Cashfree
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="border-t-[1.5px] border-paper/35 pt-6">
            <p className="text-[0.9rem] text-paper/60">What this becomes</p>
            <p className="mt-4 text-[clamp(2.2rem,4vw,4rem)] leading-none tracking-[-0.04em] text-marigold-pale tabular-nums">
              {number.format(primary.value)}
            </p>
            <p className="mt-2 text-[1.2rem] text-paper">
              hot meals, served today.
            </p>
          </div>

          <div aria-live="polite" className="mt-10 flex flex-col">
            {results.slice(1).map((result) => (
              <div
                key={result.label}
                className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-t border-paper/20 py-4"
              >
                <span className="text-right text-[1.6rem] leading-none tabular-nums text-paper">
                  {number.format(result.value)}
                </span>
                <span className="text-[0.95rem] leading-snug text-paper/65">
                  {result.unit} — {result.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[34ch] text-[0.82rem] leading-relaxed text-paper/50">
            Unit costs are reviewed every quarter. A gift to the general fund is
            allocated where the need is greatest.
          </p>
        </div>
      </div>
    </section>
  );
}
