/**
 * @name: index.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-14 01:00
 * @description：index.tsx
 * @update: 2022-07-14 01:00
 */

import React, {
  memo,
  FC,
} from 'react';

import Banner from './components/Banner'
import {
  Main,
  RecommendWrapper
} from '@/pages/Discover/Recommend/style'
import Popular from '@/pages/Discover/Recommend/components/Popular'
import UpdateAlbum from '@/pages/Discover/Recommend/components/UpdateAlbum'
import Ranking from '@/pages/Discover/Recommend/components/Ranking'


const Recommend: FC = () => {
  return (
    <RecommendWrapper>
      <Banner/>
      <Main className="wrap-v2">
        <div className="content wrap-v3">
          <Popular/>
          <UpdateAlbum/>
          <Ranking/>
        </div>
        <div className="right">
          2
        </div>
      </Main>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
