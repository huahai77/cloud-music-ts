/**
 * @name: config
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 13:50
 * @description：config
 * @update: 2022-07-15 13:50
 */

export const DEV_BASE_URL: string = 'http://123.207.32.32:9001'
export const PRO_BASE_URL: string = 'http://123.207.32.32:9001'
export const BASE_URL: string = process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PRO_BASE_URL
export const TIMEOUT: number = 5000
