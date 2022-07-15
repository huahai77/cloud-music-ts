/**
 * @name: App.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-12 15:37
 * @description：App.tsx
 * @update: 2022-07-12 15:37
 */

import * as React from 'react'
import {FC, Fragment, memo} from 'react'
import Routes from './router'

import AppHeader from '@/components/AppHeader'


const App: FC = () => {
	return (
			<Fragment>
				<AppHeader/>
				{Routes()}
			</Fragment>
	);
};

export default memo(App);

