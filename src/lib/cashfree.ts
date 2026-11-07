const API_VERSION = "2023-08-01";

function baseUrl() {
  return process.env.CASHFREE_ENV === "production"
    ? "https://api.cashfree.com/pg"
    : "https://sandbox.cashfree.com/pg";
}

export function isCashfreeConfigured() {
  return Boolean(
    process.env.CASHFREE_CLIENT_ID && process.env.CASHFREE_CLIENT_SECRET,
  );
}

type CashfreeOrderResponse = {
  order_id: string;
  order_amount: number;
  order_status: string;
  payment_session_id: string;
  order_expiry_time?: string;
};

export type CreatedOrder = {
  orderId: string;
  paymentSessionId: string;
  amount: number;
};

export type OrderStatus = {
  orderId: string;
  amount: number;
  status: string;
  message?: string;
};

async function cashfreeFetch(path: string, init: RequestInit) {
  const clientId = process.env.CASHFREE_CLIENT_ID;
  const clientSecret = process.env.CASHFREE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Cashfree credentials are not configured.");
  }

  const response = await fetch(`${baseUrl()}${path}`, {
    ...init,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-version": API_VERSION,
      "x-client-id": clientId,
      "x-client-secret": clientSecret,
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });

  const text = await response.text();
  let data: unknown = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message =
      typeof data === "object" && data !== null && "message" in data
        ? String((data as { message: unknown }).message)
        : `Cashfree request failed with status ${response.status}.`;
    throw new Error(message);
  }

  return data;
}

export async function createCashfreeOrder(input: {
  orderId: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
  program: string;
  note: string;
  returnUrl: string;
  notifyUrl: string;
}): Promise<CreatedOrder> {
  const customerId = `NS_CUST_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  const data = (await cashfreeFetch("/orders", {
    method: "POST",
    body: JSON.stringify({
      order_id: input.orderId,
      order_amount: input.amount,
      order_currency: "INR",
      order_note: input.note,
      customer_details: {
        customer_id: customerId,
        customer_name: input.name,
        customer_email: input.email,
        customer_phone: input.phone,
      },
      order_meta: {
        return_url: input.returnUrl,
        notify_url: input.notifyUrl,
      },
      order_tags: {
        program: input.program,
        source: "website",
      },
    }),
  })) as CashfreeOrderResponse;

  if (!data?.payment_session_id) {
    throw new Error("Cashfree did not return a payment session.");
  }

  return {
    orderId: data.order_id,
    paymentSessionId: data.payment_session_id,
    amount: data.order_amount,
  };
}

export async function getCashfreeOrder(orderId: string): Promise<OrderStatus> {
  const data = (await cashfreeFetch(`/orders/${encodeURIComponent(orderId)}`, {
    method: "GET",
  })) as CashfreeOrderResponse & { order_note?: string };

  return {
    orderId: data.order_id,
    amount: data.order_amount,
    status: data.order_status,
    message: data.order_note,
  };
}
