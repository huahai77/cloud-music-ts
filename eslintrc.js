/**
 * @name: eslintrc.js
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 15:51
 * @description：eslintrc.js
 * @update: 2022-07-15 15:51
 */

module.exports = {
	root: true,
	env: {
		node: true
	},
	rules: {},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: "./tsconfig.json"
	},
	plugins: ['@typescript-eslint']
};
