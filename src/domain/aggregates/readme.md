# Aggregates

Aggregates represent **clusters of domain objects** that are treated as a single unit. They enforce **invariants** and ensure consistency within their boundaries. The **aggregate root** is the main entity responsible for maintaining the integrity of the aggregate and coordinating operations.

Aggregates should be designed to minimize dependencies and ensure that all operations maintain a valid state.

## Characteristics of Aggregates

1. **Single Root (Aggregate Root)**: Only the root can be referenced directly by other parts of the system.
2. **Internal Consistency**: All business rules within the aggregate are enforced internally, without relying on inconsistent external operations.
3. **Encapsulation**: Entities inside the aggregate cannot be manipulated directly from outside; they must be accessed through the aggregate root.

## When to Use Aggregates?

- When multiple entities need to be handled **atomically** (e.g., an **Order** and its **Order Items**).
- When it is necessary to **ensure consistency** within a set of related entities.
- When defining an **explicit boundary** is important to avoid unnecessary dependencies between entities.

## Example

```ts
// domain/aggregates/order.ts
import { OrderItem } from "../entities/orderItem";
import { Customer } from "../entities/customer";

type Order = {
  id: string;
  customer: Customer;
  items: OrderItem[];
  total(): number;
  addItem(item: OrderItem): void;
};

export default Order;
```

---

# 🌐 Portuguese / Português

# Agregados

Agregados representam **clusters de objetos de domínio** que são tratados como uma única unidade. Eles impõem **invariantes** e garantem consistência dentro de seus limites. A **raiz do agregado** é a entidade principal responsável por manter a integridade do agregado e coordenar operações.

Agregados devem ser projetados para minimizar dependências e garantir que todas as operações mantenham um estado válido.

## Características dos Agregados

1. **Raiz Única (Raiz do Agregado)**: Apenas a raiz pode ser referenciada diretamente por outras partes do sistema.
2. **Consistência Interna**: Todas as regras de negócio dentro do agregado são aplicadas internamente, sem depender de operações externas inconsistentes.
3. **Encapsulamento**: Entidades dentro do agregado não podem ser manipuladas diretamente de fora; elas devem ser acessadas através da raiz do agregado.

## Quando Usar Agregados?

- Quando múltiplas entidades precisam ser tratadas **atomicamente** (por exemplo, um **Pedido** e seus **Itens de Pedido**).
- Quando é necessário **garantir consistência** dentro de um conjunto de entidades relacionadas.
- Quando definir um **limite explícito** é importante para evitar dependências desnecessárias entre entidades.

## Exemplo

```ts
// domain/aggregates/order.ts
import { OrderItem } from "../entities/orderItem";
import { Customer } from "../entities/customer";

type Order = {
  id: string;
  customer: Customer;
  items: OrderItem[];
  total(): number;
  addItem(item: OrderItem): void;
};

export default Order;
```
