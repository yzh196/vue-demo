import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

import {Toast} from 'vant'

Vue.use(vueAxios, axios); //vue-axios 放前面

const config = {
  baseURL: 'http://localhost:9000/api',
  timeout: 3000
}

let instance = axios.create(config);

instance.interceptors.request.use(config => {
  return config;
}, err => {
  Toast(err.response.statusText);
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  Toast(err.response.statusText);
  return Promise.reject(err)
})


export default instance

