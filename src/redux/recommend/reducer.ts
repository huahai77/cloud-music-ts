/**
 * @name: reducer
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 19:55
 * @description：reducer
 * @update: 2022-07-15 19:55
 */

// TODO redux写法
// import * as actionTypes from './constants'
// import {RecommendProps} from '@/types/store'
//
//
// const InitState = {
// 	banners: []
// }
//
// const reducer = (state: RecommendProps = InitState, action: any): RecommendProps => {
// 	switch (action.type) {
// 		case actionTypes.CHANGE_BANNER:
// 			return {...state, banners: action.banners}
// 		default:
// 			return state
// 	}
// }
//
// export default reducer

// TODO toolkit写法
import {createSlice} from '@reduxjs/toolkit'
import {RecommendProps} from '@/model/store'

const initialState: RecommendProps = {
	banners: []
}

const slice = createSlice({
	name: 'recommend',
	initialState,
	reducers: {
		changeBannerAction: (state, action) => {
			state.banners = action.payload
		}
	}
})

export const {changeBannerAction} = slice.actions

export default slice.reducer
