# core

Contains **reusable utilities and tools** that support the entire application, without depending on specific business logic.

## Subdirectories

- **`adapters`**: Generic adapters (e.g., logging, analytics).
- **`constants`**: Global constants (e.g., URLs).
- **`errors`**: Custom errors.
- **`formatters`**: Formatting functions (e.g., dates, currencies).
- **`utils`**: General utility functions.

## Example

```ts
// core/utils/deepMerge.ts
export const deepMerge = <T>(target: T, source: Partial<T>): T => {
  if (typeof target !== "object" || typeof source !== "object") return target;

  return Object.keys(source).reduce((acc, key) => {
    const typedKey = key as keyof T;
    if (
      source[typedKey] &&
      typeof source[typedKey] === "object" &&
      !Array.isArray(source[typedKey])
    ) {
      acc[typedKey] = deepMerge(target[typedKey], source[typedKey]);
    } else {
      acc[typedKey] = source[typedKey] ?? target[typedKey];
    }
    return acc;
  }, { ...target });
};
```

---

# 🌐 Portuguese / Português

# core

Contém **utilitários e ferramentas reutilizáveis** que suportam toda a aplicação, sem depender de lógica de negócio específica.

## Subdiretórios

- **`adapters`**: Adaptadores genéricos (ex: logging, analytics).
- **`constants`**: Constantes globais (ex: URLs).
- **`errors`**: Erros personalizados.
- **`formatters`**: Funções de formatação (ex: datas, moedas).
- **`utils`**: Funções utilitárias gerais.

## Exemplo

```ts
// core/utils/deepMerge.ts
export const deepMerge = <T>(target: T, source: Partial<T>): T => {
  if (typeof target !== "object" || typeof source !== "object") return target;

  return Object.keys(source).reduce((acc, key) => {
    const typedKey = key as keyof T;
    if (
      source[typedKey] &&
      typeof source[typedKey] === "object" &&
      !Array.isArray(source[typedKey])
    ) {
      acc[typedKey] = deepMerge(target[typedKey], source[typedKey]);
    } else {
      acc[typedKey] = source[typedKey] ?? target[typedKey];
    }
    return acc;
  }, { ...target });
};
```
