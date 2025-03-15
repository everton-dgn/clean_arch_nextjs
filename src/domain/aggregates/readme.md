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
