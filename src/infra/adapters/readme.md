# adapters

Adapters act as **bridges** between the **domain** and external systems, such as
APIs, databases, or message queues.

They **convert external data formats** into structures that the domain
understands, ensuring that the **core logic remains independent of
infrastructure details**.

## Example

```ts
// infrastructure/adapters/indexedDBAdapter.ts
import { Product } from "domain/entities/product";

const DB_NAME = "productDB";
const STORE_NAME = "products";
const VERSION = 1;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {keyPath: "id"});
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const IndexedDBAdapter = {
  saveProduct: async (product: Product): Promise<void> => {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(product);
  },

  getAllProducts: async (): Promise<Product[]> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result as Product[]);
      request.onerror = () => reject(request.error);
    });
  },
};
```
