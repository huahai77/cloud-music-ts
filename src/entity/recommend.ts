/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 00:43
 * @description：recommend
 * @update: 2022-07-16 00:43
 */
import {Album, Banner, Popular} from '@/model/recommend'


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
  trackNumberUpdateTime: popular.trackNumberUpdateTime,
  copywriter: popular.copywriter
})

export const updateAlbumVo = (album: Album) => ({
  blurPicUrl: album.blurPicUrl,
  id: album.id,
  name: album.name,
  picUrl: album.picUrl,
  publishTime: album.publishTime,
  artist: album.artist,
  artists: album.artists
})

