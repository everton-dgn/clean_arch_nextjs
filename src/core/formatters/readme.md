# formatters

Provides functions to transform and format data for consistency.

## Example

```ts
// core/formatters/formatQueryString.ts
// Formats an object into a query string for use in URLs
export const formatQueryString = (params: Record<string, string | number | boolean>) => {
  return new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = String(value)
      return acc
    }, {} as Record<string, string>)
  ).toString()
}
```
