# presentation

The **presentation** layer is responsible for the UI and user interactions. This is where components, styles, and hooks are structured.

## Subdirectories

- **`assets`**: Static resources (e.g., images, SVGs).
- **`components`**: React components organized by Atomic Design.
  - **`atoms`**: Basic components (e.g., `Button`).
  - **`molecules`**: Combinations of atoms.
  - **`organisms`**: Complex components (e.g., `ErrorFallback`).
  - **`providers`**: Contexts and providers (e.g., `MainProvider`).
  - **`templates`**: Reusable layouts.
- **`hooks`**: Custom hooks (e.g., `useCount`).
- **`store`**: State management (e.g., Zustand, Redux).
- **`theme`**: Global styles and themes.
- **`utils`**: UI-specific utilities.
- **`validations`**: Generic validations (e.g., forms).

## Example

```tsx
// presentation/components/atoms/Button/index.tsx
import styles from "./styles.module.css";

type ButtonProps = { label: string; onClick: () => void };

export const Button = ({ label, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);
```

---

# 🌐 Portuguese / Português

# presentation

A camada de **apresentação** é responsável pela UI e interações do usuário. É aqui que os componentes, estilos e hooks são estruturados.

## Subdiretórios

- **`assets`**: Recursos estáticos (ex: imagens, SVGs).
- **`components`**: Componentes React organizados pelo Atomic Design.
  - **`atoms`**: Componentes básicos (ex: `Button`).
  - **`molecules`**: Combinações de átomos.
  - **`organisms`**: Componentes complexos (ex: `ErrorFallback`).
  - **`providers`**: Contextos e provedores (ex: `MainProvider`).
  - **`templates`**: Layouts reutilizáveis.
- **`hooks`**: Hooks personalizados (ex: `useCount`).
- **`store`**: Gerenciamento de estado (ex: Zustand, Redux).
- **`theme`**: Estilos globais e temas.
- **`utils`**: Utilitários específicos para UI.
- **`validations`**: Validações genéricas (ex: formulários).

## Exemplo

```tsx
// presentation/components/atoms/Button/index.tsx
import styles from "./styles.module.css";

type ButtonProps = { label: string; onClick: () => void };

export const Button = ({ label, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);
```
