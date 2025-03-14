# validations

Includes validation functions to ensure data integrity and enforce business rules.

## Example

```ts
// core/validations/emailValidator.ts
export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```
