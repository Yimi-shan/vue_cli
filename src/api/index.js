import axios from 'axios';
var qs = require('qs');


if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL =  /com/.test(window.location.href) ? '' : 'http://tst.yaodunchain.fruitsgood.com';
}

import VueRouter from 'vue-router';


//get请求
export const home = () => {
  return axios.get('/api/index/index');
}
//post请求
export const article = (id)=>{
	const params = qs.stringify({'id':id});
	return axios.post('/api/article', params);
}
