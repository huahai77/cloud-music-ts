/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 17:20
 * @description：index
 * @update: 2022-07-18 17:20
 */

import React, {FC, memo, useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

import {useTypedDispatch} from '@/hooks/typed'
import {getUpdateAlbumAsync} from '@/store/recommend/asyncActions'

import {UpdateAlbumWrapper} from '@/pages/Discover/Recommend/components/UpdateAlbum/style'
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM'


const UpdateAlbum: FC = () => {
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUpdateAlbumAsync({
      area: 'ZH',
      limit: 10
    }))
  }, [dispatch])

  const handleNavigate = useCallback((e: any) => {
    e.preventDefault()
    navigate(`/discover/album`)
  }, [navigate])

  return (
    <UpdateAlbumWrapper>
      <ThemeHeaderRCM
        title="新碟上架"
        hasIcon
        hasMore
        handleTitleClick={handleNavigate}
        handleMoreClick={handleNavigate}
      />

      
    </UpdateAlbumWrapper>
  );
};

export default memo(UpdateAlbum);
