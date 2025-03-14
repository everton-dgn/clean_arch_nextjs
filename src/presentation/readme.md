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
