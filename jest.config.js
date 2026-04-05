/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
    }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next/image$": "<rootDir>/__mocks__/next-image.tsx",
    "^next/link$": "<rootDir>/__mocks__/next-link.tsx",
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/style.js",
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/__mocks__/file.js",
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
};

module.exports = config;
