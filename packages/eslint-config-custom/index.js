module.exports = {
  extends: ["next", "turbo", "prettier", "eslint:recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    quotes: ["warn", "double"],
    "no-unused-vars": "warn",
  },
};
