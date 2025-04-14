# repositories

Repositories are **an abstraction over data access**, allowing the **domain** to
interact with the database without knowing the implementation details.

This ensures that **business logic** remains **decoupled** from specific
technologies, making it easy to switch between different data storage solutions.

## Example

```ts
// infrastructure/repositories/productRepository.ts
import { Product } from "domain/entities/product";
import { ProductPort } from "domain/ports/productPort";
import { HttpClient } from "../adapters/httpClientAdapter";

const ProductRepository: ProductPort = {
  async getAll(): Promise<Product[]> {
    return HttpClient.get("https://api.example.com/products");
  },

  async getById(id: string): Promise<Product | null> {
    return HttpClient.get(`https://api.example.com/products/${id}`);
  },

  async save(product: Product): Promise<void> {
    await HttpClient.post("https://api.example.com/products", product);
  },

  async delete(id: string): Promise<void> {
    await HttpClient.delete(`https://api.example.com/products/${id}`);
  },
};
```

---

# 🌐 Portuguese / Português

# repositories

Os repositórios são **uma abstração sobre o acesso a dados**, permitindo que o **domínio**
interaja com o banco de dados sem conhecer os detalhes de implementação.

Isso garante que a **lógica de negócios** permaneça **desacoplada** de tecnologias
específicas, facilitando a troca entre diferentes soluções de armazenamento de dados.

## Exemplo

```ts
// infrastructure/repositories/productRepository.ts
import { Product } from "domain/entities/product";
import { ProductPort } from "domain/ports/productPort";
import { HttpClient } from "../adapters/httpClientAdapter";

const ProductRepository: ProductPort = {
  async getAll(): Promise<Product[]> {
    return HttpClient.get("https://api.example.com/products");
  },

  async getById(id: string): Promise<Product | null> {
    return HttpClient.get(`https://api.example.com/products/${id}`);
  },

  async save(product: Product): Promise<void> {
    await HttpClient.post("https://api.example.com/products", product);
  },

  async delete(id: string): Promise<void> {
    await HttpClient.delete(`https://api.example.com/products/${id}`);
  },
};
```
