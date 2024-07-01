import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  ...tseslint.config(...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        EXPERIMENTAL_useProjectService: true,
      },
    },
    rules: {
      // override/add rules settings here
      "quotes": ["error", "single"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-argument": "off",
    }
  }
]
