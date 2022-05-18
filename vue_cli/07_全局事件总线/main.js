// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// const Demo = Vue.extend({});
// const d = new Demo(); // d 是VueComponent的实例对象，就是vc
// Vue.prototype.x = d;

// 创建vm
new Vue({
  el: "#app", // 这里的app要小写
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
