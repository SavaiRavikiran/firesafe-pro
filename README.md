# FireSafe Pro

India-centric remote fire audit platform monorepo.

## Stack

- `apps/mobile`: React Native + Expo starter shell
- `apps/web`: Next.js 14 admin starter shell
- `packages/api`: Express + Prisma REST API baseline
- `packages/shared`: Shared Zod validators and constants

## Quick Start

1. Install dependencies:
   - `pnpm install`
2. Configure env:
   - `cp .env.example .env`
   - fill `DATABASE_URL`, JWT secrets, and service credentials
3. Generate Prisma client:
   - `pnpm db:generate`
4. Run migrations:
   - `pnpm db:migrate`
5. Seed admin:
   - `pnpm db:seed`
6. Start all apps:
   - `pnpm dev`

## Seed Data

Seed JSONs are in `packages/api/prisma/seed-data`:

- `fire-stations-top-100.json`
- `questionnaire-v1.json`
- `dealers.json`
- `subscription-plans.json`

## Phase 1 Included

- Auth endpoints (`register`, `login`, `refresh`)
- Premise CRUD foundation (`list`, `create`)
- Audit foundation (`list`, `create`, `update`, `submit`)
- Prisma schema for core entities
- Mobile/web bootstrap pages for immediate extension
# firesafe-pro
