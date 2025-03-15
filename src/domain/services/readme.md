# services

Services contain **domain-specific business logic** that goes beyond a single
entity. They operate independently of external dependencies and **should not be
tied to infrastructure or frameworks**.

A **service** is responsible for handling **complex operations**, **business
validations**, or **calculations** that involve multiple entities. Unlike **use
cases**, which orchestrate application flow, services are **purely domain-driven
** and reusable across different parts of the application.

## Example

```ts
// domain/services/productService.ts
import { Product } from "../entities/product";

interface ProductService {
  applyDiscount(product: Product, percent: number): Product;
}
```
