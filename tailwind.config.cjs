/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('tailwindcss-themer')({
    defaultTheme: {
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"]
        },
        gridTemplateColumns: {
          home: "repeat(auto-fit, 320px)",
        },
        colors: {
          "primary": {
            300: "#fde047",
            400: "#facc15",
            600: "#ca8a04",
            800: "#854d0e",
          },
          "secondary": {
            50: "#fafaf9",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
          }
        }
      }
    },
    themes: [
      {
        name: "tokyo",
        extend: {
          colors: {
            "primary": {
              300: "#fde047",
              400: "#facc15",
              600: "#ca8a04",
              800: "#854d0e",
            },
            "secondary": {
              50: "#f8fafc",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
            }
          }
        }
      }
    ]
  })],
}