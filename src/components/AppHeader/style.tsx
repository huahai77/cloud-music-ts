/**
 * @name: style.tsx
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-13 10:17
 * @description：style.tsx
 * @update: 2022-07-13 10:17
 */

import styled from 'styled-components'

export const HeaderWrapper = styled('div')`
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .line {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeftWrapper = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;

  .logo {
    width: 176px;
    height: 100%;
    background-position: 0 0;

    > a {
      display: block;
      text-indent: -9999px;
      float: left;
      width: 100%;
      height: 100%;
      padding-right: 20px;
    }
  }

  .nav {
    font-size: 14px;
    height: 100%;
    display: flex;
    align-items: center;

    .nav-item {
      position: relative;
      height: 69px;
      line-height: 69px;

      a {
        height: 100%;
        display: block;
        padding: 0 20px;
        color: #ccc;

        .cor {
          display: block;
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
        }
      }

      &:hover, &.__active {
        background: #000;

        > a {
          color: #fff;
        }
      }

      &:last-of-type {
        &::after {
          position: absolute;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          content: "";
          width: 28px;
          height: 14px;
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
    }
  }
`

export const HeaderRightWrapper = styled('div')`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .login {
    color: #787878;
    margin-left: 20px;

    &:hover {
      text-decoration: underline;
      color: #666;
    }
  }

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .creator {
    margin-left: 20px;
    display: block;
    width: 90px;
    height: 100%;
    text-align: center;
    line-height: 32px;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    color: #ccc;

    &:hover {
      color: #fff;
      border: 1px solid #ccc;
    }
  }
`

export const SubNavWrapper = styled('div')`
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;

  .content {
    height: 100%;
    background-color: red;
  }
`
