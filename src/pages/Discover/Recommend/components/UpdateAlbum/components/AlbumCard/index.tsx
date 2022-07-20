/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 14:26
 * @description：index
 * @update: 2022-07-20 14:26
 */

import React, {FC, memo, useContext} from 'react';
import {AlbumCardWrapper} from '@/pages/Discover/Recommend/components/UpdateAlbum/components/AlbumCard/style'
import AlbumCover from '@/components/AlbumCover'
import {UpdateAlbumContext} from '@/config/context'
import {AlbumValue} from '@/model/context'

const AlbumCard: FC = () => {
  const {width, item} = useContext(UpdateAlbumContext) as AlbumValue

  const _getVisible = (index: number) => ({opacity: index === item.artists.length - 1 ? 0 : 1})

  return (
    <AlbumCardWrapper width={width}>
      <AlbumCover/>
      <p className="album-desc text-nowrap">
        <a href="/#" title={item.name}>
          {item.name}
        </a>
      </p>
      <p className="album-score text-nowrap">
        {
          item.artists.map((n, r) => {
            return (
              <>
                <a href="/#" title={n.name}>
                  {n.name}
                </a>
                <span style={_getVisible(r)}> &nbsp;/&nbsp; </span>
              </>
            )
          })
        }
      </p>
    </AlbumCardWrapper>
  );
};

export default memo(AlbumCard);
