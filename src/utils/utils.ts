/**
 * @name: utils
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-18 16:19
 * @description：utils
 * @update: 2022-07-18 16:19
 */

/**
 * 请求指定尺寸图片
 * @param imgUrl
 * @param size
 */
export const getSizeImage = (imgUrl: string, size: number) => {
  return `${imgUrl}?param=${size}x${size}`;
}

/**
 * 转换浏览大数字
 * @param count
 */
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

/**
 * 文本复制功能
 * @param text
 * @param fn
 */
export const copy = function (text: string, fn: () => any) { // 复制功能
  if (typeof document.execCommand !== 'function') {
    console.log('复制失败，请长按复制');
    return;
  }
  var dom = document.createElement('textarea');
  dom.value = text;
  dom.setAttribute('style', 'display: block;width: 1px;height: 1px;');
  document.body.appendChild(dom);
  dom.select();
  var result = document.execCommand('copy');
  document.body.removeChild(dom);
  if (result) {
    console.log('复制成功');
    typeof fn === 'function' && fn();
    return;
  }
  if (typeof document.createRange !== 'function') {
    console.log('复制失败，请长按复制');
    return;
  }
  var range = document.createRange();
  var div = document.createElement('div');
  div.innerHTML = text;
  div.setAttribute('style', 'height: 1px;fontSize: 1px;overflow: hidden;');
  document.body.appendChild(div);
  range.selectNode(div);
  var selection: any = window.getSelection();
  console.log(selection);
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
  document.execCommand('copy');
  typeof fn === 'function' && fn();
  console.log('复制成功');
};

/**
 * 常用正则验证
 * @param str
 * @param type
 */
export const checkStr = (str: string, type: any) => { // 常用正则验证，注意type大小写
  switch (type) {
    case 'phone': // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'postal': // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': // 邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': // 金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': // 网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date': // 日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);
    case 'number': // 数字
      return /^[0-9]$/.test(str);
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': // 中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': // 小写
      return /^[a-z]+$/.test(str);
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};
