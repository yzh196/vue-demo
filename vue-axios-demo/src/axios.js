import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios); //vue-axios 放前面

const config = {
  baseURL: 'http://localhost:9000/api',
  timeout: 3000
}

let instance = axios.create(config);

export default instance;

