# Forms Subdirectory (`validations/forms`)

Specific validation logic for form inputs.

## Example

```ts
// core/validations/forms/validateLogin.ts
export const validateLogin = (email: string, password: string) => {
  return isValidEmail(email) && password.length >= 6;
};
```

---

# 🌐 Portuguese / Português

# Subdiretório Forms (`validations/forms`)

Lógica de validação específica para entradas de formulários.

## Exemplo

```ts
// core/validations/forms/validateLogin.ts
export const validateLogin = (email: string, password: string) => {
  return isValidEmail(email) && password.length >= 6;
};
```
