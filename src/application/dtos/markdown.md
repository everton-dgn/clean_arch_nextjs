# DTOs (Data Transfer Objects)

DTOs (Data Transfer Objects) are **structures used to transport data** between different layers of an application. They help to define **clear contracts** for input and output data, ensuring separation between layers and improving maintainability.

DTOs should be used **only for data transmission**, without business logic.

## When to Use DTOs?

- To **transfer data** between application layers (e.g., API ↔ Use Case ↔ Repository).
- To **avoid exposing internal entities** to external layers.
- To **ensure consistent and validated data formats**.
- To **convert data** between different representations (e.g., database model to API response).

## DTOs in Different Layers

### Application Layer (Use Cases / Services)

DTOs are commonly used in **use cases** and **services** to standardize input and output data.

```ts
interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}
```

```ts
import { User } from "../domain/entities/User";

class UserFactory {
  static create(dto: CreateUserDTO): User {
    return new User(dto.name, dto.email, dto.password);
  }
}
```
