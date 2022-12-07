/*
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 20:12:33
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 15:30:14
 * @FilePath: /resume/src/utils/type/index.ts
 * @Description: 类型
 */
export interface Navbar {
  id: number;
  name: string;
  href: string;
}

export interface About {
  id: number;
  label: string;
  value: string;
  icon: string;
}

export interface Service {
  id: number;
  languageName: string;
  proficiency: number | string;
  color: string;
  logo: string;
  readme: string;
  readMore: string;
}