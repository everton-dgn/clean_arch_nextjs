# @types

This directory contains **global type definitions** for TypeScript, used throughout the application.

## Files

- **`images.d.ts`**: Declarations for importing images (e.g., `.png`, `.svg`).
- **`styles.d.ts`**: Declarations for CSS modules (e.g., `styles.module.css`).

## Example

```ts
// images.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

// styles.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
```
