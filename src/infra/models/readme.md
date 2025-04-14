# models

**Models** are used for the **representation of external data** received from
APIs, databases, or third-party services.

They are **only useful** if the API data structure differs from the **domain
entity**. Otherwise, the **domain entity** can be used directly, avoiding
unnecessary conversions.

## Example

```ts
// infrastructure/models/externalProductModel.ts
interface ExternalProductModel {
  product_id: string;
  product_name: string;
  cost: number;
} 
```

---

# 🌐 Portuguese / Português

# models

Os **Models** são usados para a **representação de dados externos** recebidos de
APIs, bancos de dados ou serviços de terceiros.

Eles são **úteis apenas** se a estrutura de dados da API for diferente da **entidade
de domínio**. Caso contrário, a **entidade de domínio** pode ser usada diretamente, evitando
conversões desnecessárias.

## Exemplo

```ts
// infrastructure/models/externalProductModel.ts
interface ExternalProductModel {
  product_id: string;
  product_name: string;
  cost: number;
} 
```
