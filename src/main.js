// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import mofang from 'mofang5.0-vue'
import 'mofang5.0-vue/dist/mofang.css'
import App from './App.vue'
import fastclick from 'fastclick'

// TODO 需要使用 vConsole 的同学请打开注释即可
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

import 'common/stylus/index.styl'

Vue.use(mofang)

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
