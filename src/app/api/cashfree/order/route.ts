import { NextResponse } from "next/server";
import { createCashfreeOrder, isCashfreeConfigured } from "@/lib/cashfree";
import { programmes } from "@/lib/content";

const programSlugs = new Set(["general", ...programmes.map((p) => p.slug)]);
const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function makeOrderId() {
  return `NS_${Date.now().toString(36).toUpperCase()}_${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;
}

function normalisePhone(value: unknown) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return digits;
}

export async function POST(request: Request) {
  if (!isCashfreeConfigured()) {
    return NextResponse.json(
      {
        error:
          "Online giving is not open yet. Please write to give@nitiseva.org and we will send bank transfer details.",
        code: "CASHFREE_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "We could not read that request. Please try again." },
      { status: 400 },
    );
  }

  const amount = Math.round(Number(payload.amount));
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim().toLowerCase();
  const phone = normalisePhone(payload.phone);
  const program = String(payload.program ?? "general");
  const note = String(payload.note ?? "").trim().slice(0, 200);
  const pan = String(payload.pan ?? "").trim().toUpperCase();

  if (!Number.isFinite(amount) || amount < 100 || amount > 200000) {
    return NextResponse.json(
      { error: "Enter a donation amount between ₹100 and ₹2,00,000." },
      { status: 400 },
    );
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 120) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (phone.length !== 10 || !/^[6-9]/.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit Indian mobile number." },
      { status: 400 },
    );
  }

  if (!programSlugs.has(program)) {
    return NextResponse.json(
      { error: "Please choose a valid programme." },
      { status: 400 },
    );
  }

  if (pan && !panPattern.test(pan)) {
    return NextResponse.json(
      { error: "That PAN does not look right. It should be 10 characters." },
      { status: 400 },
    );
  }

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin
  ).replace(/\/$/, "");
  const orderId = makeOrderId();

  try {
    const order = await createCashfreeOrder({
      orderId,
      amount,
      name,
      email,
      phone,
      program,
      note: note || `Donation to NitiSeva (${program})`,
      returnUrl: `${siteUrl}/donate/return?order_id={order_id}`,
      notifyUrl: `${siteUrl}/api/cashfree/webhook`,
    });

    return NextResponse.json({
      orderId: order.orderId,
      paymentSessionId: order.paymentSessionId,
      amount: order.amount,
      mode:
        process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
          ? "production"
          : "sandbox",
    });
  } catch (error) {
    console.error("Cashfree order creation failed", {
      orderId,
      message: error instanceof Error ? error.message : "unknown error",
    });

    return NextResponse.json(
      {
        error:
          "We could not start the payment just now. Please try again, or write to give@nitiseva.org.",
      },
      { status: 502 },
    );
  }
}
