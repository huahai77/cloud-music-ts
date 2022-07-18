/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 00:47
 * @description：recommend
 * @update: 2022-07-16 00:47
 */

import request from '@/utils/request'
import {AlbumBean, Banner, Popular} from '@/model/recommend'
import {bannerVo, popularVo} from '@/entity/recommend'

class Recommend {
  public static async fetchBanner(): Promise<Banner[]> {
    const data = await request({
      url: `/banner`,
      method: 'GET',
    })

    return data.banners.map(bannerVo)
  }

  public static async fetchPopular(limit: number): Promise<Popular[]> {
    const data = await request({
      url: `/personalized?limit=${limit}`,
      method: 'GET',
    })

    return data.result.map(popularVo)
  }

  public static async fetchUpdateAlbum(params: AlbumBean): Promise<any> {
    const data = await request({
      url: `/top/album`,
      method: 'GET',
      params
    })
    console.log(data.albums)
    // return data.result.map(popularVo)
  }
}

export default Recommend
