module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'eol-last': 'off',
        'indent': 'off',
        'func-call-spacing': 'off',
        'space-in-parens': 'off',
        'comma-dangle': 'off',
        'no-trailing-spaces': 'off',
        'semi': 'off',
        'space-before-function-paren': 'off',
        'quotes': 'off',
        'import/first': 'off',
        'comma-spacing': 'off',
        'block-spacing': 'off',
        'space-infix-ops': 'off',
        'eqeqeq': 'off',
        'yoda': 'off',
        'no-multi-spaces': 'off',
        'spaced-comment': 'off',
        'object-curly-newline': 'off',
        'no-unused-vars': 'off'
    }
}