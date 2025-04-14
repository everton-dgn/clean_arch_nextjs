# validations

Validations **ensure that data meets predefined criteria** before being processed.

## Example

```ts
// utils/validations/isEmailValid.ts
import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Invalid email format")
  .min(5, "Email must have at least 5 characters")
  .max(255, "Email must have at most 255 characters");
```

---

# 🌐 Portuguese / Português

# validations

Validations **garantem que os dados atendam a critérios predefinidos** antes de serem processados.

## Exemplo

```ts
// utils/validations/isEmailValid.ts
import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Formato de email inválido")
  .min(5, "O email deve ter pelo menos 5 caracteres")
  .max(255, "O email deve ter no máximo 255 caracteres");
```
