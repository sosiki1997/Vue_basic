// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入store
import store from "./store"; //默认拿index

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建vm
new Vue({
  el: "#app", // 这里的app要小写
  render: (h) => h(App),
  store,
});
