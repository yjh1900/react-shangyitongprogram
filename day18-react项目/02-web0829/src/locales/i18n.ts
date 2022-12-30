// 引入第三方库
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//导入语言包
import en_US from './lang/en_US.json'
import zh_CN from './lang/zh_CN.json'
console.log(en_US, zh_CN)

// 语言包配置对象
// const resources = {
//   en: en_US,
//   zh: zh_CN,
// }

// 初始化i18n
i18n.use(initReactI18next).init({
  resources: {
    en: en_US,
    zh: zh_CN,
  }, // 所有语言包
  lng: 'en', // 默认语言,值是resources的键
  interpolation: {
    //escapeValue:转义传入的值以避免xss注入.
    //react已经处理了,这里设置为false
    escapeValue: false,
  },
})
