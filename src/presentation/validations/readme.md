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
