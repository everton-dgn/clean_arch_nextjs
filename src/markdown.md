# Project Structure

This project follows an adaptation of **Clean Architecture** with functional paradigms, using Next.js 15 and TypeScript. The structure is divided into clear layers to separate responsibilities, facilitate maintenance, and ensure testability. Here is an overview:

- **`src/@types`**: Global type definitions.
- **`src/app`**: Next.js routes and pages (Frameworks/Drivers).
- **`src/application`**: Application logic orchestration.
- **`src/core`**: Reusable utilities and tools.
- **`src/domain`**: Business rules and core logic.
- **`src/infra`**: Infrastructure implementations (databases, APIs).
- **`src/presentation`**: UI and presentation layer.
- **`src/tests`**: Automated tests.  
