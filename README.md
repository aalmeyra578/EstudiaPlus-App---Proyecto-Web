# EstudiaPlus

Repositorio: https://github.com/aalmeyra578/EstudiaPlus-App---Proyecto-Web

## Identificación

- **Proyecto:** EstudiaPlus
- **Integrantes:**
  - Agustín Gabriel Almeyra Torres
  - Kevin Gabriel Ojea

## Descripción

EstudiaPlus es una SPA para organización académica con tres áreas:

- **Landing pública** (`/`)
- **Flujo de autenticación** (`/login`, `/registro`, `/recuperar-contrasena`)
- **Aplicación principal** (`/app`) con gestión de tareas, calendario y apuntes

## Funcionalidades

- Gestión de tareas: crear, editar, eliminar y marcar como completadas.
- Gestión de apuntes: crear, editar y eliminar.
- Calendario con visualización de tareas por día.
- Navegación lateral persistente dentro del área de aplicación.
- Estados de UI unificados para carga, vacío y error.

## Rutas principales

### Públicas

- `/`
- `/login`
- `/registro`
- `/recuperar-contrasena`

### App

- `/app/inicio`
- `/app/tareas`
- `/app/tareas/nueva`
- `/app/tareas/:id/editar`
- `/app/calendario`
- `/app/apuntes`
- `/app/apuntes/nuevo`
- `/app/apuntes/:id`

## Arquitectura actual

```
src/
├── components/
│   ├── app/
│   │   ├── AppButton.tsx
│   │   ├── ItemActionButtons.tsx
│   │   ├── ListItemCard.tsx
│   │   ├── ListSection.tsx
│   │   ├── MateriaBadge.tsx
│   │   ├── PageSearchTopbar.tsx
│   │   ├── SectionContainer.tsx
│   │   ├── StatusMessage.tsx
│   │   ├── TaskCompletionControl.tsx
│   │   ├── TaskFilterTabs.tsx
│   │   ├── ApunteForm.tsx
│   │   ├── TareaForm.tsx
│   │   ├── BrandWordmark.tsx
│   │   ├── PrototypeSidebar.tsx
│   │   └── InicioScreenPreview.tsx
│   ├── auth/
│   │   ├── AuthFormLayout.tsx
│   │   └── AuthInput.tsx
│   └── landing/
│       ├── SiteHeader.tsx
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── FaqSection.tsx
│       └── SiteFooter.tsx
├── layouts/
│   └── AppLayout.tsx
├── pages/
│   ├── app/
│   ├── auth/
│   ├── LandingPage.tsx
│   └── NotFoundPage.tsx
├── router/
│   └── index.tsx
├── services/
│   └── api.ts
├── lib/
│   ├── date.ts
│   ├── materia.ts
│   └── utils.ts
└── types/
    └── entities.ts
```

## API

La app consume una API REST con base configurable:

- `VITE_API_URL` (default: `http://localhost:3000`)

Endpoints utilizados:

- `GET/POST /tareas`
- `GET/PUT/DELETE /tareas/:id`
- `GET/POST /apuntes`
- `GET/PUT/DELETE /apuntes/:id`

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 3
- Radix UI (`@radix-ui/react-checkbox`, `@radix-ui/react-select`)
- Lucide React

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Ejecución local

Requisitos: Node.js LTS (v20 o v22) y npm.

```bash
npm install
npm run dev
```

Aplicación disponible en `http://localhost:5173`.
