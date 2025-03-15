# cache

The **cache** layer handles temporary data storage, improving performance by
avoiding unnecessary external requests. It allows **fast access** to frequently
used data without hitting a database or API repeatedly.

In **React applications**, caching can be managed using **React Query**, which
provides automatic background updates and stale data handling.

## Example

```ts
// infrastructure/cache/useProductCache.ts
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Product } from "domain/entities/product";
import { ProductPort } from "domain/ports/productPort";

const queryClient = new QueryClient();

const useProductCache = (repository: ProductPort) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: repository.getAll,
  });

  const addProduct = useMutation({
    mutationFn: async (product: Product) => {
      await repository.save(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { products, isLoading, addProduct };
};
```
