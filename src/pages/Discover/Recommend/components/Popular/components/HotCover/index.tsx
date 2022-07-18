/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 15:51
 * @description：index
 * @update: 2022-07-18 15:51
 */

import React, {FC, memo} from 'react';

import {
  HotCoverWrapper,
} from '@/pages/Discover/Recommend/components/Popular/components/HotCover/style'

import {Popular} from '@/model/recommend'
import Cover from '@/components/Cover'

interface Props {
  item: Popular
}

const HotCover: FC<Props> = ({item}) => {
  return (
    <HotCoverWrapper>
      <Cover item={item}/>
      <a className="song-desc">
        {item.name}
      </a>
      <div className="song-source">
        {item.copywriter && `by ${item.copywriter}`}
      </div>
    </HotCoverWrapper>
  );
};

export default memo(HotCover);
