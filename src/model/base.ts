/**
 * @name: base
 * @author: 偶尔会翻身的咸鱼
 * @date: 2022-07-15 23:31
 * @description：base
 * @update: 2022-07-15 23:31
 */

/**
 * 任意参数
 */
export interface Base {
  [propName: string]: any;
}

/**
 * 映射为可选
 */

type ReadonlyType<T> = {
  [P in keyof T]?: T[P];
};

interface IUser {
  name: string;
  age: number;
  address: string;
}

type ReadonlyUser = ReadonlyType<IUser>

const user: ReadonlyUser = {}

console.log(user)
