/**
 * @name: actionCreators
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 23:26
 * @description：actionCreators
 * @update: 2022-07-15 23:26
 */

// TODO redux写法
// import * as actionTypes from './constants'
// import {Banner} from '@/types/recommend'

// TODO toolkit写法
// import Recommend from '@/api/recommend'
// import {changeBannerAction} from '@/store/recommend/slice'

// TODO redux写法 用toolkit不用自己定义type了
// const changeBannerAction = (banners: Banner[]) => ({
// 	type: actionTypes.CHANGE_BANNER,
// 	banners
// })

// export const getBannerAction = (): any => async (dispatch: any): Promise<void> => {
// 	const banners = await Recommend.fetchBanner()
// 	dispatch(changeBannerAction(banners))
// }

export default 1
