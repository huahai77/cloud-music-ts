/**
 * @name: utils
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 16:19
 * @description：utils
 * @update: 2022-07-18 16:19
 */

export const getSizeImage = (imgUrl: string, size: number) => {
  return `${imgUrl}?param=${size}x${size}`;
}

export const getLargeNumber = (count: number) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}
