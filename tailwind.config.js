/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "move-horizontal-slow": {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(calc(100vw + 100px))" },
        },
        "move-horizontal-medium": {
          "0%": { transform: "translateX(-80px)" },
          "100%": { transform: "translateX(calc(100vw + 80px))" },
        },
        "move-horizontal-fast": {
          "0%": { transform: "translateX(-60px)" },
          "100%": { transform: "translateX(calc(100vw + 60px))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "move-horizontal-slow": "move-horizontal-slow 20s linear infinite",
        "move-horizontal-medium": "move-horizontal-medium 15s linear infinite",
        "move-horizontal-fast": "move-horizontal-fast 12s linear infinite",
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "blue-primary": "hsl(var(--blue-primary))",
        "blue-secondary": "hsl(var(--blue-secondary))",
        "blue-light": "hsl(var(--blue-light))",
        "gray-dark": "hsl(var(--gray-dark))",
        "gray-medium": "hsl(var(--gray-medium))",
        "gray-light": "hsl(var(--gray-light))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        light: "var(--gradient-light)",
        "card-gradient": "var(--gradient-card)",
      },
      boxShadow: {
        light: "var(--shadow-light)",
        card: "var(--shadow-card)",
      },
      transitionTimingFunction: {
        kinetic: "cubic-bezier(0.23, 1, 0.32, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["nav-dark-bg"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }) {
      addVariant("nav-dark-bg", "&.nav-dark-bg &");
    },
  ],
};
