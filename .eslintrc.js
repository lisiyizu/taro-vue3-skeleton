// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'semi': ['error', 'always'],  // 强制分号
      "indent": ["error", 4], // 4个空格

      "camelcase": 0, // 不强制_形式，或者驼峰

      "vue/html-indent": ["error", 2], // vue中4个空格
      "vue/require-default-prop": "off",  // prop的值设置默认值（后期关闭该规则）
      "vue/require-prop-type-constructor": "off", // 关闭prop强制类型设置（后期关闭该规则）
      "vue/require-prop-types": "off",  // 关闭prop强制类型设置（后期关闭该规则）
      "vue/prop-name-casing": "off", // prop的属性名可以为驼峰，也可以_表示
  },
  parserOptions: {
      parser: 'babel-eslint'
  },
  plugins: [
      "vue"
  ]
}
