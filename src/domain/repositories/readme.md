# Repositories

Repositories encapsulate **data access logic** and provide an **abstraction over the data layer**. They are responsible for **retrieving and persisting domain entities**, ensuring that business logic remains independent of the underlying database or storage mechanism.

A **repository** should expose an interface that defines **operations on entities**, without coupling the domain to a specific database or ORM. Implementations of repositories belong to the infrastructure layer, while the domain layer depends only on their interface.

## Example

```ts
// domain/repositories/productRepository.ts
import { Product } from "../entities/product";

export type ProductRepository = {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
```
