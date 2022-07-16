/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 00:47
 * @description：recommend
 * @update: 2022-07-16 00:47
 */

import request from '@/utils/request'
import {Banner} from '@/model/recommend'
import {bannerVo} from '@/entity/recommend'

class Recommend {
	public static async fetchBanner(): Promise<Banner[]> {
		const data = await request({
			url: `/banner`,
			method: 'GET',
		})
		
		return data.banners.map(bannerVo)
	}
}

export default Recommend
