
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser';

export default [
  eslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...tseslint.config(...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked),
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        EXPERIMENTAL_useProjectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        },
      },
    },
    rules: {
      // override/add rules settings here
      "quotes": ["error", "single"],
      // "no-multiple-empty-line": ["error", { max: 1 }]
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-argument": "off"
    }
  }
]
