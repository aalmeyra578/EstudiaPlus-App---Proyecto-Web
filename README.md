# EstudiaPlus — Landing

Repositorio: https://github.com/aalmeyra578/EstudiaPlus-App---Proyecto-Web

## Identificación

- **Proyecto:** EstudiaPlus
- **Integrantes:**
  - Agustín Gabriel Almeyra Torres
  - Kevin Gabriel Ojea

## Propósito del proyecto

La aplicación tiene como fin brindar una herramienta digital que permita a los usuarios gestionar sus tareas y actividades diarias. Se centra en la gestión de tareas, con acciones para crear, editar y eliminar actividades, junto con su organización por estado y fecha. Esta aplicación le permite al usuario tener una visión general de sus actividades en la pantalla principal, así como accesos específicos para tareas, calendario y apuntes.

## Problemática que resuelve

Muchos estudiantes y jóvenes enfrentan dificultades para organizar sus actividades diarias por la cantidad de responsabilidades académicas, personales y sociales. Esta falta de organización puede generar olvidos, retrasos en las entregas, estrés y una disminución en la productividad.

## Perfil del usuario

El perfil de usuario destinatario es el de estudiantes de nivel secundario y superior, y personas que necesitan una herramienta para organizar sus actividades diarias de forma sencilla y rápida.

## Qué contiene

- Landing page con Header, Hero, Características, FAQ y Footer.
- Preview estática de la pantalla de Inicio según el [prototipo en Figma](https://www.figma.com/design/jhOLiGEEmrMNjMXWsdig67/Prototipo-App?node-id=20-184).
- Design system con tokens CSS y componentes **shadcn/ui** (botones, inputs, textarea, select, checkbox, cards, modal, alertas).
- Showcase de componentes al final de la página.

## Objetivos

- Presentar el producto con una landing pública coherente con la identidad visual del prototipo.
- Centralizar colores, tipografías y espaciados en variables reutilizables.
- Validar el stack React + Vite + TypeScript + Tailwind en una SPA estática.

## Arquitectura

```
src/
├── App.tsx
├── main.tsx
├── index.css                  # Tokens globales del design system
├── lib/utils.ts
└── components/
    ├── landing/               # Secciones de la landing
    │   ├── SiteHeader.tsx
    │   ├── HeroSection.tsx
    │   ├── FeaturesSection.tsx
    │   ├── FaqSection.tsx
    │   ├── ComponentShowcase.tsx
    │   └── SiteFooter.tsx
    ├── app/                   # UI del producto (Inicio, sidebar, marca)
    │   ├── BrandWordmark.tsx
    │   ├── PrototypeSidebar.tsx
    │   └── InicioScreenPreview.tsx
    └── ui/                    # shadcn/ui
public/
└── images/
    ├── inicio-hero.png      # UI hero (746×470) — used in landing preview + auth pages
    └── estudiaplus-logo.png # Master high-res logo (1536×1024) — source for improved branding asset
tailwind.config.ts
components.json
```

| Capa | Rol |
|------|-----|
| `landing/` | Contenido de la página pública |
| `app/` | Piezas de la interfaz del producto |
| `ui/` | Design system genérico |

## Stack

| Tecnología | Uso |
|------------|-----|
| React 19 | UI |
| Vite 8 | Bundler y dev server |
| TypeScript | Tipado |
| Tailwind CSS 3 | Estilos |
| shadcn/ui | Componentes sobre Radix |
| lucide-react | Iconografía |

## Ejecución

Requisitos: **Node.js** LTS (v20 o v22) y **npm**.

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.
