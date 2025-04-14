# services

Services contain **domain-specific business logic** that goes beyond a single
entity. They operate independently of external dependencies and **should not be
tied to infrastructure or frameworks**.

A **service** is responsible for handling **complex operations**, **business
validations**, or **calculations** that involve multiple entities. Unlike **use
cases**, which orchestrate application flow, services are **purely domain-driven
** and reusable across different parts of the application.

## Example

```ts
// domain/services/productService.ts
import { Product } from "../entities/product";

interface ProductService {
  applyDiscount(product: Product, percent: number): Product;
}
```

---

# 🌐 Portuguese / Português

# serviços

Os serviços contêm **lógica de negócios específica do domínio** que vai além de uma única
entidade. Eles operam independentemente de dependências externas e **não devem estar
vinculados à infraestrutura ou frameworks**.

Um **serviço** é responsável por lidar com **operações complexas**, **validações
de negócios** ou **cálculos** que envolvem várias entidades. Diferentemente dos **casos
de uso**, que orquestram o fluxo da aplicação, os serviços são **puramente orientados ao domínio
:** e reutilizáveis em diferentes partes da aplicação.

## Exemplo

```ts
// domain/services/productService.ts
import { Product } from "../entities/product";

interface ProductService {
  applyDiscount(product: Product, percent: number): Product;
}
```
