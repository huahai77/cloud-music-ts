/**
 * @name: index.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-12 17:22
 * @description：index.tsx
 * @update: 2022-07-12 17:22
 */

import React, {FC, memo} from 'react';
import {NavLink, Outlet} from 'react-router-dom'

import {DiscoverWrapper, Nav} from '@/pages/Discover/style'
import {discoverNavBarList} from '@/model/navData'

const Discover: FC = () => {

	return (
			<DiscoverWrapper>
				<div className="content wrap-v1">
					<Nav>
						{
							discoverNavBarList.map((item, index) => {
								return (
										<div className={'nav-item'} key={item.title}>
											<NavLink to={item.link}>
												{item.title}
											</NavLink>
										</div>
								)
							})
						}
					</Nav>
				</div>
				{/*{renderRoutes(routes)}*/}
				<Outlet/>
			</DiscoverWrapper>
	);
};

export default memo(Discover);
