module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }], // 允许@ts-ignore: remark格式
    "@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off", // 无法是被全局TS类型
    "@typescript-eslint/no-non-null-assertion": "off",
  },
}
