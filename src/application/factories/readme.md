# factories

📌 Responsible for creating instances of services/repositories.

✅ Facilitates swapping implementations without modifying the `useCase` code.

## Example

```ts
// application/factories/userRepositoryFactory.ts
import { httpUserRepository } from "infra/repositories/httpUserRepository";
import { cacheUserRepository } from "infra/repositories/cacheUserRepository";

export const userRepositoryFactory = () => {
  return {
    getUser: async (userId: string) => {
      const cachedUser = await cacheUserRepository.getUser(userId);
      if (cachedUser) return cachedUser;

      const userFromApi = await httpUserRepository.getUser(userId);
      if (userFromApi) await cacheUserRepository.saveUser(userFromApi);

      return userFromApi;
    }
  };
};
```

---

# 🌐 Portuguese / Português

# factories

📌 Responsável por criar instâncias de serviços/repositórios.

✅ Facilita a troca de implementações sem modificar o código do `useCase`.

## Exemplo

```ts
// application/factories/userRepositoryFactory.ts
import { httpUserRepository } from "infra/repositories/httpUserRepository";
import { cacheUserRepository } from "infra/repositories/cacheUserRepository";

export const userRepositoryFactory = () => {
  return {
    getUser: async (userId: string) => {
      const cachedUser = await cacheUserRepository.getUser(userId);
      if (cachedUser) return cachedUser;

      const userFromApi = await httpUserRepository.getUser(userId);
      if (userFromApi) await cacheUserRepository.saveUser(userFromApi);

      return userFromApi;
    }
  };
};
```
