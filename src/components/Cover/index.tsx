/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 14:48
 * @description：index
 * @update: 2022-07-18 14:48
 */

import React, {FC, memo} from 'react';

import {Image} from 'antd'

import {CoverWrapper} from '@/components/Cover/style'
import {Popular} from '@/model/recommend'
import {FALLBACK} from '@/constant'
import {getLargeNumber, getSizeImage} from '@/utils/utils'

interface Props {
  item: Popular
}

const Cover: FC<Props> = ({item}) => {

  return (
    <CoverWrapper>
      <Image
        src={getSizeImage(item.picUrl, 140)}
        alt={item.name}
        title={item.name}
        fallback={FALLBACK}
        preview={false}
      />
      <div className="glass sprite_cover">
        <div className="play-bar sprite_cover">
          <span className="count-wrap">
            <i className="music-icon sprite_icon"></i>
            <em>{getLargeNumber(item.playCount as number)}</em>
          </span>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a className="play-icon sprite_icon" href="/#" title="播放"></a>
        </div>
      </div>
    </CoverWrapper>
  );
};

export default memo(Cover);
