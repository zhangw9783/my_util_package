/* eslint-disable */
module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
			semi: 'error',
			'react-native/no-inline-styles': 'off',
			'no-shadow': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'no-bitwise': 0,
			'@typescript-eslint/no-inferrable-types': "off",
			'@typescript-eslint/no-empty-function': "off",
			'no-empty': "off",
		},
}
