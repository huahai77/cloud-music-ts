/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 18:07
 * @description：index
 * @update: 2022-07-20 18:07
 */

import React, {FC, memo} from 'react';
import {Main, Wrapper} from '@/pages/Discover/Recommend/components/Ranking/style'
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM'

const Ranking: FC = () => {
  return (
    <Wrapper>
      <ThemeHeaderRCM
        title="榜单"
        hasIcon
        hasMore
      />
      <Main>
        Main
      </Main>
    </Wrapper>
  );
};

export default memo(Ranking);
