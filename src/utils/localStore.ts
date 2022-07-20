/**
 * @name: localStore
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-19 11:44
 * @description：localStore
 * @update: 2022-07-19 11:44
 */

//localStorage 本地存储
export const localStore = {
  // 本地存储
  set: function (name: string, value: any, day: number) {
    // 设置
    let d = new Date();
    let time = 0;
    day = typeof day === 'undefined' || !day ? 1 : day; // 时间,默认存储1天
    time = d.setHours(d.getHours() + 24 * day); // 毫秒
    localStorage.setItem(
      name,
      JSON.stringify({
        data: value,
        time: time,
      })
    );
  },
  get: function (name: string) {
    // 获取
    let data = localStorage.getItem(name);
    if (!data) {
      return null;
    }
    let obj = JSON.parse(data);
    if (new Date().getTime() > obj.time) {
      // 过期
      localStorage.removeItem(name);
      return null;
    } else {
      return obj.data;
    }
  },
  clear: function (name: string) {
    // 清空
    if (name) {
      // 删除键为name的缓存
      localStorage.removeItem(name);
    } else {
      // 清空全部
      localStorage.clear();
    }
  },
};

// cookie操作【set，get，del】
export const cookie = { // cookie操作【set，get，del】
  set: function (name: string, value: string, day: any) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + (day || 30));
    document.cookie = name + '=' + value + ';expires=' + oDate + '; path=/;';
  },
  get: function (name: string) {
    let str = document.cookie;
    let arr = str.split('; ');
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i].split('=');
      if (newArr[0] === name) {
        return newArr[1];
      }
    }
  },
  del: function (name: string) {
    this.set(name, '', -1);
  }
};
