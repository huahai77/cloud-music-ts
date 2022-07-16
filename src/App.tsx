/**
 * @name: App.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-12 15:37
 * @description：App.tsx
 * @update: 2022-07-12 15:37
 */

import * as React from 'react'
import {FC, memo} from 'react'
import {Provider} from 'react-redux'
import Routes from '@/router'
import store from '@/store'

import AppHeader from '@/components/AppHeader'


const App: FC = () => {
	return (
			<Provider store={store}>
				<AppHeader/>
				{Routes()}
			</Provider>
	);
};

export default memo(App);

