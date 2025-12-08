/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10B981", // used everywhere
          primaryDark: "#059669", // hover states
          accent: "#14B8A6", // highlight text
          accentDark: "#0D9488", // optional darker accent

          error: "#EF4444",
          errorLight: "#FCA5A5",
        },
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1200px",
        },
      },

      spacing: {
        section: "4rem",
        "section-sm": "2rem",
      },
    },
  },
  plugins: [],
};
