import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Tokens de marca (hex directos) */
        ep: {
          field: "var(--ep-field)",
          cta: "var(--ep-cta)",
          link: "var(--ep-link)",
          nav: "var(--ep-nav-pill)",
          active: "var(--ep-nav-active)",
          studia: "var(--ep-brand-studia)",
          plus: "var(--ep-brand-plus)",
          stroke: "var(--ep-brand-stroke)",
          "task-card": "var(--ep-task-card)",
          "badge-green": "var(--ep-badge-green)",
          "badge-orange": "var(--ep-badge-orange)",
          "action-green": "var(--ep-action-green)",
          "cancel-red": "var(--ep-cancel-red)",
          "card-border": "var(--ep-card-border)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "50px",
        nav: "25px",
        field: "20px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        sidebar: "541px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
