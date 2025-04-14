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

---

# 🌐 Portuguese / Português

# DTOs (Objetos de Transferência de Dados)

DTOs (Objetos de Transferência de Dados) são **estruturas usadas para transportar dados** entre diferentes camadas de uma aplicação. Eles ajudam a definir **contratos claros** para dados de entrada e saída, garantindo a separação entre camadas e melhorando a manutenibilidade.

DTOs devem ser usados **apenas para transmissão de dados**, sem lógica de negócio.

## Quando Usar DTOs?

- Para **transferir dados** entre camadas da aplicação (ex: API ↔ Caso de Uso ↔ Repositório).
- Para **evitar expor entidades internas** para camadas externas.
- Para **garantir formatos de dados consistentes e validados**.
- Para **converter dados** entre diferentes representações (ex: modelo de banco de dados para resposta de API).

## DTOs em Diferentes Camadas

### Camada de Aplicação (Casos de Uso / Serviços)

DTOs são comumente usados em **casos de uso** e **serviços** para padronizar dados de entrada e saída.

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
