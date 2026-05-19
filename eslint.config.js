import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginImport from "eslint-plugin-import";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],

    plugins: {
      import: pluginImport,
    },

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-trailing-spaces": "error",
      "prefer-const": "error",
      "no-param-reassign": "error",
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      camelcase: "error",
      "import/no-cycle": "error",
    },
  },
]);