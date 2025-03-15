# domain

The core layer of the application, containing **business rules** and logic that is independent of frameworks or infrastructure.

## Subdirectories

- **`entities`**: Objects and functions representing the domain (e.g., `Product`).
- **`ports`**: Interfaces defining contracts (e.g., `ProductRepository`).
- **`services`**: Domain services (e.g., complex calculations).
- **`useCases`**: Use cases that orchestrate entities.
- **`validations`**: Validation functions.

## Example

```ts
// domain/useCases/listProducts.ts
import { ProductRepository } from "../ports/ProductRepository";
import { Product } from "../entities/product";

export const listProducts = async (repository: ProductRepository): Promise<Product[]> => {
  return repository.getAll();
};
```
