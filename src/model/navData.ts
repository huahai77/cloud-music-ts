import {NavBarEnum} from '@/enum/navBar'
import {BASE_ROUTE, DISCOVER} from '@/constant'
import {INavBar} from '@/types/navBar'

/**
 * @name: NavData
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-13 11:32
 * @description：NavData
 * @update: 2022-07-13 11:32
 */



export const navBarList: INavBar[] = [
	{
		type: NavBarEnum.ROUTE,
		title: '发现音乐',
		link: '/'
	},
	{
		type: NavBarEnum.ROUTE,
		title: '我的音乐',
		link: '/mine'
	},
	{
		type: NavBarEnum.ROUTE,
		title: '关注',
		link: '/friend'
	},
	{
		type: NavBarEnum.JUMP,
		title: '商城',
		link: `${BASE_ROUTE}/store/product`
	},
	{
		type: NavBarEnum.JUMP,
		title: '音乐人',
		link: `${BASE_ROUTE}/st/musician`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '下载客户端',
		link: `/download`
	}
]


export const discoverNavBarList = [
	{
		type: NavBarEnum.ROUTE,
		title: '推荐',
		link: `${DISCOVER}/recommend`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '排行榜',
		link: `${DISCOVER}/ranking`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '歌单',
		link: `${DISCOVER}/songs`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '主播电台',
		link: `${DISCOVER}/djradio`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '歌手',
		link: `${DISCOVER}/artist`
	},
	{
		type: NavBarEnum.ROUTE,
		title: '新碟上架',
		link: `${DISCOVER}/album`
	}
]
