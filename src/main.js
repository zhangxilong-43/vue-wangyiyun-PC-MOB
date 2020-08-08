import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import "../public/icon/iconfont.js"
import '../public/icon/iconfont.css'
import './global.js'

import axios from 'axios'
axios.defaults.baseURL = 'https://autumnfish.cn/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

const setHtmlFontSize = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (htmlWidth >= 750) {
        htmlWidth = 750;
    }
    if (htmlWidth <= 320) {
        htmlWidth = 320;
    }
    htmlDom.style.fontSize = `${htmlWidth / 15}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

Vue.filter('dateFormat1', function(duration) {
    let min = parseInt(duration / 1000 / 60)
    let sec = parseInt((duration / 1000) % 60)
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec
    return min + ':' + sec
})

Vue.filter('dateFormat2', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + 1 + '').padStart(2, '0')

    return `${y}-${m}-${d} `
})

Vue.filter('dateFormat3', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + 1 + '').padStart(2, '0')
    const hh = (dt.getHours() + 1 + '').padStart(2, '0')
    const mm = (dt.getMinutes() + 1 + '').padStart(2, '0')
    const ss = (dt.getSeconds() + 1 + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.filter('dateFormat4', function(originVal) {
    if (originVal >= 10000) {
        const str = originVal.toString().slice(0, -4)
        return str + '万'
    } else {
        return originVal
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')