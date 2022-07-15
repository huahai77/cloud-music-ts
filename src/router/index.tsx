/**
 * @name: route
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 15:14
 * @description：route
 * @update: 2022-07-15 15:14
 */

import React, {lazy, Suspense} from 'react'
import {Navigate, RouteObject, useRoutes} from 'react-router-dom'


const Discover = lazy(() => import('@/pages/Discover'))
const Recommend = lazy(() => import('@/pages/Discover/Recommend'))
const Ranking = lazy(() => import('@/pages/Discover/Ranking'))
const Songs = lazy(() => import('@/pages/Discover/Ranking'))
const Djradio = lazy(() => import('@/pages/Discover/Djradio'))
const Artist = lazy(() => import('@/pages/Discover/Artist'))
const Album = lazy(() => import('@/pages/Discover/Album'))
const Mine = lazy(() => import('@/pages/Mine'))
const Friend = lazy(() => import('@/pages/Friend'))


interface IRouteObject extends RouteObject {
	name?: string,
	children?: IRouteObject[]
}

const routes: IRouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/discover"/>
	},
	{
		name: '发现音乐',
		path: '/discover',
		element: <Discover/>,
		children: [
			{
				name: '发现音乐',
				path: "/discover",
				element: <Navigate to="recommend"/>
			},
			{
				name: '推荐',
				path: "recommend",
				element: <Recommend/>
			},
			{
				name: '排行榜',
				path: "ranking",
				element: <Ranking/>
			},
			{
				name: '歌单',
				path: "songs",
				element: <Songs/>
			},
			{
				name: '主播电台',
				path: "djradio",
				element: <Djradio/>
			},
			{
				name: '歌手',
				path: "artist",
				element: <Artist/>
			},
			{
				name: '新碟上架',
				path: "album",
				element: <Album/>
			},
		]
	},
	{
		name: '我的音乐',
		path: '/mine',
		element: <Mine/>,
	},
	{
		name: '关注',
		path: '/friend',
		element: <Friend/>,
	}
]

const getWrappedRoutes = (routes: IRouteObject[]): IRouteObject[] => {
	return routes.map((item) => {
		if (item.children) {
			item.children = getWrappedRoutes(item.children);
		}
		item.element = (
				<Suspense fallback={<div>加载中...</div>}>{item.element}</Suspense>
		);

		return item
	});
};

const Routes = () => useRoutes(getWrappedRoutes(routes))

export default Routes
