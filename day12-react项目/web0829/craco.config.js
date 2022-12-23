// 这个文件可以修改craco中默认的配置项.如果写的内容在craco里面没有,则相当于添加了配置项,如果说我们写的配置项,craco中默认存在,则我们写的会覆盖默认的配置项
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
