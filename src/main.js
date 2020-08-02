import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
import "./assets/icon/iconfont.js"
import './assets/icon/iconfont.css'
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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')