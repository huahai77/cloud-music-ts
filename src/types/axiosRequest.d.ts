/**
 * @name: axiosRequest.d.ts
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 01:27
 * @description：axiosRequest.d.ts
 * @update: 2022-07-16 01:27
 */

import {AxiosRequestConfig} from 'axios'

declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>
	}
}
