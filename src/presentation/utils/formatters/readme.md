# formatters

Formatters contain **functions for transforming data into user-friendly formats**, such as converting numbers to currency or formatting dates.

**Formatters are used only in the presentation layer** to display formatted values in the UI.

## Example

```ts
// utils/formatters/formatCurrency.ts
const formatCurrency = (value: number, locale = "en-US", currency = "USD"): string => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
};
