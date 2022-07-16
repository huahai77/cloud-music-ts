import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import type {RootState, AppDispatch} from '@/store'

/**
 * @name: typed
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 02:17
 * @description：typed
 * @update: 2022-07-16 02:17
 */


// 配置新的api导出 useAppDispatch映射方法 useAppSelector映射数据
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
