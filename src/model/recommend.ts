/**
 * @name: recommend
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 01:50
 * @description：recommend
 * @update: 2022-07-16 01:50
 */

export interface Banner {
  imageUrl: string,
  targetId: number | string,
  url?: string,
  typeTitle?: string
}

export interface Popular {
  id: number,
  name: string,
  picUrl: string,
  playCount?: number,
  trackCount?: number,
  trackNumberUpdateTime?: number,
  copywriter?: string
}


export const popularNav = [
  {
    name: '华语',
  },
  {
    name: '流行',
  },
  {
    name: '摇滚',
  },
  {
    name: '民谣',
  },
  {
    name: '电子',
  }
]

export class AlbumBean {
  limit?: number
  offset?: number
  area: string | undefined
  type?: string
  year?: string | number
  month?: string | number
}

