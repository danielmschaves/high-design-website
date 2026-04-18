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
          primary:   "#786169",
          secondary: "#e8e1d7",
          accent:    "#ba9e84",
          dark:      "#3d3035",
          white:     "#f5f2ee",
          // legacy aliases
          taupe:     "#786169",
          cream:     "#e8e1d7",
          sand:      "#ba9e84",
        },
        neutral: {
          900: "#1a1614",
          700: "#3d3035",
          400: "#786169",
          200: "#cec6bc",
          100: "#e8e1d7",
          50:  "#f5f2ee",
        },
      },
      fontFamily: {
        display: ["Century Gothic Pro", "Century Gothic", "AppleGothic", "sans-serif"],
        body:    ["Century Gothic Pro", "Century Gothic", "AppleGothic", "sans-serif"],
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
