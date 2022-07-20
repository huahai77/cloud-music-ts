/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 17:20
 * @description：index
 * @update: 2022-07-18 17:20
 */

import React, {FC, memo, useCallback, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import {CarouselRef} from 'antd/lib/carousel'
import {UpdateAlbumContext} from '@/config/context'
import {ALBUM_PAGE_SIZE} from '@/constant'

import {useTypedDispatch, useTypedSelector} from '@/hooks/typed'
import {getUpdateAlbumAsync} from '@/store/recommend/asyncActions'

import {Main, UpdateAlbumWrapper, Slideshow, Control} from '@/pages/Discover/Recommend/components/UpdateAlbum/style'
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM'
import {Carousel} from 'antd'
import AlbumCard from '@/pages/Discover/Recommend/components/UpdateAlbum/components/AlbumCard'


const UpdateAlbum: FC = () => {
  const {updateAlbumList} = useTypedSelector(state => state.recommend)
  const albumRef = useRef<CarouselRef | any>()
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUpdateAlbumAsync({
      limit: 10,
      area: 'ZH'
    }))
  }, [dispatch])

  const handleNavigate = useCallback((e: any) => {
    e.preventDefault()
    navigate(`/discover/album`)
  }, [navigate])

  const _diffListPageNum = (list: string | any[]) => {
    return Array.from(Array(list.length / ALBUM_PAGE_SIZE).keys())
  }

  const _diffSliceList = (num: number) => {
    return updateAlbumList.slice(num * ALBUM_PAGE_SIZE, (num + 1) * ALBUM_PAGE_SIZE)
  }

  return (
    <UpdateAlbumWrapper>
      < ThemeHeaderRCM
        title="新碟上架"
        hasIcon
        hasMore
        handleTitleClick={handleNavigate}
        handleMoreClick={handleNavigate}
      />

      <Main>
        <Slideshow>
          <Carousel ref={albumRef} dots={false}>
            {
              _diffListPageNum(updateAlbumList).map(num => {
                return (
                  <div className="slide" key={num}>
                    {
                      _diffSliceList(num).map(item => {
                        return (
                          <UpdateAlbumContext.Provider key={item.id} value={{value: item}}>
                            <AlbumCard
                              size={100}
                              width={118}
                            />
                          </UpdateAlbumContext.Provider>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </Slideshow>
        <Control>
          <div className="control c-left" onClick={_ => albumRef.current.prev()}/>
          <div className="control c-right" onClick={_ => albumRef.current.next()}/>
        </Control>
      </Main>
    </UpdateAlbumWrapper>
  );
};

export default memo(UpdateAlbum);
