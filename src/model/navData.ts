import {NavigatorEnum} from '@/enum/navBar'
import {BASE_ROUTE, DISCOVER} from '@/constant'

/**
 * @name: NavData
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-13 11:32
 * @description：NavData
 * @update: 2022-07-13 11:32
 */

export interface INavBar {
  type: NavigatorEnum,
  title?: string,
  link: string
}

export const navBarList: INavBar[] = [
  {
    type: NavigatorEnum.ROUTE,
    title: '发现音乐',
    link: '/'
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '我的音乐',
    link: '/mine'
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '关注',
    link: '/friend'
  },
  {
    type: NavigatorEnum.JUMP,
    title: '商城',
    link: `${BASE_ROUTE}/store/product`
  },
  {
    type: NavigatorEnum.JUMP,
    title: '音乐人',
    link: `${BASE_ROUTE}/st/musician`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '下载客户端',
    link: `/download`
  }
]


export const discoverNavBarList = [
  {
    type: NavigatorEnum.ROUTE,
    title: '推荐',
    link: `${DISCOVER}/recommend`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '排行榜',
    link: `${DISCOVER}/ranking`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '歌单',
    link: `${DISCOVER}/songs`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '主播电台',
    link: `${DISCOVER}/djradio`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '歌手',
    link: `${DISCOVER}/artist`
  },
  {
    type: NavigatorEnum.ROUTE,
    title: '新碟上架',
    link: `${DISCOVER}/album`
  }
]
