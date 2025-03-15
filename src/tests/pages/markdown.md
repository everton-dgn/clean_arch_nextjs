# pages

The **pages** test directory contains **end-to-end (E2E) tests** for individual pages, ensuring that each page loads correctly and behaves as expected.

Unlike **flow tests**, which validate multi-page interactions, **page tests** focus on specific screens and their core functionalities.

## Example - Product Page Test (Playwright)

```ts
// tests/pages/productPage.test.ts
import { test, expect } from "@playwright/test";

test("Product page displays product details correctly", async ({ page }) => {
  // Navigate to the product page
  await page.goto("https://example.com/product/123");

  // Check if product title is visible
  await expect(page.locator('[data-testid="product-title"]')).toBeVisible();

  // Check if product price is displayed
  await expect(page.locator('[data-testid="product-price"]')).toBeVisible();

  // Verify that the "Add to Cart" button is enabled
  await expect(page.locator('[data-testid="add-to-cart"]')).toBeEnabled();
});
```
