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

---

# 🌐 Portuguese / Português

# formatters

Fornece funções para transformar e formatar dados para consistência.

## Exemplo

```ts
// core/formatters/formatQueryString.ts
// Formata um objeto em uma string de consulta para uso em URLs
export const formatQueryString = (params: Record<string, string | number | boolean>) => {
  return new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = String(value)
      return acc
    }, {} as Record<string, string>)
  ).toString()
}
```
