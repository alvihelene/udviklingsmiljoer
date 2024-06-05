import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    env: {
      node: true // Add this line
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        require: 'readonly', // Add this line
        module: 'readonly' // Add this line
      }
    },
    files: ['src/**/*.{js,mjs,vue}'],
    ignores: ['node_modules', 'dist', 'build', 'public', '.gitignore'],
    rules: {
      semi: 'error'
    }
  },
  {
    files: ['cypress/**/*.{js,ts,jsx,tsx}'],
    env: {
      'cypress/globals': true // Add this line
    },
    extends: ['plugin:cypress/recommended']
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential']
]
