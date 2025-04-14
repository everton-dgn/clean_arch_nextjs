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

---

# 🌐 Portuguese / Português

# Objetos de Valor

Objetos de valor são objetos que representam **conceitos de domínio** que **não possuem identidade própria** — o que significa que não importa **quem** eles são, mas **o que** eles são. Diferentemente das entidades (que possuem um ID único e um ciclo de vida), objetos de valor são **imutáveis** e definidos por seus **atributos**. Se dois objetos de valor têm os mesmos valores, eles são considerados **iguais**.

## Exemplo Clássico

- **Entidade**: Um `Usuário` com ID `123`. Mesmo que dois usuários tenham o mesmo nome, eles são diferentes por causa de seu ID único.
- **Objeto de Valor**: Um `Endereço` com rua, número e cidade. Se dois endereços têm os mesmos valores, eles são **o mesmo endereço**.

## Características Principais

1. **Imutabilidade**: Uma vez criado, um objeto de valor **não muda**. Se for necessária uma modificação, um novo objeto é criado.
2. **Igualdade por Valor**: Objetos de valor são comparados por seus **atributos**, não por referência ou ID.
3. **Sem Identidade**: Eles não possuem um "ID" para rastreamento; apenas seus valores importam.
4. **Comportamento Rico**: Objetos de valor podem conter **métodos** que encapsulam **lógica de domínio**.

## Quando Usar?

Use objetos de valor quando você tem um conceito em seu domínio que:

- É **definido por seus atributos**, não por um identificador único.
- Faz sentido ser **imutável** para evitar inconsistências.
- Possui **regras de negócio ou lógica de validação** que devem ser encapsuladas.

## Exemplos do Mundo Real

- **Dinheiro** (valor + moeda): Não faz sentido mudar `10 USD` para `15 USD`; em vez disso, você cria um novo objeto `Dinheiro`.
- **Intervalo de Datas** (início + fim): Usado para representar períodos com lógica como "Há sobreposição?".
- **Endereço de Email**: Uma `string` com **validação incorporada** (por exemplo, deve conter "@").

**Não use objetos de valor para tudo!**

Se o conceito tem um **ciclo de vida** ou **precisa ser rastreado individualmente** (como um `Pedido` ou `Cliente`), deve ser uma **entidade**, não um objeto de valor.

## Exemplo

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
  return Object.freeze({ amount, currency }); // Imutabilidade
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
