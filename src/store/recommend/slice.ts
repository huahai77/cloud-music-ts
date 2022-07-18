/**
 * @name: reducer
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 19:55
 * @description：reducer
 * @update: 2022-07-15 19:55
 */

// TODO toolkit写法
import {createSlice} from '@reduxjs/toolkit'
import {RecommendProps} from '@/model/store'
import {NAMESPACE} from '@/store/recommend/constants'
import {getBannerAsync, getPopularAsync} from './asyncActions'

const initialState: RecommendProps = {
  banners: []
}

const slice = createSlice({
  name: `${NAMESPACE}`,
  initialState,
  reducers: {
    // changeBannerAction: (state, action) => {
    // 	state.banners = action.payload
    // }
  },
  // extraReducers:  {
  //   [getPopularAsync.fulfilled.type]: (state, {payload}) => {
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(getBannerAsync.fulfilled, (state, {payload}) => {
      // console.log(state, payload)
      state.banners = payload
    })
    builder.addCase(getBannerAsync.rejected, (state, action) => {
      console.log(action)
    })
    builder.addCase(getPopularAsync.fulfilled, (state, {payload}) => {
      console.log(state, payload)
      // state.banners = payload
    })
    builder.addCase(getPopularAsync.rejected, (state, action) => {
      console.log(action)
    })
  },
})

// export const {changeBannerAction} = slice.actions

export default slice.reducer
