/**
 * @name: index
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 01:55
 * @description：index
 * @update: 2022-07-18 01:55
 */

import React, {FC, memo, ReactNode, MouseEvent} from 'react';

import {RCMLeft, RCMRight, ThemeHeaderRCMWrapper} from '@/components/ThemeHeaderRCM/style'


interface Props {
  children?: ReactNode,
  title: string,
  rightText?: string,
  keyWords: Array<any>,
  hasIcon?: boolean,
  hasMore?: boolean,
  handleTitleClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  handleKeyWordsClick?: (e: MouseEvent<HTMLAnchorElement>, type?: string) => void,
  handleMoreClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

const ThemeHeaderRCM: FC<Props> = (
  {
    title,
    rightText = '更多',
    keyWords,
    hasIcon = false,
    hasMore = false,
    handleTitleClick,
    handleKeyWordsClick,
    handleMoreClick
  }
) => {

  return (
    <ThemeHeaderRCMWrapper hasIcon={hasIcon}>
      <RCMLeft>
        <a className="title" href="#/" onClick={e => handleTitleClick?.(e)}>{title}</a>
        <div className="nav">
          {
            keyWords.map((item, index) => {
              return (
                <span key={item.name} className="nav-item">
                <a href="#/" onClick={(e) => handleKeyWordsClick?.(e, item.name)}>{item.name}</a>
                <span className="divider"
                      style={{visibility: index === keyWords.length - 1 ? 'hidden' : 'visible'}}>|</span>
              </span>
              )
            })
          }
        </div>
      </RCMLeft>

      {
        hasMore && <RCMRight>
          <a href="#/" onClick={e => handleMoreClick?.(e)}>{rightText}</a>
          <i>&nbsp;</i>
        </RCMRight>
      }
    </ThemeHeaderRCMWrapper>
  );
};

export default memo(ThemeHeaderRCM);
