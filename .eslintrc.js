module.exports = {
    extends: ['airbnb-base', 'prettier'],
    rules: {
        "no-unused-vars": 'off',
        "prefer-destructuring": 'off',
        "consistent-return": 'off'
    },
    env: {
        "jest": true
    }
};