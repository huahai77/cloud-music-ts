/**
 * @name: index.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-14 01:00
 * @description：index.tsx
 * @update: 2022-07-14 01:00
 */

import React, {
	memo,
	FC,
	useEffect
} from 'react';

import {
	useTypedDispatch,
	useTypedSelector,
} from '@/hooks/typed'

import {getBannerAsync} from '@/store/recommend/asyncActions'
import {shallowEqual} from 'react-redux'

const Recommend: FC = () => {
	const {banners} = useTypedSelector(state => state.recommend, shallowEqual)
	const dispatch = useTypedDispatch()

	useEffect(() => {
		dispatch(getBannerAsync())
	}, [dispatch])

	return (
			<div>
				{banners.map(item => {
					return <div>{item.targetId}</div>
				})}
			</div>
	);
};

export default memo(Recommend);
