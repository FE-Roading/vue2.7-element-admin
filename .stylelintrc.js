module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier-scss",
  ],
  customSyntax: "postcss-scss",
  rules: {
    "prettier/prettier": true,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9_-]+$",
    "selector-id-pattern": "^[a-z][a-zA-Z0-9_-]+$",
    "keyframes-name-pattern": "^[a-z][a-zA-Z0-9_-]+$",
  },
  "ignoreFiles": ["**/*.js", "node_modules/**/*", "~element-ui/**/*"]
}
