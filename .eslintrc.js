module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    "mocha": true
  },
  rules: {
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-constant-condition": "off",
    "max-len": ["error", { "code": 150 }]
  },
};
