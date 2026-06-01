import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
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
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        nimble: {
          50: "hsl(98, 50%, 97%)",
          100: "hsl(98, 50%, 93%)",
          200: "hsl(98, 50%, 87%)",
          300: "hsl(98, 50%, 78%)",
          400: "hsl(98, 50%, 60%)",
          500: "hsl(98, 50%, 47%)",
          600: "hsl(98, 50%, 42%)",
          700: "hsl(98, 50%, 38%)",
          800: "hsl(98, 50%, 32%)",
          900: "hsl(98, 50%, 25%)",
          950: "hsl(98, 50%, 15%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px 0 hsl(var(--primary) / 0.08), 0 4px 16px -2px hsl(var(--primary) / 0.10)",
        "card-hover": "0 4px 12px 0 hsl(var(--primary) / 0.12), 0 12px 40px -4px hsl(var(--primary) / 0.18)",
        "hero": "0 20px 60px -10px hsl(var(--primary) / 0.30)",
        "glow": "0 0 40px hsl(var(--primary-light) / 0.35)",
        "button": "0 4px 14px 0 hsl(var(--primary) / 0.40)",
        "nav": "0 1px 0 0 hsl(var(--border)), 0 4px 24px -4px hsl(var(--primary) / 0.08)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(var(--primary-dark)), hsl(var(--primary)))",
        "gradient-hero": "linear-gradient(135deg, hsl(98, 50%, 25%) 0%, hsl(98, 50%, 38%) 50%, hsl(98, 50%, 50%) 100%)",
        "gradient-subtle": "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(98, 50%, 97%) 100%)",
        "gradient-card": "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(98, 50%, 98%) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-up-delay": "fadeUp 0.6s ease-out 0.2s both",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "count-up": "countUp 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideInRight: { from: { opacity: "0", transform: "translateX(24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        shimmer: { from: { backgroundPosition: "-200% 0" }, to: { backgroundPosition: "200% 0" } },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
