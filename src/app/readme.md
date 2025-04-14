# app

This directory represents the **Frameworks/Drivers** layer in Next.js, where we define routes, pages, and layouts. It consumes the internal layers (`domain`, `application`) to render the UI.

## Subdirectories

- **`(home)`**: Route group for the home page.
  - **`layout.tsx`**: Home-specific layout.
  - **`loading.tsx`**: Suspense loading component.
  - **`page.tsx`**: Server-rendered main page.
  - **`styles.module.css`**: Local styles.
  - **`types.ts`**: Home-specific types.
- **`api`**: API routes (e.g., `/api/example`).
- **`error.tsx`**: Local error handling.
- **`global-error.tsx`**: Global error handling.
- **`layout.tsx`**: Root application layout.
- **`not-found.tsx`**: Custom 404 page.

## Example

```tsx
// app/(home)/page.tsx
import { listProducts } from "../../domain/useCases/listProducts";
import { productRepositoryAdapter } from "../../infra/adapters/productRepository";

export default async function HomePage() {
  const products = await listProducts(productRepositoryAdapter());
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}
```

---

# 🌐 Portuguese / Português

# app

Este diretório representa a camada de **Frameworks/Drivers** no Next.js, onde definimos rotas, páginas e layouts. Ele consome as camadas internas (`domain`, `application`) para renderizar a UI.

## Subdiretórios

- **`(home)`**: Grupo de rotas para a página inicial.
  - **`layout.tsx`**: Layout específico da home.
  - **`loading.tsx`**: Componente de carregamento com Suspense.
  - **`page.tsx`**: Página principal renderizada no servidor.
  - **`styles.module.css`**: Estilos locais.
  - **`types.ts`**: Tipos específicos da home.
- **`api`**: Rotas de API (ex: `/api/example`).
- **`error.tsx`**: Tratamento de erros local.
- **`global-error.tsx`**: Tratamento de erros global.
- **`layout.tsx`**: Layout raiz da aplicação.
- **`not-found.tsx`**: Página 404 personalizada.

## Exemplo

```tsx
// app/(home)/page.tsx
import { listProducts } from "../../domain/useCases/listProducts";
import { productRepositoryAdapter } from "../../infra/adapters/productRepository";

export default async function HomePage() {
  const products = await listProducts(productRepositoryAdapter());
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}
```
