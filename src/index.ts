
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser';

const config = [
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.config(...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked),
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        EXPERIMENTAL_useProjectService: true,
        ecmaFeatures: {
          jsx: true
        },
      },
    },
    rules: {
      // override/add rules settings here
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
    }
  }
]

const eslintConfig = () => {
    return config
}

export default eslintConfig;
