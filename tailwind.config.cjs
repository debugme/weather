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
          home: "repeat(auto-fit, minmax(260px, 1fr))",
          map: "2fr 1fr",
        },
        colors: {
          "primary": {
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            800: "#92400e",
          },         
          
          "secondary": {
            50: "#f8fafc",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
          },
          "accent": {
            500: "#ef4444"
          }
        },
        spacing: {
          header: "72px",
          footer: "72px",
        }
      }
    },
    themes: [
      {
        name: "grey",
        extend: {
          colors: {
            "primary": {
              300: "#fcd34d",
              400: "#fbbf24",
              500: "#f59e0b",
              600: "#d97706",
              800: "#92400e",
            },
            "secondary": {
              50: "#f9fafb",
              200: "#e5e7eb",
              300: "#d1d5db",
              400: "#9ca3af",
              500: "#6b7280",
              600: "#4b5563",
              700: "#374151",
              800: "#1f2937",
            }
          }
        }
      },
      {
        name: "zinc",
        extend: {
          colors: {
            "primary": {
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
              600: "#ca8a04",
              800: "#854d0e",
            },         
            "secondary": {
              50: "#fafafa",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
            }
          }
        }
      },
      {
        name: "plain",
        extend: {
          colors: {
            "primary": {
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
              600: "#ca8a04",
              800: "#854d0e",
            },             
            "secondary": {
              50: "#fafafa",
              200: "#e5e5e5",
              300: "#d4d4d4",
              400: "#a3a3a3",
              500: "#737373",
              600: "#525252",
              700: "#404040",
              800: "#262626",
            }
          }
        }
      },
      {
        name: "stone",
        extend: {
          colors: {
            "primary": {
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
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
              800: "#292524",
            }
          }
        }
      },
    ]
  })],
}