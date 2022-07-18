/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 01:55
 * @description：style
 * @update: 2022-07-18 01:55
 */
import styled from 'styled-components'

interface StyledProps {
  hasIcon: boolean
}

export const ThemeHeaderRCMWrapper = styled('div')<StyledProps>`
  background: ${props => props.hasIcon ? `url(${require('@/assets/img/sprite_02.png')}) -225px -156px no-repeat` : ''};
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #C10D0C;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RCMLeft = styled('div')`
  display: flex;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: normal;
  }

  .nav {
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;

    .nav-item {
      display: block;
      color: #666666;

      > a {
        &:hover {
          text-decoration: underline;
        }
      }

      .divider {
        margin: 0 15px;
        color: #ccc;
      }
    }
  }
`


export const RCMRight = styled('div')`

  i {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url(${require('@/assets/img/sprite_02.png')}) 0 -240px no-repeat;
  }
`
