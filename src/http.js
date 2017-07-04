import axios from 'axios'
import router from './router'
import store from './store'
var querystring = require('querystring');

var mode = 0; //0:本地 1:陈测试 2:赵测试 3:生产;

// axios 配置
axios.defaults.timeout = 10000;
if (mode === 0) {
    axios.defaults.baseURL = 'http://192.168.0.104:8093/mock';
} else if (mode === 1) {
    axios.defaults.baseURL = 'http://192.168.3.102:8088'; //chen
} else if (mode === 2) {
    axios.defaults.baseURL = 'http://192.168.0.113:8080'; //peng
} else {
    axios.defaults.baseURL = 'https://api.lanrenyun.cn';
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
        //开启loading
        store.state.test.loadingFlag = true;
        //post formData形式提交，把传参处理一下。
        config.transformRequest = function(data) {
            return querystring.stringify({ json: data })
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        //关闭loading
        store.state.test.loadingFlag = false;
        if (response.data.isSuccess == -1) {
            //TODO
        } else {
            return response.data;
        }
    },
    error => {
        //关闭loading
        store.state.test.loadingFlag = false;
        if (error.response) {
            //TODO
        }
        return Promise.reject(error.response.data)
    });

export default axios;