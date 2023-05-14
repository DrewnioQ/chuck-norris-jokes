module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: [
    "node_modules",
    "dist",
    "src/**/*.test.tsx",
    "/*.js",
    "/*.cjs",
    "/*.ts",
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "import/extensions": ["error", "ignorePackages", { "": "never" }],
    "react/react-in-jsx-scope": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
}
