/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-17 16:22
 * @description：style
 * @update: 2022-07-17 16:22
 */
import styled from 'styled-components'

interface StyledProps {
	bgImg: string,
}

export const BannerWrapper = styled('div')<StyledProps>`
  background: url(${(props) => props.bgImg}) center center/6000px;
  height: 270px;

  .banner-main {
    position: relative;
    height: 100%;
    display: flex;
  }
`

export const Slideshow = styled('div')`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 100%;

    .image {
      width: 100%;
    }
  }
`

export const Download = styled('a').attrs({
	href: "https://music.163.com/#/download",
	target: "_blank"
})`
  background: url(${require('@/assets/img/download.png')}) no-repeat;
  flex: 1;
`

export const Control = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .control {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;
    margin-top: -31px;

    &:hover {
      background-color: #eee;
    }
  }

  .c-left {
    left: -68px;
    background-position: 0 -360px;
  }

  .c-right {
    right: -68px;
    background-position: 0 -508px;
  }
`
