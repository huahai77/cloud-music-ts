/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 23:49
 * @description：recommend
 * @update: 2022-07-15 23:49
 */
import {Banner, Popular} from '@/model/recommend'


export interface RecommendProps {
  banners: Array<Banner>,
  popularList: Array<Popular>,
  updateAlbumList: any[]
}


