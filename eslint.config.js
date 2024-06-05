import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

module.exports = [
  {
    env: {
      node: true,
      'cypress/globals': true
    },
    plugins: [
      'cypress' // Add this line
    ],
    extends: [
      'plugin:cypress/recommended' // Add this line
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        require: true,
        module: true,
        describe: true,
        it: true,
        cy: true,
        expect: true
      }
    },
    files: ['src/**/*.{js,mjs,vue}'],
    ignores: ['node_modules', 'dist', 'build', 'public', '.gitignore'],
    rules: {
      semi: 'error'
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential']
]
