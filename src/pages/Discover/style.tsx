/**
 * @name: style.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-14 00:22
 * @description：style.tsx
 * @update: 2022-07-14 00:22
 */

import styled from 'styled-components'

export const DiscoverWrapper = styled('div')`
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;

  .content {
    height: 100%;
  }
`

export const Nav = styled('div')`
  display: flex;
  align-items: center;
  line-height: 35px;
  padding-left: 180px;

  .nav-item {
    line-height: 35px;


    a {
      color: #fff;
      display: inline-block;
      margin: 7px 17px 0;
      padding: 0 13px;
      line-height: 20px;

      &.active {
        border-radius: 20px;
        background: #9B0909;
      }
    }
  }
`
