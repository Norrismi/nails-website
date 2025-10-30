// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./index.tsx",
      "./App.tsx",
      "./components/**/*.{ts,tsx}"
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#edbbf9",
            400: "#e09cf2", 500: "#d17ae9", 600: "#ba53d7", 700: "#9f38b9",
            800: "#7e2a93", 900: "#5c1d6b", DEFAULT: "#ba53d7",
          },
          gold: {
            100: "#fefce8", 200: "#fef3c7", 300: "#fde68a", 400: "#fcd34d",
            500: "#fbbf24", 600: "#f59e0b", 700: "#d97706", 800: "#b45309",
            900: "#92400e",
          },
          dark: {
            bg: "#0f0f1a",
            card: "#1a1a2e",
            text: "#e2e8f0",           // Main readable text in dark mode
            textSecondary: "#94a3b8",  // Subtle text (descriptions, quotes)
          },
          light: {
            bg: "#fafafa",
            card: "#ffffff",
            text: "#1a1a1a",
          },
        },
        fontFamily: {
          heading: ['"Playfair Display"', "serif"],
          body: ["Inter", "sans-serif"],
        },
        backgroundImage: {
          "gradient-gold": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          "gradient-purple": "linear-gradient(135deg, #ba53d7 0%, #9f38b9 100%)",
          hero: "radial-gradient(ellipse at top, #ba53d7 0%, #0f0f1a 70%)",
        },
        boxShadow: {
          glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          card: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "card-hover": "0 25px 50px -12px rgba(186, 83, 215, 0.25)",
        },
        animation: {
          "fade-in": "fadeIn 0.8s ease-out forwards",
          "slide-up": "slideUp 0.6s ease-out forwards",
          float: "float 6s ease-in-out infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          slideUp: {
            "0%": { transform: "translateY(50px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" }
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" }
          },
        },
      },
    },
    plugins: [],
  };