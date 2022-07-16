/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 00:43
 * @description：recommend
 * @update: 2022-07-16 00:43
 */
import {Banner} from '@/model/recommend'


export const bannerVo = (banner: Banner) => ({
	imageUrl: banner.imageUrl,
	targetId: banner.targetId,
	url: banner.url,
})

