/**
 * @name: context
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 15:08
 * @description：context
 * @update: 2022-07-20 15:08
 */
import {createContext} from 'react'
import {AlbumValue} from '@/model/context'

export const UpdateAlbumContext = createContext<Partial<AlbumValue>>({})
