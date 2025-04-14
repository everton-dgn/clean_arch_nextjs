# infra

The **infrastructure** layer is responsible for implementing technical details such as API access, databases, and caching.

## Subdirectories

- **`adapters`**: Implementations of ports defined in the `domain`.
  - **`http`**: Adapters for HTTP requests.
- **`cache`**: Cache management (e.g., Redis).
- **`models`**: Raw data models (e.g., DTOs).
- **`repositories`**: Repository implementations.

## Example

```ts
// infra/repositories/productRepository.ts
import { Product } from "domain/entities/product";

const API_URL = "https://api.example.com/products";

export const productRepository = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(API_URL);
    return response.json();
  }
};
```

---

# 🌐 Portuguese / Português

# infra

A camada de **infraestrutura** é responsável por implementar detalhes técnicos como acesso a APIs, bancos de dados e cache.

## Subdiretórios

- **`adapters`**: Implementações de portas definidas no `domain`.
  - **`http`**: Adaptadores para requisições HTTP.
- **`cache`**: Gerenciamento de cache (ex: Redis).
- **`models`**: Modelos de dados brutos (ex: DTOs).
- **`repositories`**: Implementações de repositórios.

## Exemplo

```ts
// infra/repositories/productRepository.ts
import { Product } from "domain/entities/product";

const API_URL = "https://api.example.com/products";

export const productRepository = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(API_URL);
    return response.json();
  }
};
```
