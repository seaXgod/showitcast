import axios from 'axios'

const httpHelper = {}

httpHelper.install = function fn (Vue) {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  Vue.prototype.$http = axios
}

export default httpHelper

// const Http = {}

// Http.install = function (Vue,options) {

//   //添加实例方法
//   Vue.prototype.$http = axios

// }

// //导出
// export default Http
