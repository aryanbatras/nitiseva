import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

function safeCompare(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-webhook-signature");
  const timestamp = request.headers.get("x-webhook-timestamp");
  const secret =
    process.env.CASHFREE_WEBHOOK_SECRET ?? process.env.CASHFREE_CLIENT_SECRET;

  if (!signature || !timestamp || !secret) {
    return NextResponse.json(
      { error: "Missing webhook signature." },
      { status: 400 },
    );
  }

  const expected = createHmac("sha256", secret)
    .update(timestamp + rawBody)
    .digest("base64");

  if (!safeCompare(expected, signature)) {
    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 401 },
    );
  }

  let event: {
    type?: string;
    data?: {
      order?: { order_id?: string; order_amount?: number; order_status?: string };
      payment?: { payment_status?: string; cf_payment_id?: string };
    };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const order = event.data?.order;
  const payment = event.data?.payment;

  // Cashfree retries until it receives a 2xx. Keep this handler idempotent when
  // you connect it to a database: upsert on order.order_id and ignore repeats.
  console.info("Cashfree webhook received", {
    type: event.type,
    orderId: order?.order_id,
    orderStatus: order?.order_status,
    paymentStatus: payment?.payment_status,
    paymentId: payment?.cf_payment_id,
  });

  return NextResponse.json({ received: true });
}
