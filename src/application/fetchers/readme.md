# `fetchers`

📌 Functions responsible for **calling repositories or gateways** and providing a unified interface for application components to access data.

✅ Acts as an intermediary to structure data fetching logic and state management.

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
