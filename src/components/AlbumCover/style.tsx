/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 14:18
 * @description：style
 * @update: 2022-07-20 14:18
 */
import styled from 'styled-components'

interface StyleProps {
  size: number
  width: number
}

export const AlbumCoverWrapper = styled('div')<StyleProps>`
  width: ${props => props.width + 'px'};
  height: ${props => props.size + 'px'};
  position: relative;
  box-shadow: 10px 3px 10px #dcdcdc;
  margin-bottom: 8px;

  .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 -570px;
    cursor: pointer;

    &:hover {
      > .play-icon {
        visibility: visible;
      }
    }

    .play-icon {
      visibility: hidden;
      position: absolute;
      display: inline-block;
      width: 16px;
      height: 17px;
      right: 30px;
      bottom: 5px;
      background-position: 0 0;

    }
  }
`
