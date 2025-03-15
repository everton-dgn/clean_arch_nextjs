# entities

An Entity is a representation of a real-world concept or object within the application’s domain. It contains attributes and behaviors that are relevant to the business context.

Entities have a unique identity, meaning that two objects with the same values can still be different if they have distinct identities. Additionally, they should encapsulate business rules that are directly related to the object they represent.

For example, in a sales system, a Product can be an entity because it has a unique ID, a name, a price, and business rules like applying discounts.

## Example

```ts
// domain/entities/product.ts
interface Product {
  id: string;
  name: string;
  price: number;
}
```

```ts
// domain/entities/product.ts
const createProduct = (id: string, name: string, price: number) => ({
  id,
  name,
  price,
});
```
