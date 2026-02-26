<p align="center">
  <img src="public/vite.svg" alt="CarveStack Logo" width="64" height="64" />
</p>

<h1 align="center">CarveStack</h1>

<p align="center">
  <strong>AI-Powered Project Scaffolding &amp; Code Generation Platform</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#license">License</a>
</p>

---

## Overview

**CarveStack** is an AI-powered project scaffolding platform that enables developers to visually configure full-stack, backend, web, or mobile applications — then generate production-ready code structures powered by AI models (OpenAI, Anthropic, Google AI, and more).

Users select their desired tech stack (language, framework, architecture pattern, database, deployment strategy) and pick from **147+ feature modules** spanning commerce, social, AI/ML, security, admin, and more. CarveStack generates the complete project scaffold, ready to build upon.

---

## Features

### ✅ Implemented (Live)

| Feature | Description |
|---------|-------------|
| **Landing Page** | Animated hero section with gradient backgrounds, feature highlights, and CTAs |
| **Project Builder** | Multi-step wizard for configuring Backend, Web, Mobile, or Fullstack projects |
| **Feature Composer** | Select from 147+ categorized feature modules with search & filtering |
| **Config System** | Comprehensive options for languages, frameworks, architectures, styling, state management, deployment |
| **How It Works** | Step-by-step walkthrough of the CarveStack workflow |
| **Pricing Page** | Tiered pricing plans (Free / Pro / Team) with feature comparison |
| **Features Page** | Detailed showcase of platform capabilities |
| **Responsive UI** | Fully responsive design with dark theme, glassmorphism, and smooth animations |
| **Navigation** | Top navbar with mobile drawer, footer, and route-based navigation |
| **Prompt Generator** | Utility to generate AI-ready build prompts from project configuration |
| **Preview Tree** | Visual file/folder structure preview of the configured project |

### 🚧 In Progress

| Feature | Status | Description |
|---------|--------|-------------|
| **Authentication** | 🔄 In Progress | Firebase Google sign-in with session management |
| **Auth Dialog** | 🔄 In Progress | Modal-based sign-in/sign-up UI component (UI built, Firebase integration pending) |
| **Dashboard** | 🔄 In Progress | User dashboard with project list, analytics overview, and quick actions |
| **Subscription & Billing** | 🔄 In Progress | Stripe integration for Free/Pro/Team plans with entitlement gating |
| **AI Code Generation** | 🔄 In Progress | AI-powered code scaffold generation using OpenAI, Anthropic, and Google models |
| **Database Integration** | 🔄 In Progress | PostgreSQL with Prisma ORM for persistent project & user storage |
| **Backend API** | 🔄 In Progress | Express.js + TypeScript modular monolith (auth, projects, billing, AI models) |
| **Business UI Components** | 🔄 In Progress | Admin panels, analytics dashboards, and management interfaces |

### 🗓️ Planned

| Feature | Description |
|---------|-------------|
| **Team Workspaces** | Multi-user workspaces with roles & permissions |
| **Project Templates** | Pre-configured starter templates for common app types |
| **Export & Download** | Download generated projects as ZIP archives |
| **Version History** | Track and restore previous project configurations |
| **Plugin System** | Community-contributed feature modules and templates |
| **Real-Time Collaboration** | Live co-editing of project configurations |
| **CI/CD Integration** | Auto-deploy generated projects to hosting platforms |
| **Custom AI Models** | Fine-tuned models for framework-specific code generation |
| **Usage Analytics** | Per-user and per-project usage tracking and limits |
| **Admin Panel** | Platform administration for users, content, and system settings |

---

## Tech Stack

### Frontend (Current)

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev) | 19.2 | UI framework |
| [Vite](https://vite.dev) | 7.3 | Build tool & dev server |
| [TailwindCSS](https://tailwindcss.com) | 4.2 | Utility-first styling |
| [React Router](https://reactrouter.com) | 7.13 | Client-side routing |
| [Google Material Icons](https://fonts.google.com/icons) | – | Iconography |
| [Manrope](https://fonts.google.com/specimen/Manrope) | – | Display typography |

### Backend (Planned)

| Technology | Purpose |
|-----------|---------|
| Node.js 20+ / TypeScript | Runtime & language |
| Express.js | HTTP framework |
| PostgreSQL | Primary database |
| Prisma | ORM & migrations |
| Firebase Admin SDK | Auth verification |
| Stripe | Subscription billing |
| Redis | Cache & queues (optional V1) |
| Zod | Input validation |
| Pino | Structured logging |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **yarn** / **pnpm**
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/CarveStack.git
cd CarveStack

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration values

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Environment Variables

Copy `.env.example` to `.env` and configure the following:

### Frontend Variables (Vite)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_APP_NAME` | ✅ | Application display name |
| `VITE_APP_URL` | ✅ | Frontend URL |
| `VITE_APP_ENV` | ✅ | Environment (`development` / `production`) |
| `VITE_FIREBASE_API_KEY` | 🔄 | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | 🔄 | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | 🔄 | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | 🔄 | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | 🔄 | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | 🔄 | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | ❌ | Firebase analytics measurement ID |
| `VITE_API_BASE_URL` | 🔄 | Backend API base URL |
| `VITE_STRIPE_PUBLISHABLE_KEY` | 🔄 | Stripe publishable key (client-side) |
| `VITE_OPENAI_API_KEY` | 🔄 | OpenAI API key for code generation |
| `VITE_ANTHROPIC_API_KEY` | 🔄 | Anthropic API key |
| `VITE_GOOGLE_AI_API_KEY` | 🔄 | Google AI API key |
| `VITE_ENABLE_AI_GENERATION` | ❌ | Feature flag: enable AI generation |
| `VITE_ENABLE_SUBSCRIPTIONS` | ❌ | Feature flag: enable billing |
| `VITE_ENABLE_ANALYTICS` | ❌ | Feature flag: enable analytics |

> **Legend:** ✅ Required now · 🔄 Required when feature is active · ❌ Optional

---

## Project Structure

```
CarveStack/
├── public/                     # Static assets
│   └── vite.svg                # App icon
├── src/
│   ├── assets/                 # Images, logos, and media
│   ├── components/             # Reusable UI components
│   │   ├── AppNavbar.jsx       # Top navigation bar (desktop + mobile)
│   │   ├── AppFooter.jsx       # Site footer
│   │   ├── AuthDialog.jsx      # Sign-in/sign-up modal dialog
│   │   ├── ModuleDropdown.jsx  # Feature module selector dropdown
│   │   └── PromptModal.jsx     # AI prompt preview modal
│   ├── contexts/               # React Context providers
│   │   ├── AppNavbarContext.jsx # Navbar state (scroll, mobile menu)
│   │   └── AuthDialogContext.jsx # Auth dialog open/close state
│   ├── controllers/            # Business logic controllers (planned)
│   ├── data/                   # Static configuration data
│   │   └── ProjectConfigData.js # 147+ feature modules & config options
│   ├── models/                 # Data models (planned)
│   ├── routes/                 # Route definitions
│   │   └── AppRoutes.jsx       # All app routes
│   ├── screens/                # Page-level components
│   │   ├── Landing.jsx         # Homepage with hero & CTAs
│   │   ├── Dashboard.jsx       # User project dashboard
│   │   ├── Pricing.jsx         # Subscription plans & pricing
│   │   ├── HowItWorks.jsx      # Platform walkthrough
│   │   ├── Features.jsx        # Feature showcase
│   │   └── ProjectBuilder.jsx  # Multi-step project configurator
│   ├── utils/                  # Utility functions
│   │   ├── generateBuildPrompt.js  # Generate AI prompts from config
│   │   └── generatePreviewTree.js  # Generate file tree previews
│   ├── App.jsx                 # Root app component
│   ├── App.css                 # App-level styles
│   ├── main.jsx                # Entry point (React DOM render)
│   └── index.css               # Global styles & Tailwind base
├── .env                        # Local environment variables (git-ignored)
├── .env.example                # Environment variable template
├── .gitignore                  # Git ignore rules
├── backend plan.md             # Backend architecture plan
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # TailwindCSS configuration
├── vite.config.js              # Vite build configuration
├── eslint.config.js            # ESLint rules
└── README.md                   # This file
```

---

## Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Landing` | Homepage with hero section, features preview, and CTAs |
| `/dashboard` | `Dashboard` | User's project list and management (🔄 in progress) |
| `/pricing` | `Pricing` | Subscription plan comparison and checkout |
| `/how-it-works` | `HowItWorks` | Visual walkthrough of the platform workflow |
| `/features` | `Features` | Detailed feature showcase |
| `/builder/:projectId` | `ProjectBuilder` | Multi-step project configuration wizard |

---

## Feature Modules

CarveStack includes **147 configurable feature modules** organized across these categories:

| Category | Modules | Examples |
|----------|---------|----------|
| **Admin** | 12 | Admin Panel, Analytics, Approvals, Feature Flags, Governance, Moderation, Organizations, CMS, Reports, Usage Limits, White-Label |
| **AI** | 4 | AI & Automation, Custom Models, Knowledge Graph, Personalization |
| **Animations** | 6 | Basic, Advanced, Interactive, Navigation, Gesture, Adaptive Motion |
| **Auditing** | 3 | Audit & History, Data Governance, Monitoring |
| **Backend** | 20 | API Integration, Automation, Backup, Caching, Data Architecture, Developer Platform, Plugins, PWA, Workers, and more |
| **Commerce** | 4 | Commerce & Products, Booking, Inventory, Marketplace |
| **Core** | 6 | App System, Help & Support, Localization, Notifications, Onboarding, Search |
| **Documents** | 5 | Files, Forms, Contracts, Legal, Library |
| **Financial** | 5 | Billing, Payments, Subscriptions, Wallet, Financial |
| **Food & Grocery** | 12 | Store Catalog, Cart, Fulfillment, Picking, Delivery, Pricing, Substitutions, Recommendations, and more |
| **Functions** | 9 | Calculations, Calendar, Decision Engine, Geo, Maps, QR/Barcode, Realtime, Routing, Weather |
| **Marketing** | 8 | CRM, Gamification, Promotions, Rewards, Growth, Cinematic Effects, Food Motion, Navigation Feel |
| **Media** | 4 | Audio, Camera, Photo, Video & Streaming |
| **Security** | 3 | Identity & Access, KYC Verification, Security & Compliance |
| **Social** | 7 | Comments, Community, Messaging, Polls, Presence, Reviews, Social Media |
| **Taxi/Delivery** | 12 | Ride Booking, Tracking, Driver Management, Fleet, Fare Engine, Safety, Pooling, Dispatch, and more |
| **UI** | 3 | Navigation & Layout, Styles & Customization, Themes & Appearance |
| **Visual Styles** | 15 | Minimal, Modern, Glass, Dark Neon, Luxury, Soft UI, Apple, Android, macOS, Discord, Notion, Shopify, and more |

---

## Architecture

### Frontend Architecture

```
BrowserRouter
  └── AuthDialogProvider
        └── AppNavbarProvider
              ├── AppRoutes
              │     ├── Landing
              │     ├── Dashboard
              │     ├── Pricing
              │     ├── HowItWorks
              │     ├── Features
              │     └── ProjectBuilder
              └── AuthDialog (global modal)
```

### Backend Architecture (Planned)

```
Express.js Modular Monolith
  ├── Modules
  │     ├── auth/        (Firebase token verification)
  │     ├── users/       (Profile management)
  │     ├── projects/    (CRUD + membership)
  │     ├── project-models/ (AI model selection)
  │     ├── subscriptions/  (Stripe billing)
  │     ├── usage/       (Metered tracking)
  │     └── admin/       (Platform management)
  ├── Middleware
  │     ├── Auth guard
  │     ├── RBAC
  │     ├── Rate limiting
  │     └── Validation (Zod)
  └── Infrastructure
        ├── PostgreSQL (Prisma)
        ├── Firebase Admin
        ├── Stripe SDK
        └── Redis (optional)
```

---

## Backend Plan

The backend is designed as a **layered modular monolith** in Express.js + TypeScript. Full details are documented in [`backend plan.md`](backend%20plan.md).

### Implementation Phases

| Phase | Scope | Status |
|-------|-------|--------|
| **Phase 0** | Bootstrap (TS + Express + Prisma + env config) | 🔄 In Progress |
| **Phase 1** | Auth + Users (Firebase Admin SDK) | 🔄 In Progress |
| **Phase 2** | Projects + Roles (CRUD + membership) | 🔄 In Progress |
| **Phase 3** | AI Model Catalog + Project Selections | 🗓️ Planned |
| **Phase 4** | Subscriptions (Stripe checkout + webhooks) | 🔄 In Progress |
| **Phase 5** | Hardening (rate limits, CORS, tests, docs) | 🗓️ Planned |

### Core API Endpoints (Planned)

```
POST   /v1/auth/session          # Verify Firebase token
GET    /v1/auth/me                # Current user profile

POST   /v1/projects               # Create project
GET    /v1/projects               # List user projects
GET    /v1/projects/:id           # Get project detail
PATCH  /v1/projects/:id           # Update project
DELETE /v1/projects/:id           # Delete project

GET    /v1/models                 # List AI model catalog
PUT    /v1/projects/:id/model-selections  # Set model preferences

POST   /v1/billing/checkout-session    # Stripe checkout
POST   /v1/billing/portal-session      # Stripe customer portal
POST   /v1/billing/webhook             # Stripe webhooks
GET    /v1/billing/subscription        # Current subscription
```

---

## Roadmap

```
Q1 2026
  ├── ✅ Landing page & marketing site
  ├── ✅ Project Builder with full config system
  ├── ✅ Feature Composer (147+ modules)
  ├── ✅ Pricing & How It Works pages
  ├── 🔄 Firebase Authentication
  ├── 🔄 User Dashboard
  └── 🔄 Backend API scaffold

Q2 2026
  ├── 🔄 AI Code Generation (multi-model)
  ├── 🔄 Stripe Subscription billing
  ├── 🔄 Database integration (PostgreSQL + Prisma)
  ├── 🗓️ Project export & download (ZIP)
  └── 🗓️ Usage tracking & limits

Q3 2026
  ├── 🗓️ Team Workspaces
  ├── 🗓️ Project Templates marketplace
  ├── 🗓️ Real-time collaboration
  ├── 🗓️ Custom AI model training
  └── 🗓️ Admin panel

Q4 2026
  ├── 🗓️ Plugin system
  ├── 🗓️ CI/CD integration
  ├── 🗓️ Mobile app (Flutter)
  └── 🗓️ Enterprise features
```

> **Legend:** ✅ Complete · 🔄 In Progress · 🗓️ Planned

---

## Subscription Plans

| Feature | Free | Pro | Team |
|---------|------|-----|------|
| Projects | 3 | Unlimited | Unlimited |
| Feature Modules | Basic set | All 147+ | All 147+ |
| AI Generations | 10/month | 200/month | Unlimited |
| Model Selection | GPT-4.1 only | All models | All models + Custom |
| Export Projects | ❌ | ✅ | ✅ |
| Team Members | 1 | 1 | Unlimited |
| Priority Support | ❌ | ✅ | ✅ |
| Custom Templates | ❌ | ❌ | ✅ |
| White-Label | ❌ | ❌ | ✅ |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and component patterns
- Use TailwindCSS utility classes for styling
- Place reusable components in `src/components/`
- Place page-level components in `src/screens/`
- Keep context providers focused and minimal
- Add new feature modules to `src/data/ProjectConfigData.js`

---

## License

This project is proprietary software. All rights reserved.

---

<p align="center">
  Built with ❤️ by the <strong>CarveStack</strong> team
</p>
