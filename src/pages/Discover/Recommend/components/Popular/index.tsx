/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 01:21
 * @description：index
 * @update: 2022-07-18 01:21
 */

import React, {FC, memo, useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

import {PopularWrapper} from '@/pages/Discover/Recommend/components/Popular/style'
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM'

import {useTypedDispatch} from '@/hooks/typed'
import {getPopularAsync} from '@/store/recommend/asyncActions'
import {HOT_RECOMMEND_LIMIT} from '@/constant'
import {popularNav} from '@/model/recommend'


const Popular: FC = () => {

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getPopularAsync(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  // const handleTitleClick = useCallback((e: any) => {
  //   e.preventDefault()
  //   navigate(`/discover/songs`)
  // }, [navigate])

  const handleNavigate = useCallback((e: any, type?: string) => {
    e.preventDefault()
    navigate(type ? `/discover/songs?cat=${type}` : `/discover/songs`)
  }, [navigate])

  // const handleMoreClick = useCallback((e: any) => {
  //   e.preventDefault()
  //   navigate(`/discover/songs`)
  // }, [navigate])

  return (
    <PopularWrapper>
      <ThemeHeaderRCM
        hasIcon
        hasMore
        title="热门推荐"
        rightText="更多"
        keyWords={popularNav}
        handleTitleClick={handleNavigate}
        handleKeyWordsClick={handleNavigate}
        handleMoreClick={handleNavigate}
      >
      </ThemeHeaderRCM>
    </PopularWrapper>
  );
};

export default memo(Popular);
