module.exports = {
    extends: ['airbnb-base', 'prettier'],
    rules: {
        "no-unused-vars": 'off',
        "prefer-destructuring": 'off',
        "consistent-return": 'off',
        "no-console": "off",
        "import/order": "error"
    },
    env: {
        "jest": true
    }
};