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
import {Image} from 'antd'
import {getSizeImage} from '@/utils/utils'
import {FALLBACK} from '@/constant'

interface Props {
}

const AlbumCover: FC<Props> = (
  {}
) => {
  const {item, size = 130, width = 153} = useContext(UpdateAlbumContext) as AlbumValue

  useEffect(() => {
    console.log(item, size)
  }, [item, size])

  return (
    <AlbumCoverWrapper size={size} width={width}>
      <Image
        src={getSizeImage(item.picUrl as string, size)}
        alt={item.name}
        title={item.name}
        fallback={FALLBACK}
        preview={false}
      />
      <div className="glass image_cover">
        <a className="play-icon sprite_icon" href="/#" title="播放"></a>
      </div>
    </AlbumCoverWrapper>
  );
};

export default memo(AlbumCover);
