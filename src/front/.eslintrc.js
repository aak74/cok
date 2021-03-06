// https://eslint.org/docs/user-guide/configuring
// const webpack = require('eslint-import-resolver-webpack');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // settings: {
  //   'import/resolver': webpack,
  // }, // add your custom rules here
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'node_modules']
      }
    }
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'never', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-consistent-return': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': ["error", {
      "props": false,
    }],
    'arrow-parens': ["error", "as-needed"],
  }
}
