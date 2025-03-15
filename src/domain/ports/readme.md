# ports

Ports define **contracts** (interfaces) that establish communication between the
**domain layer** and external layers such as **infrastructure** and *
*application**. They ensure that the **business logic** remains independent of
specific implementations.

By using ports, we can swap external dependencies (e.g., databases, APIs, or
third-party services) without modifying the **core domain logic**.

It is the interface that defines the repository.

## Example

```ts
// domain/ports/productPort.ts
import { Product } from "../entities/product";

interface ProductPort {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
```
