import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      indent: ["error", 4, { SwitchCase: 1 }],
      "no-unused-vars": "off",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "no-useless-assignment": "off",
    },
  },
  globalIgnores(["./src/util/mp4-generator.js"]),
]);
