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

---

# 🌐 Portuguese / Português

# domain

A camada central da aplicação, contendo **regras de negócio** e lógica que é independente de frameworks ou infraestrutura.

## Subdiretórios

- **`entities`**: Objetos e funções que representam o domínio (ex: `Product`).
- **`ports`**: Interfaces que definem contratos (ex: `ProductRepository`).
- **`services`**: Serviços de domínio (ex: cálculos complexos).
- **`useCases`**: Casos de uso que orquestram entidades.
- **`validations`**: Funções de validação.

## Exemplo

```ts
// domain/useCases/listProducts.ts
import { ProductRepository } from "../ports/ProductRepository";
import { Product } from "../entities/product";

export const listProducts = async (repository: ProductRepository): Promise<Product[]> => {
  return repository.getAll();
};
```
