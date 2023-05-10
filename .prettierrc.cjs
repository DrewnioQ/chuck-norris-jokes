module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  tailwindConfig: "./tailwind.config.js",
  plugins: [require("prettier-plugin-tailwindcss")],
}
