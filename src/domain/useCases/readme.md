# useCases

Use cases define **application-specific business logic**, orchestrating **domain
entities, services, and ports** to perform operations.

Unlike **services**, which contain pure business rules, **use cases handle
interactions and workflows** required by the application. They represent *
*actions** that a user or system can trigger.

## Example

```ts
// domain/useCases/addProduct.ts
import { ProductPort } from "../ports/productPort";
import { Product } from "../entities/product";

const addProduct = async (
  repository: ProductPort,
  product: Product
): Promise<void> => {
  await repository.save(product);
};
```
