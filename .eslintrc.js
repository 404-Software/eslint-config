const config = {
	settings: { react: { version: "detect" } },
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["./tsconfig.json"],
		sourceType: "module",
		projectService: true,
		tsconfigRootDir: "./",
		ecmaFeatures: { jsx: true },
	},
	plugins: ["sort-imports-es6-autofix", "@typescript-eslint", "react", "react-hooks", "prettier", "canonical"],
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:canonical/recommended",
	],
	rules: {
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-require-imports": "off",
		"no-template-curly-in-string": "warn",
		eqeqeq: ["warn", "smart"],
		"no-empty-pattern": "off",
		"no-useless-catch": "off",
		"eol-last": ["warn", "always"],
		"max-len": [
			"warn",
			{
				code: 120,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		"no-const-assign": "error",
		"no-duplicate-imports": "error",
		"no-var": "warn",
		"prefer-const": ["warn", { destructuring: "all" }],
		"prefer-template": "warn",
		"@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/prefer-optional-chain": "warn",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-types": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				vars: "all",
				args: "none",
				ignoreRestSiblings: true,
				caughtErrors: "none",
				varsIgnorePattern: "^_+$",
			},
		],
		"@typescript-eslint/no-non-null-assertion": "off",
		"react/button-has-type": ["warn"],
		"react/jsx-boolean-value": "warn",
		"react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
		"react/jsx-key": ["warn"],
		"react/jsx-no-duplicate-props": ["warn"],
		"react/jsx-sort-props": [
			"warn",
			{
				reservedFirst: true,
				shorthandLast: true,
				callbacksLast: true,
			},
		],
		"react/jsx-no-target-blank": ["warn"],
		"react/no-children-prop": ["warn"],
		"react/no-deprecated": ["warn"],
		"react/no-unknown-property": ["warn"],
		"react/no-direct-mutation-state": ["warn"],
		"react/no-unused-state": ["warn"],
		"react-hooks/rules-of-hooks": "warn",
		"react-hooks/exhaustive-deps": "off",
		"sort-imports": "off",
		"sort-imports-es6-autofix/sort-imports-es6": [
			"warn",
			{
				ignoreCase: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
			},
		],
		"no-console": "off",
		"prettier/prettier": [
			"error",
			{
				plugins: ["prettier-plugin-tailwindcss"],
				bracketSameLine: false,
				arrowParens: "avoid",
				quoteProps: "as-needed",
				singleQuote: false,
				trailingComma: "all",
				useTabs: true,
				bracketSpacing: true,
				tabWidth: 2,
				semi: true,
				jsxSingleQuote: false,
				printWidth: 120,
				endOfLine: "auto",
			},
		],
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"canonical/destructuring-property-newline": "off",
		"canonical/import-specifier-newline": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/require-await": "off",
		"@typescript-eslint/no-unnecessary-type-assertion": "off",
	},
	env: { node: true, browser: true },
};

module.exports = config;
