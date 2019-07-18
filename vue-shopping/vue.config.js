module.exports = {
  publicPath: './',
  devServer : { //axios跨域测试
    proxy : {
      '/cms' : {
        target : 'http://www.shaanxi.gov.cn:80',
        changeOrigin : true,
        pathRewrite : {
          '^/cms' : ''
        }
      }
    }
  }
}
