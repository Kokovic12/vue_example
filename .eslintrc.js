module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins:[
    "import-newlines"
  ],
  rules: {
    semi: [2, "never"],
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "no-import-assign": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    quotes: [2, "single"],
    indent: "off",
    "@typescript-eslint/indent": [2, 2],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
      },
    ],
    "object-curly-spacing": [1, "always"],
    "import-newlines/enforce": [
      "error",
      {
        items: 2,
      },
    ],
    "space-before-blocks": [1, "always"],  },
};
