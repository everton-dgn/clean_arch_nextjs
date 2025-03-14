# application

This layer is responsible for **orchestrating the application's logic**, connecting the domain (`domain`) with the infrastructure (`infra`).

## Subdirectories

- **`factories`**: Functions for creating instances of services or adapters.
- **`fetchers`**: Functions for fetching data from external sources.
- **`gateways`**: Interfaces and implementations for external services.

## Example

```ts
// application/fetchers/useProducts.ts
import { useEffect, useState } from "react";
import { listProducts } from "domain/useCases/listProducts";
import { productRepositoryAdapter } from "infra/adapters/productRepository";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await listProducts(productRepositoryAdapter());
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading };
};
```
