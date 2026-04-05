/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    // Mock Next.js built-ins
    "^next/image$": "<rootDir>/__mocks__/next-image.tsx",
    "^next/link$": "<rootDir>/__mocks__/next-link.tsx",
    // Stub CSS / static assets
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/style.js",
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/__mocks__/file.js",
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
};

module.exports = config;
