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
