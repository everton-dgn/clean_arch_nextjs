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

---

# 🌐 Portuguese / Português

# `fetchers`

📌 Funções responsáveis por **chamar repositórios ou gateways** e fornecer uma interface unificada para que os componentes da aplicação acessem dados.

✅ Atua como um intermediário para estruturar a lógica de busca de dados e gerenciamento de estado.

## Exemplo

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
