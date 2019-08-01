import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import interfaceApi from './server/contactApi'

import {Toast} from 'vant'

Vue.use(vueAxios, axios); //vue-axios 放前面

const config = {
  baseURL: 'http://localhost:9000/api',
  timeout: 3000
}

let instance = axios.create(config);

const http = {};
/*接口统一处理*/
for (let key in interfaceApi) {
  let server = interfaceApi[key];
  http[key] = async function (params, isformData = false, config = {}) {
    let url = server.url;
    let newParams = {};

    if (params && isformData) {
      newParams = new FormData();
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params;
    }

    if (server.method === 'put' || server.method === 'post' || server.method === 'patch') {
      return await instance[server.method](url, newParams, config)
    } else if (server.method === 'delete' || server.method === 'get') {
      config.params = newParams;
      return await instance[server.method](url, config)
    } else {
      Toast('非法参数');
      return false;
    }

  }

}

/*拦截器*/
instance.interceptors.request.use(config => {
  Toast.loading({
    mask: false,
    duration: 0,
    forbidClick: true,
    message: '加载中 ...'
  })
  return config;
}, err => {
  Toast.clear();
  Toast(err.response.statusText + ' 请求错误，稍后再试！');
  return Promise.reject(err);
})

instance.interceptors.response.use(res => {
  Toast.clear();
  Toast.loading({
    mask: false,
    duration: 300,
    forbidClick: true,
    message: '操作成功'
  })
  return res.data
}, err => {
  console.log(err)
  Toast.clear();
  Toast(err.response.statusText + ' 读取数据失败，稍后再试！');
  return Promise.reject(err);
})


export default http

