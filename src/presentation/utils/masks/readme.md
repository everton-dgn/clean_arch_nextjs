# masks

Masks are **functions that apply input formatting in real-time**, typically used in form inputs. They ensure that user input follows a specific pattern.

**Masks are used only in the presentation layer** to control user input formatting.

## Example

```ts
// utils/masks/maskPhone.ts
const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};
```

---

# 🌐 Portuguese / Português

# masks

Masks são **funções que aplicam formatação de entrada em tempo real**, tipicamente usadas em campos de formulários. Elas garantem que a entrada do usuário siga um padrão específico.

**Masks são usadas apenas na camada de apresentação** para controlar a formatação da entrada do usuário.

## Exemplo

```ts
// utils/masks/maskPhone.ts
const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};
```
