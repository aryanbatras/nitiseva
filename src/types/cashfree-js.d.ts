declare module "@cashfreepayments/cashfree-js" {
  export type CashfreeMode = "sandbox" | "production";

  export type CheckoutOptions = {
    paymentSessionId: string;
    redirectTarget?: "_self" | "_blank" | "_top" | "_modal";
    returnUrl?: string;
  };

  export type CheckoutResult = {
    error?: { message?: string; code?: string };
    redirect?: boolean;
    paymentDetails?: {
      paymentMessage?: string;
    };
  };

  export type CashfreeInstance = {
    checkout: (options: CheckoutOptions) => Promise<CheckoutResult>;
  };

  export function load(options: { mode: CashfreeMode }): Promise<CashfreeInstance | null>;
}
