import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          taupe:   "#786169",
          cream:   "#e8e1d7",
          sand:    "#ba9e84",
          dark:    "#3d3035",
          white:   "#f5f2ee",
        },
      },
      fontFamily: {
        display: ["Century Gothic Pro", "Century Gothic", "AppleGothic", "sans-serif"],
        body:    ["Century Gothic Pro", "Century Gothic", "AppleGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
