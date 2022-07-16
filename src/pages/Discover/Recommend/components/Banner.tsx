/**
 * @name: Banner
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 15:09
 * @description：Banner
 * @update: 2022-07-16 15:09
 */

import React, {FC, memo, CSSProperties} from 'react';

import {Carousel} from 'antd';

const contentStyle: CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

const Banner: FC = () => {
	return (
			<Carousel autoplay>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
	);
};

export default memo(Banner);
