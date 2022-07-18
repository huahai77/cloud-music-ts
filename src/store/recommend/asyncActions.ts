/**
 * @name: asyncActions
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 13:33
 * @description：asyncActions
 * @update: 2022-07-16 13:33
 */

// TODO toolkit写法
// import {Dispatch} from "redux"
//
// import {changeBannerAction} from './slice'
//
// import Recommend from '@/api/recommend'
//
// export const getBannerAction = () => async (dispatch: Dispatch): Promise<void> => {
// 	const banners = await Recommend.fetchBanner()
// 	dispatch(changeBannerAction(banners))
// }

import {createAsyncThunk} from '@reduxjs/toolkit'
import {NAMESPACE} from '@/store/recommend/constants'
import Recommend from '@/api/recommend'

/**
 * 获取banner轮播图
 */
export const getBannerAsync = createAsyncThunk(
  `${NAMESPACE}/banner`,
  async () => await Recommend.fetchBanner(),
)

export const getPopularAsync = createAsyncThunk(
  `${NAMESPACE}/popular`,
  async (limit: number) => await Recommend.fetchPopular(limit)
)
