const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  corePlugins: {
    preflight: false,
  },
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-text": "#A6A7AB",
        "dark-border": "#373A40",
        "dark-bg": "#141517",
        "dark-bg-light": "#1A1B1E",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["Montserrat", ...fontFamily.mono],
      },
    },
  },
};
