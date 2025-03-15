# flow

The **flow** test directory contains **end-to-end (E2E) tests** that simulate **multi-page user journeys**, such as checkout, onboarding, and authentication flows.

These tests ensure that users can complete **complex interactions across multiple pages** without issues.

## Example - Checkout Flow Test (Playwright)

```ts
// tests/flow/checkoutFlow.test.ts
import { test, expect } from "@playwright/test";

test("User completes checkout flow", async ({ page }) => {
  // Step 1: Visit the store
  await page.goto("https://example.com/store");
  await expect(page).toHaveURL("https://example.com/store");

  // Step 2: Add a product to the cart
  await page.locator('[data-testid="add-to-cart"]').first().click();
  await page.locator('[data-testid="cart-icon"]').click();
  await expect(page).toHaveURL("https://example.com/cart");

  // Step 3: Proceed to checkout
  await page.locator('[data-testid="checkout-button"]').click();
  await expect(page).toHaveURL("https://example.com/checkout");

  // Step 4: Fill in payment details
  await page.fill('[data-testid="card-number"]', "4111111111111111");
  await page.fill('[data-testid="expiry-date"]', "12/26");
  await page.fill('[data-testid="cvv"]', "123");
  await page.locator('[data-testid="confirm-payment"]').click();

  // Step 5: Verify successful order completion
  await expect(page).toHaveURL("https://example.com/order-confirmation");
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
});
```
