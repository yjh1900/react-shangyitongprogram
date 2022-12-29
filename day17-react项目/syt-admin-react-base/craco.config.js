const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    // 自定义主题
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
    // 路径别名
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
  // 开发服务器配置
  devServer: {
    // 激活代理服务器
    proxy: {
      // 将来以/dev-api开头的请求，就会被开发服务器转发到目标服务器去。

      // 浏览器给3000服务器发请求: http://localhost:3000/xxx 这个请求就不会被转发到5000
      // 浏览器给3000服务器发请求: http://localhost:3000/dev-api/xxx 这个请求就会被转发给5000
      '/dev-api': {
        // 需要转发的请求前缀
        target: 'http://syt-api.atguigu.cn', // 目标服务器地址
        // 如果写了这个changeOrigin:true.则3000服务器发请求给接口服务器的时候,请求头里面的origin的值就是http://syt-api.atguigu.cn
        // 如果写了这个changeOrigin:false.则3000服务器发请求给接口服务器的时候,请求头里面的origin的值就是http://localhost:3000
        changeOrigin: true, // 允许跨域

        // 假设目标服务器接口地址就是: http://syt-api.atguigu.cn/xxx
        // 我们要让3000服务器转发请求.如果不配置pathRewrite,则请求路径如下:
        // http://localhost:3000/dev-api/xxx,然后3000给目标服务器发请求的地址是:
        //http://syt-api.atguigu.cn/dev-api/xxx

        //如果配置了parhRewrite:,则请求路径如下http://localhost:3000/dev-api/xxx, 然后3000给目标服务器发请求的地址是http://syt-api.atguigu.cn/xxx
        pathRewrite: {
          // 路径重写
          '^/dev-api': '',
        },
      },
    },
  },
}
