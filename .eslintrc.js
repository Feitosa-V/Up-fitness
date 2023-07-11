module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/vue3-recommended",
    '@vue/airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-cycle': 'off',
    'no-unused-vars': 'off',
    'no-useless-catch': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
  },
  // scripts:{
  //   "lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
  //   "format": "prettier .  --write"
  // }
}
