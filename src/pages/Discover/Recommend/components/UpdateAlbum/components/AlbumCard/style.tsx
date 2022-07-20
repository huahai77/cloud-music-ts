/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-20 14:27
 * @description：style
 * @update: 2022-07-20 14:27
 */
import styled from 'styled-components'

interface StyleProps {
  width: number
}

export const AlbumCardWrapper = styled('div')<StyleProps>`
  width: ${props => props.width + 'px'};
  font-size: 12px;
  color: #333;

  a:hover {
    text-decoration: underline;
  }

  .album-desc {


  }

  .album-score {

  }
`
