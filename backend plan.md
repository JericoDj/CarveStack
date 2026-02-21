# CarveStack Backend Plan (Express.js)

## 1) Goal
Build a production-ready backend for:
- Auth (Google sign-in via Firebase)
- Projects
- Subscription billing
- Per-project AI model selection (frontend/backend/fullstack)

This plan starts with a **modular monolith** in Express.js so you can ship quickly and scale later.

## 2) Recommended V1 Stack
- Runtime: Node.js 20+
- Language: TypeScript
- Framework: Express.js
- Database: PostgreSQL
- ORM: Prisma
- Auth provider: Firebase Authentication (Google)
- Billing: Stripe Subscriptions
- Cache/queue (optional in V1): Redis
- Validation: Zod
- Logging: Pino
- Security: Helmet, CORS, rate limiting
- Testing: Vitest + Supertest
- Docs: OpenAPI (Swagger)
- Deployment: Render or Railway (fastest to launch)

## 3) Architecture Choice
- Pattern: Layered modular monolith
- Modules:
  - `auth`
  - `users`
  - `projects`
  - `project-models`
  - `subscriptions`
  - `usage`
  - `admin`
- Layers per module:
  - Route -> Controller -> Service -> Repository/Prisma
- Why this first:
  - Fast implementation
  - Clear boundaries
  - Easy future extraction to microservices if needed

## 4) Core Domain Model (V1)
- `User`
  - id, email, name, avatarUrl, firebaseUid, createdAt
- `Workspace` (optional now, recommended soon)
  - id, name, ownerUserId
- `Project`
  - id, name, description, ownerUserId/workspaceId, status, createdAt
- `ProjectMember`
  - id, projectId, userId, role (`owner|editor|viewer`)
- `AiModelCatalog`
  - id, provider (`openai|anthropic|google|xai|custom`)
  - modelKey (ex: `gpt-4.1`, `claude-3-7-sonnet`)
  - modelType (`frontend|backend|fullstack|general`)
  - isActive
- `ProjectModelSelection`
  - id, projectId, modelType, modelCatalogId
- `Subscription`
  - id, userId/workspaceId, stripeCustomerId, stripeSubscriptionId
  - plan (`free|pro|team`), status, currentPeriodEnd
- `UsageEvent`
  - id, userId, projectId, action, units, createdAt

## 5) Auth Design (Firebase + Express)
1. Frontend signs in with Firebase Google provider.
2. Frontend sends Firebase ID token to backend (`Authorization: Bearer <idToken>`).
3. Backend verifies token with Firebase Admin SDK.
4. Backend upserts local `User` record by `firebaseUid`.
5. Backend authorizes access via local roles + project membership.

Endpoints:
- `POST /v1/auth/session` -> verify token + return user profile
- `GET /v1/auth/me` -> current user
- `POST /v1/auth/logout` (optional; client-side Firebase logout usually enough)

## 6) Projects + AI Model Selection (V1 API)
Projects:
- `POST /v1/projects`
- `GET /v1/projects`
- `GET /v1/projects/:id`
- `PATCH /v1/projects/:id`
- `DELETE /v1/projects/:id`
- `POST /v1/projects/:id/members`
- `DELETE /v1/projects/:id/members/:userId`

Model catalog:
- `GET /v1/models?type=frontend|backend|fullstack`
- `POST /v1/models` (admin only)
- `PATCH /v1/models/:id` (admin only)

Per-project selections:
- `GET /v1/projects/:id/model-selections`
- `PUT /v1/projects/:id/model-selections`
  - body example:
    - frontend -> selected model
    - backend -> selected model
    - fullstack -> selected model

## 7) Subscription/Billing (Stripe)
Endpoints:
- `POST /v1/billing/checkout-session`
- `POST /v1/billing/portal-session`
- `POST /v1/billing/webhook` (raw body)
- `GET /v1/billing/subscription`

Webhook events to handle:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`

Entitlements:
- Free: limited projects + limited usage
- Pro: increased limits
- Team: workspace/members + highest limits

Enforcement:
- Middleware checks `Subscription.plan` + usage before protected actions.

## 8) Security + Compliance Baseline
- Verify Firebase token on all protected routes
- RBAC on project and admin routes
- Input validation with Zod
- Helmet headers + strict CORS
- Rate limiting on auth + billing endpoints
- Store secrets in environment manager
- Audit logs for billing and role changes

## 9) Observability + Quality
- Structured logs with request IDs
- Error monitoring (Sentry optional in V1)
- Health endpoints:
  - `GET /health/live`
  - `GET /health/ready` (DB + dependencies)
- Tests:
  - Unit tests for services
  - Integration tests for auth/projects/billing webhooks
- API docs:
  - OpenAPI spec + Swagger UI

## 10) Suggested Folder Structure
```txt
backend/
  src/
    app.ts
    server.ts
    config/
    middleware/
    modules/
      auth/
      users/
      projects/
      project-models/
      subscriptions/
      usage/
      admin/
    lib/
      prisma.ts
      firebase-admin.ts
      stripe.ts
    types/
  prisma/
    schema.prisma
    migrations/
  tests/
```

## 11) Implementation Phases

### Phase 0 - Bootstrap (1 day)
- Initialize `backend/` with TS + Express + ESLint + Prettier
- Add env config, logger, error handler, health checks
- Add PostgreSQL + Prisma setup

### Phase 1 - Auth + Users (1-2 days)
- Configure Firebase Admin SDK
- Build auth middleware + `/auth/session` + `/auth/me`
- Auto-create user record on first login

### Phase 2 - Projects + Roles (2-3 days)
- CRUD for projects
- Membership and role checks
- Project list/detail endpoints with pagination

### Phase 3 - AI Model Catalog + Project Selections (1-2 days)
- Admin-managed model catalog
- Per-project model selection for:
  - frontend
  - backend
  - fullstack
- Validation that selected models are active + valid type

### Phase 4 - Subscriptions (2-3 days)
- Stripe checkout + customer portal
- Webhook processing with signature verification
- Plan-based feature gating (project limits, usage caps)

### Phase 5 - Hardening (2 days)
- Rate limits, stricter CORS, audit logs
- Integration tests for key user journeys
- OpenAPI docs and deployment pipeline

## 12) Environment Variables (Initial)
```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://...

FIREBASE_PROJECT_ID=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_PRIVATE_KEY=...

STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
STRIPE_PRICE_PRO=...
STRIPE_PRICE_TEAM=...

JWT_INTERNAL_SECRET=optional_if_needed
CORS_ORIGIN=http://localhost:5173
```

## 13) V1 Definition of Done
- Google sign-in works end-to-end (Firebase -> backend verification)
- Authenticated users can create/manage projects
- Each project can save model selections for frontend/backend/fullstack
- Stripe subscription lifecycle updates entitlements correctly
- API is documented, tested for critical paths, and deployed

## 14) Immediate Next Build Steps
1. Create `/backend` Express + TypeScript app scaffold.
2. Add Prisma schema for `User`, `Project`, `ProjectMember`, `AiModelCatalog`, `ProjectModelSelection`, `Subscription`.
3. Implement Firebase auth middleware and `/v1/auth/*` endpoints.
4. Implement `/v1/projects/*` plus model selection endpoints.
5. Implement Stripe checkout + webhook and entitlement middleware.
