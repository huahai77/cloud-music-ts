/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 14:26
 * @description：index
 * @update: 2022-07-20 14:26
 */

import React, {FC, memo} from 'react';
import {AlbumCardWrapper} from '@/pages/Discover/Recommend/components/UpdateAlbum/components/AlbumCard/style'
import AlbumCover from '@/components/AlbumCover'

interface Props {
  size: number
  width: number
}

const AlbumCard: FC<Props> = (
  {
    size,
    width = 153,
  }
) => {
  return (
    <AlbumCardWrapper>
      <AlbumCover/>
    </AlbumCardWrapper>
  );
};

export default memo(AlbumCard);
