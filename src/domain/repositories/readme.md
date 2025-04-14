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

---

# 🌐 Portuguese / Português

# Repositórios

Repositórios encapsulam **lógica de acesso a dados** e fornecem uma **abstração sobre a camada de dados**. Eles são responsáveis por **recuperar e persistir entidades de domínio**, garantindo que a lógica de negócios permaneça independente do banco de dados ou mecanismo de armazenamento subjacente.

Um **repositório** deve expor uma interface que define **operações em entidades**, sem acoplar o domínio a um banco de dados ou ORM específico. As implementações de repositórios pertencem à camada de infraestrutura, enquanto a camada de domínio depende apenas de sua interface.

## Exemplo

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
