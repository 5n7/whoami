/** @type {import('prettier').Config} */
export default {
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  organizeImportsSkipDestructiveCodeActions: true,
};
