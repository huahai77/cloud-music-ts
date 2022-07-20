/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 17:21
 * @description：style
 * @update: 2022-07-18 17:21
 */

import styled from 'styled-components'

export const UpdateAlbumWrapper = styled('div')`
  padding-top: 50px;
`

export const Main = styled('div')`
  margin-top: 20px;
  width: 100%;
  height: 184px;
  padding: 0 20px;
  background: #f5f5f5;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  position: relative;
`

export const Slideshow = styled('div')`
  width: 100%;
  height: 150px;

  .ant-carousel, .slick-list {
    height: 150px;
    overflow: hidden;
  }

  .slide {
    display: flex !important;
    align-items: center;
    justify-content: space-between;

    img {
      width: 120px;
      height: 120px;
    }
  }
`

export const Control = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .control {
    position: absolute;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-image: url(${require("@/assets/img/sprite_02.png")});
    background-color: transparent;

    &:hover {

    }
  }

  .c-left {
    left: 0;
    background-position: -260px -75px;
  }

  .c-right {
    right: -5px;
    background-position: -300px -75px;
  }
`
