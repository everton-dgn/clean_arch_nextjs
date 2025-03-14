# API

**`src/app/api`**: Server-side API routes using Next.js (handlers for backend logic and data processing).

## Example

```ts
// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { listProducts } from "domain/useCases/listProducts";
import { productRepositoryAdapter } from "infra/adapters/productRepository";

export async function GET() {
  try {
    const products = await listProducts(productRepositoryAdapter());
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
```
