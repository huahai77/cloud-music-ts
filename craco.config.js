/**
 * @name: craco.config
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-12 16:21
 * @description：craco.config
 * @update: 2022-07-12 16:21
 */

const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
	webpack: {
		alias: {
			'@': resolve('src')
		}
	}
}
