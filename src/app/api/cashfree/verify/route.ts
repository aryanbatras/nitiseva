import { NextResponse } from "next/server";
import { getCashfreeOrder, isCashfreeConfigured } from "@/lib/cashfree";

export async function POST(request: Request) {
  if (!isCashfreeConfigured()) {
    return NextResponse.json(
      { error: "Cashfree is not configured." },
      { status: 503 },
    );
  }

  let payload: { orderId?: unknown };

  try {
    payload = (await request.json()) as { orderId?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const orderId = String(payload.orderId ?? "").trim();

  if (!/^NS_[A-Z0-9]{4,40}$/.test(orderId)) {
    return NextResponse.json({ error: "Invalid order." }, { status: 400 });
  }

  try {
    const order = await getCashfreeOrder(orderId);
    return NextResponse.json({
      orderId: order.orderId,
      amount: order.amount,
      status: order.status,
    });
  } catch (error) {
    console.error("Cashfree verification failed", {
      orderId,
      message: error instanceof Error ? error.message : "unknown error",
    });
    return NextResponse.json(
      { error: "We could not verify that order. Please contact us." },
      { status: 502 },
    );
  }
}
