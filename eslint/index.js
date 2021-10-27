module.exports = {
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'warn',
		'class-methods-use-this': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'no-use-before-define': 'off',
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
	},
}
