/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 14:26
 * @description：index
 * @update: 2022-07-15 14:26
 */
import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import App from './App';
import './index.css'


const ReactApp: FC = () => {
	return (
			<HashRouter>
				<App/>
			</HashRouter>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
		<ReactApp/>
);
