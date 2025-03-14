# adapters

Bridges different implementations, allowing for seamless integrations with external services, APIs, third-party libraries, or internal abstractions.

## Example

```ts
// core/adapters/httpClient.ts
import axios from 'axios'

export const httpClient = {
  get: async (url: string) => axios.get(url).then(res => res.data),
}
```
