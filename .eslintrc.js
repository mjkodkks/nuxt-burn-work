module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "camelcase": "off",
    "dot-notation": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }]
  }
}
