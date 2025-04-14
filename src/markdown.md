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

---

# 🌐 Portuguese / Português

# Estrutura do Projeto

Este projeto segue uma adaptação da **Arquitetura Limpa** com paradigmas funcionais, utilizando Next.js 15 e TypeScript. A estrutura é dividida em camadas claras para separar responsabilidades, facilitar a manutenção e garantir a testabilidade. Aqui está uma visão geral:

- **`src/@types`**: Definições de tipos globais.
- **`src/app`**: Rotas e páginas do Next.js (Frameworks/Drivers).
- **`src/application`**: Orquestração da lógica da aplicação.
- **`src/core`**: Utilitários e ferramentas reutilizáveis.
- **`src/domain`**: Regras de negócio e lógica central.
- **`src/infra`**: Implementações de infraestrutura (bancos de dados, APIs).
- **`src/presentation`**: Camada de UI e apresentação.
- **`src/tests`**: Testes automatizados.
