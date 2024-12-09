/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#141619",
        "100": "#000",
      },
      white: {
        "50": "#fffbe0",
        "100": "#fff",
      },
      blue: {
        "50": "#5cd1ff",
        "100": "#418cff",
      },
      red: {
        "50": "#ff6953",
        "100": "#ff5757"
      },
      yellow: {
        "50": "#ffd83f",
        "100": "#feaa02"
      },
      feature: {
        "100": "#f9b2dc",
        "200": "#9c8bef",
        "300": "#ff8e51",
        "400": "#3ea66b"
      }
    },
    fontFamily: {
      'chewy': ["chewy"],
      'bangers': ["bangers"],
      'brightsight': ['brightsight'],
      'kandy': ['kandy'],
      'brother': ['brother']
    }
  },
  plugins: [],
}
