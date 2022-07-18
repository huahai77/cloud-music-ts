/**
 * @name: Index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-16 15:09
 * @description：Index
 * @update: 2022-07-16 15:09
 */

import React, {
  FC,
  memo,
  useEffect,
  useRef,
  useCallback,
  useState
} from 'react';

import {Carousel} from 'antd';
import {BannerWrapper, Control, Download, Slideshow} from './style'

import {
  useTypedDispatch,
  useTypedSelector,
} from '@/hooks/typed'
import {shallowEqual} from 'react-redux'

import {getBannerAsync} from '@/store/recommend/asyncActions'

const Banner: FC = () => {
  const [bannerCurrIdx, setBannerCurrIdx] = useState<number>(0)
  const bannerRef = useRef<any>()
  const {banners} = useTypedSelector(state => state.recommend, shallowEqual)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getBannerAsync())
  }, [dispatch])

  const handleBannerChange = useCallback((to: number) => {
    setTimeout(_ => setBannerCurrIdx(to), 0)
  }, [])

  const bgImg = banners[bannerCurrIdx] && `${banners[bannerCurrIdx].imageUrl}?imageView&blur=40x20`
  return (
    <BannerWrapper bgImg={bgImg}>
      <div className="banner-main wrap-v2">
        <Slideshow>
          <Carousel autoplay ref={bannerRef} beforeChange={handleBannerChange}>
            {
              banners.map((item) => {
                return (
                  <div className="banner-item" key={item.targetId}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </Slideshow>
        <Download/>
        <Control>
          <div className="control c-left" onClick={_ => bannerRef.current.prev()}/>
          <div className="control c-right" onClick={_ => bannerRef.current.next()}/>
        </Control>
      </div>
    </BannerWrapper>
  );
};

export default memo(Banner);
