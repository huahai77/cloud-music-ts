/**
 * @name: style
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 14:48
 * @description：style
 * @update: 2022-07-18 14:48
 */
import styled from 'styled-components'


export const CoverWrapper = styled('div')`
  width: 100%;
  position: relative;

  .ant-image {
    width: 100%;
  }

  .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 0;

    .play-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;

      .count-wrap {
        display: flex;
        align-items: center;

        .music-icon {
          margin-right: 5px;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
      }

      .play-icon {
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
`
