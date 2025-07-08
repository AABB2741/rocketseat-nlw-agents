# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

- **Monorepo:** Gerenciado com [Turborepo](https://turbo.build/)
- **Gerenciador de pacotes:** [pnpm](https://pnpm.io/)
- **Backend:**
  - [Fastify](https://fastify.dev/) — framework web para Node.js
  - [drizzle-orm](https://orm.drizzle.team/) — ORM para TypeScript
  - [drizzle-kit](https://orm.drizzle.team/docs/overview/drizzle-kit) — ferramenta de migrations
  - [zod](https://zod.dev/) — validação de schemas
  - [postgres](https://github.com/porsager/postgres) — driver PostgreSQL
- **Frontend:**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/) — bundler e dev server
  - [Tailwind CSS](https://tailwindcss.com/) — utilitários de CSS
  - [@tanstack/react-query](https://tanstack.com/query/latest) — gerenciamento de dados assíncronos
  - [@tanstack/react-router](https://tanstack.com/router/latest) — roteamento
- **Lint:** [Biome](https://biomejs.dev/)

## Padrões de Projeto

- Estrutura monorepo (apps/web e apps/server)
- Backend orientado a rotas e validação com Zod
- Frontend com componentes reutilizáveis e hooks
- Migrations e schema versionados com Drizzle ORM

## Setup e Configuração

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/AABB2741/rocketseat-nlw-agents.git
   cd rocketseat-nlw-agents
   ```
2. **Instale as dependências:**
   ```sh
   pnpm install
   ```
3. **Configure o banco de dados:**
   - O projeto utiliza PostgreSQL (pode ser iniciado via Docker):
     ```sh
     docker compose up -d
     ```
   - Configure a variável `DATABASE_URL` no arquivo `.env` em `apps/server`.
4. **Rode as migrations:**
   ```sh
   cd apps/server
   pnpm drizzle-kit migrate # ou comando equivalente para aplicar migrations
   ```
5. **Inicie o backend:**
   ```sh
   pnpm --filter @nlw-agents/server dev
   ```
6. **Inicie o frontend:**
   ```sh
   pnpm --filter @nlw-agents/web dev
   ```

---

> Projeto NLW Agents — Rocketseat
