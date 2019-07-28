module.exports = {
 devServer: {
   proxy: { // 设置代理,解决跨域问题
     '/video': {
       target: 'http://cache.video.iqiyi.com', // 接口的域名
       secure: false,  // 如果是https接口，需要配置这个参数
       changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
       pathRewrite: {
         '^/video': ''
       }
     },
     '/cms' : {
       target : 'http://www.shaanxi.gov.cn',
       changeOrigin : true,
       pathRewrite : {
         '^/cms' : ''
       }
     }
   }
 }
}
