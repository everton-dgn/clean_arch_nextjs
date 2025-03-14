# `gateways`

📌 Interface between the application and external data sources, abstracting implementation details.

**You should use gateways when:**
1. Data can come from different sources (cache, IndexedDB, REST API, GraphQL, WebSockets, etc.).
2. You need to apply logic before accessing the repository (e.g., try cache before the API).
3. You want to keep `useCases` independent of infrastructure details, making changes easier.
4. You need to combine multiple repositories into a single interface.

## Example

```ts
// application/gateways/userGateway.ts
import { getUserFromCache, saveUserToCache } from "infra/repositories/cacheUserRepository";
import { getUserFromApi } from "infra/repositories/httpUserRepository";

export async function getUser(userId: string) {
  const cachedUser = await getUserFromCache(userId);
  if (cachedUser) return cachedUser;

  const userFromApi = await getUserFromApi(userId);
  if (userFromApi) await saveUserToCache(userFromApi);

  return userFromApi;
}
```
