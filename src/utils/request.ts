/**
 * @name: request
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 13:35
 * @description：request
 * @update: 2022-07-15 13:35
 */

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {BASE_URL, TIMEOUT} from './config'
import throwErr from '@/utils/throwErr'

const service = axios.create({
	baseURL: BASE_URL,
	timeout: TIMEOUT
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
	// 1.发送网络请求时, 在界面的中间位置显示Loading的组件

	// 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

	// 3.params/data序列化的操作

	return config;
}, (err: any) => {
	console.log("err", err)
});

service.interceptors.response.use((res: AxiosResponse) => {
	return res.data
}, (err: any) => {
	if (err && err.response) {
		console.log(throwErr(err.response.status, err.response.config.url))
	}
	return err;
});

export default service
