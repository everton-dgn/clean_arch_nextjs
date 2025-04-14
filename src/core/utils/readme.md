# utils

Contains generic helper functions that can be used across different parts of the application.

## Example

```ts
// core/utils/debounce.ts
export const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
```

---

# 🌐 Portuguese / Português

# utils

Contém funções auxiliares genéricas que podem ser usadas em diferentes partes da aplicação.

## Exemplo

```ts
// core/utils/debounce.ts
export const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
```
