# Forms Subdirectory (`validations/forms`)

Specific validation logic for form inputs.

## Example

```ts
// core/validations/forms/validateLogin.ts
export const validateLogin = (email: string, password: string) => {
  return isValidEmail(email) && password.length >= 6;
};
```
