/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(250, 204, 21, 0.8)" 
          },
        },
        "wave": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { 
            transform: "translateY(0px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": { 
            transform: "translateY(-25px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
        },
        "swim": {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(10px) rotate(-5deg)" },
          "75%": { transform: "translateX(-10px) rotate(5deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "wave": "wave 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "swim": "swim 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 