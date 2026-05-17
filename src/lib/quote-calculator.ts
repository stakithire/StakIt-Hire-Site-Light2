
/**
 * Static math utilities for local price estimation.
 */
export function calculateQuoteTotal() {
  return { subtotal: 0, extensionFee: 0, extraWeeks: 0, deliveryFee: 0, stakitShieldFee: 0, total: 0 };
}

export function calculateExtensionCost() {
  return { cost: 0, additionalWeeks: 0 };
}
