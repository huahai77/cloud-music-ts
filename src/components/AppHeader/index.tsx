/**
 * @name: index.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-12 17:07
 * @description：index.tsx
 * @update: 2022-07-12 17:07
 */

import React, {FC, memo, useState} from 'react';
import cs from 'classnames'

import {NavLink} from 'react-router-dom'
import {
	HeaderLeftWrapper,
	HeaderRightWrapper,
	HeaderWrapper,
} from '@/components/AppHeader/style'
import {
	Input,
} from 'antd'
import {
	SearchOutlined
} from '@ant-design/icons';

import {navBarList, INavBar} from '@/model/navData'
import {NavBarEnum} from '@/enum/navBar'
import {BASE_ROUTE} from '@/constant'


const AppHeader: FC = () => {
	const [currNavIndex, setCurrNavIndex] = useState(0)

	const _switchNavItem = (item: INavBar, index: number) => {
		return item.type === NavBarEnum.ROUTE
				?
				<NavLink
						to={item.link}
				>
					<em>{item.title}</em>
					<sub className={cs('sprite_01', {'cor': currNavIndex === index})}></sub>
				</NavLink>
				:
				<a
						href={item.link}
				>
					<em>{item.title}</em>
					<sub className={cs('sprite_01', {'cor': currNavIndex === index})}></sub>
				</a>
	}


	return (
			<HeaderWrapper>
				<div className="content wrap-v1">
					<HeaderLeftWrapper>
						<div className="logo sprite_01">
							<a href="/#">网易云音乐</a>
						</div>
						<div className="nav">
							{
								navBarList.map((item, index) => {
									return (
											<div
													key={item.title}
													className={cs('nav-item', {'__active': currNavIndex === index})}
													onClick={_ => setCurrNavIndex(index)}
											>
												{_switchNavItem(item, index)}
											</div>
									)
								})
							}
						</div>
					</HeaderLeftWrapper>

					<HeaderRightWrapper>
						<Input
								className={'search'}
								placeholder="音乐/视频/电台/用户"
								prefix={<SearchOutlined/>}
						/>
						<a
								href={`${BASE_ROUTE}/login?targetUrl=%2Fcreatorcenter`}
								className={'creator'}
						>
							创作者中心
						</a>
						<a
								href="#/"
								className={'login'}
						>
							登录
						</a>
					</HeaderRightWrapper>
				</div>

				<div className="line"></div>
			</HeaderWrapper>
	);
};

export default memo(AppHeader);
