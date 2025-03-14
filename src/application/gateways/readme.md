Você deve usar gateways quando:

1.	Os dados podem vir de diferentes fontes (cache, IndexedDB, API REST, GraphQL, WebSockets, etc.).
2.	Precisa aplicar lógica antes de acessar o repositório (ex: tentar o cache antes da API).
3.	Quer manter os useCases independentes de detalhes de infraestrutura, facilitando mudanças.
4.	Precisa combinar múltiplos repositórios em uma única interface.


ex:

```typescript
import { getUserFromCache, saveUserToCache } from "@/infra/repositories/cacheUserRepository"
import { getUserFromApi } from "@/infra/repositories/httpUserRepository"

export async function getUser(userId: string) {
  const cachedUser = await getUserFromCache(userId)
  if (cachedUser) return cachedUser

  const userFromApi = await getUserFromApi(userId)
  if (userFromApi) await saveUserToCache(userFromApi)

  return userFromApi
}
```
