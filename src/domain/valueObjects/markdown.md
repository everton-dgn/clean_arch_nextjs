# Value Objects

Value objects are objects that represent **domain concepts** that **do not have their own identity**—meaning that it doesn’t matter **who** they are, but **what** they are. Unlike entities (which have a unique ID and a lifecycle), value objects are **immutable** and defined by their **attributes**. If two value objects have the same values, they are considered **equal**.

## Classic Example

- **Entity**: A `User` with ID `123`. Even if two users have the same name, they are different because of their unique ID.
- **Value Object**: An `Address` with street, number, and city. If two addresses have the same values, they are **the same address**.

## Key Characteristics

1. **Immutability**: Once created, a value object **does not change**. If modification is needed, a new one is created.
2. **Equality by Value**: Value objects are compared by their **attributes**, not by reference or ID.
3. **No Identity**: They do not have an "ID" for tracking; only their values matter.
4. **Rich Behavior**: Value objects can contain **methods** that encapsulate **domain logic**.

## When to Use?

Use value objects when you have a concept in your domain that:

- Is **defined by its attributes**, not by a unique identifier.
- Makes sense to be **immutable** to prevent inconsistencies.
- Has **business rules or validation logic** that should be encapsulated.

## Real-World Examples

- **Money** (amount + currency): It does not make sense to change `10 USD` to `15 USD`; instead, you create a new `Money` object.
- **DateRange** (start + end): Used to represent periods with logic such as "Does it overlap?".
- **EmailAddress**: A `string` with **built-in validation** (e.g., must contain "@").

**Do not use value objects for everything!**

If the concept has a **lifecycle** or **needs to be individually tracked** (such as an `Order` or `Customer`), it should be an **entity**, not a value object.

## Example

```ts
// src/domain/valueObjects/money.ts
export type Money = {
  amount: number;
  currency: string;
};

export const createMoney = (amount: number, currency: string): Money => {
  if (!Number.isFinite(amount)) throw new Error("Amount must be a valid number");
  if (amount < 0) throw new Error("Amount cannot be negative");
  if (!["BRL", "USD", "EUR"].includes(currency)) throw new Error("Invalid currency");
  return Object.freeze({ amount, currency }); // Immutability
};

export const addMoney = (m1: Money, m2: Money): Money => {
  if (m1.currency !== m2.currency) throw new Error("Currencies must match");
  return createMoney(m1.amount + m2.amount, m1.currency);
};

export const subtractMoney = (m1: Money, m2: Money): Money => {
  if (m1.currency !== m2.currency) throw new Error("Currencies must match");
  const result = m1.amount - m2.amount;
  if (result < 0) throw new Error("Result cannot be negative");
  return createMoney(result, m1.currency);
};

export const multiplyMoney = (m: Money, factor: number): Money => {
  if (factor < 0) throw new Error("Factor cannot be negative");
  return createMoney(m.amount * factor, m.currency);
};

export const moneyEquals = (m1: Money, m2: Money): boolean => {
  return m1.amount === m2.amount && m1.currency === m2.currency;
};

export const moneyToString = (m: Money): string => {
  return `${m.currency} ${m.amount.toFixed(2)}`;
};

const price1 = createMoney(10.50, "BRL");
const price2 = createMoney(5.25, "BRL");
const total = addMoney(price1, price2);
console.log(moneyToString(total)); // "BRL 15.75"
const discount = multiplyMoney(total, 0.9);
console.log(moneyToString(discount)); // "BRL 14.17"
```
