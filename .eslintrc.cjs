module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh"],
  extends: [
    "plugin:react-hooks/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "src/**/*.test.tsx",
    "/*.js",
    "/*.cjs",
    "/*.ts",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
  },
}
