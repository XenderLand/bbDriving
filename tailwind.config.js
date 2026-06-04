/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#d4a847",
          light: "#f2c96a",
          dim: "rgba(212,168,71,0.12)",
        },
        dark: {
          bg: "#0f0f0e",
          card: "#181817",
          deep: "#080807",
          rich: "#111009",
        },
        offwhite: "#fafaf8",
        muted: "#8a8680",
        bodytext: "#e8e4dc",
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        fadeIn: "fadeIn 0.6s ease both",
        drift: "drift 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(30px)" },
        },
      },
    },
  },
  plugins: [],
};
