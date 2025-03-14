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
