module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
  },
};
