export const SUBSCRIPTION_PLANS = {
  FREE_TRIAL: {
    code: "FREE_TRIAL",
    label: "Free Trial",
    durationDays: 7,
    priceInr: 0
  },
  BASIC: {
    code: "BASIC",
    label: "Basic",
    durationDays: 365,
    priceInr: 999
  }
} as const;
