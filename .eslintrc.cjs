module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	parser: '@typescript-eslint/parser',
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'eslint:recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		trailingComma: 'none',
		// 缩进
		indent: ["error", 4, { "SwitchCase": 1 }],
		// 引号
		quotes: [1, 'single'],
		// 分号结尾
		semi: ['error', 'always'],
		'no-unused-vars': [
			2,
			{
				// 允许声明未使用变量
				vars: 'local',
				// 参数不检查
				args: 'none'
			}
		]
	}
}
