# Services

The **Application Service** handles **orchestration and application-specific rules**, ensuring that business rules remain isolated within the domain. It:

- **Calls domain services** and repositories.
- **Interacts with external APIs** and third-party gateways.
- **Formats data** for delivery to the front-end or other layers.

## Example

```ts
class CalculateShippingApplicationService {
  constructor(private readonly shippingCalculationService: ShippingCalculationService) {}

  async execute(input: { origin: string; destination: string; weight: number }) {
    const shipping = this.shippingCalculationService.calculate(input.origin, input.destination, input.weight)
    return { carrier: shipping.carrier, cost: shipping.cost.value, deliveryTime: shipping.deliveryTime }
  }
}
```

---

# 🌐 Portuguese / Português

# Serviços

O **Serviço de Aplicação** lida com **orquestração e regras específicas da aplicação**, garantindo que as regras de negócio permaneçam isoladas dentro do domínio. Ele:

- **Chama serviços de domínio** e repositórios.
- **Interage com APIs externas** e gateways de terceiros.
- **Formata dados** para entrega ao front-end ou outras camadas.

## Exemplo

```ts
class CalculateShippingApplicationService {
  constructor(private readonly shippingCalculationService: ShippingCalculationService) {}

  async execute(input: { origin: string; destination: string; weight: number }) {
    const shipping = this.shippingCalculationService.calculate(input.origin, input.destination, input.weight)
    return { carrier: shipping.carrier, cost: shipping.cost.value, deliveryTime: shipping.deliveryTime }
  }
}
```
