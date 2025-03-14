# tests

Directory for **automated e2e tests**, covering flows and pages.

## Subdirectories

- **`flows`**: Integration tests for complete user flows.
- **`helpFunctions`**: Helper functions for tests.
- **`mocks`**: Mock data or styles.
- **`pages`**: Tests for specific pages.
- **`providers`**: Providers for components and hooks.

## Example

```ts
// tests/pages/home.spec.ts
import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'))

  test('must interact with the CounterButton', async ({ page }) => {
    await page.click('button[aria-label="COUNT: 0"]')

    const buttonText = await page.innerText('button[aria-label="COUNT: 1"]')
    expect(buttonText).toBe('COUNT: 1')

    await page.getByRole('button', { name: 'COUNT: 1' }).click()

    const buttonText2 = page.getByRole('button', { name: 'COUNT: 2' })
    await expect(buttonText2).toBeVisible()
  })
})
```
