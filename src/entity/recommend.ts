/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 00:43
 * @description：recommend
 * @update: 2022-07-16 00:43
 */
import {Banner, Popular} from '@/model/recommend'


export const bannerVo = (banner: Banner) => ({
  imageUrl: banner.imageUrl,
  targetId: banner.targetId,
  url: banner.url,
  typeTitle: banner.typeTitle
})

export const popularVo = (popular: Popular) => ({
  id: popular.id,
  name: popular.name,
  picUrl: popular.picUrl,
  playCount: popular.playCount,
  trackCount: popular.trackCount,
  trackNumberUpdateTime: popular.trackNumberUpdateTime
})

