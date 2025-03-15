# models

**Models** are used for the **representation of external data** received from
APIs, databases, or third-party services.

They are **only useful** if the API data structure differs from the **domain
entity**. Otherwise, the **domain entity** can be used directly, avoiding
unnecessary conversions.

## Example

```ts
// infrastructure/models/externalProductModel.ts
interface ExternalProductModel {
  product_id: string;
  product_name: string;
  cost: number;
} 
```
