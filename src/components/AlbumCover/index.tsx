/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 14:18
 * @description：index
 * @update: 2022-07-20 14:18
 */

import React, {FC, memo, useContext, useEffect} from 'react';
import {AlbumCoverWrapper} from '@/components/AlbumCover/style'
import {UpdateAlbumContext} from '@/config/context'
import {AlbumValue} from '@/model/context'

interface Props {
}

const AlbumCover: FC<Props> = (
  {}
) => {
  const {value} = useContext(UpdateAlbumContext) as AlbumValue

  useEffect(() => {
    console.log(value)
  }, [])

  return (
    <AlbumCoverWrapper>
    </AlbumCoverWrapper>
  );
};

export default memo(AlbumCover);
