module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaFeatures: { jsx: true } },
	plugins: ['sort-imports-es6-autofix', '@typescript-eslint', 'react', 'react-hooks', 'prettier', 'sort-keys-fix'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	rules: {
		// https://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'warn',

		// https://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['warn', 'smart'],

		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'off',

		// https://eslint.org/docs/rules/no-useless-catch
		'no-useless-catch': 'off',

		// https://eslint.org/docs/rules/eol-last
		'eol-last': ['warn', 'always'],

		// https://eslint.org/docs/rules/max-len
		'max-len': [
			'warn',
			{
				code: 120,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],

		// https://eslint.org/docs/rules/no-const-assign
		'no-const-assign': 'error',

		// https://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 'error',

		// https://eslint.org/docs/rules/no-var
		'no-var': 'warn',

		// https://eslint.org/docs/rules/prefer-const
		'prefer-const': ['warn', { destructuring: 'all' }],

		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'warn',

		'@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',

		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-types': 'off',

		// Extensions rules of eslint
		// Some eslint rules break when used in typescript
		// @typescript-eslint offer replacements for these rules
		// the original eslint rules must be disabled for them however

		// https://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': 'off',
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'none',
				ignoreRestSiblings: true,
				caughtErrors: 'none',
				varsIgnorePattern: '^_+$',
			},
		],

		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
		'@typescript-eslint/no-non-null-assertion': 'off',

		'react/button-has-type': ['warn'],
		'react/jsx-boolean-value': 'warn',
		'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
		'react/jsx-key': ['warn'],
		'react/jsx-no-duplicate-props': ['warn'],
		// TEAWIOGHWIEGHWAOG
		'react/jsx-sort-props': [
			'warn',
			{
				reservedFirst: true,
				noSortAlphabetically: true,
				shorthandLast: true,
				callbacksLast: true,
			},
		],
		'react/jsx-no-target-blank': ['warn'],
		'react/no-children-prop': ['warn'],
		'react/no-deprecated': ['warn'],
		'react/no-unknown-property': ['warn'],
		'react/no-direct-mutation-state': ['warn'],
		'react/no-unused-state': ['warn'],
		// React hooks
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'off',

		'sort-imports': 'off',
		'sort-imports-es6-autofix/sort-imports-es6': [
			'warn',
			{
				ignoreCase: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
    'no-console': 'warn',
		'prettier/prettier': [
			'error',
			{
				bracketSameLine: false,
				arrowParens: 'avoid',
				quoteProps: 'as-needed',
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				bracketSpacing: true,
				tabWidth: 2,
				semi: false,
				jsxSingleQuote: true,
				printWidth: 80,
        endOfLine: 'auto'
			},
		],

    'sort-keys-fix/sort-keys-fix': 'warn'
	},
	env: { node: true, browser: true },
}
