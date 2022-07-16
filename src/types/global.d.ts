/**
 * @name: global.d.ts
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 20:01
 * @description：global.d.ts
 * @update: 2022-07-15 20:01
 */

export {};

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
	}
}
