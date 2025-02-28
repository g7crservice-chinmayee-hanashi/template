module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true, // Enables Node.js environment,
		jest: true // Enables Jest environment for test files
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'for-direction': 'error',
		'no-var': 'error',
		'no-console': 'error',
		eqeqeq: 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'getter-return': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'warn',
		'no-constant-condition': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-invalid-regexp': 'error',
		'no-obj-calls': 'error',
		'no-sparse-arrays': 'error',
		'no-useless-concat': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'no-empty': 'error',

		// Best Practices
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'default-case': 'error',
		'no-alert': 'warn',
		'no-empty-pattern': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': ['error', { exceptions: [] }],
		'no-lone-blocks': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-redeclare': 'error',
		'no-return-assign': ['error', 'except-parens'],
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false
			}
		],
		'no-useless-catch': 'error',
		'no-useless-return': 'error',
		'wrap-iife': ['error', 'any'],
		yoda: 'error',
		'no-duplicate-imports': ['error', { includeExports: true }],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
		'no-else-return': 'error',
		'no-prototype-builtins': 'error',
		'no-loop-func': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'no-useless-escape': 'off',
		'no-useless-rename': 'error',
		radix: 'error',
		'require-await': 'off',
		'no-extra-bind': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-destructuring': 'error',
		'no-empty-function': ['error', { allow: ['constructors'] }],
		'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
		'no-new-func': 'error',
		'no-param-reassign': 'error',

		// Variables
		'no-const-assign': 'error',
		'no-useless-concat': 'error',
		'no-new-object': 'error',
		'no-array-constructor': 'error',
		'no-undef': 'error',

		// Stylistic Issues

		'no-underscore-dangle': ['error', { allow: ['_previousDataValues'], allowAfterThis: true }],
		'no-extra-parens': 'error',
		'eol-last': 'error'
	}
};
