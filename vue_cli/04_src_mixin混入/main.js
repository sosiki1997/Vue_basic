// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入混合mixin 全局引入
// import { mixin, mixin2 } from "./mixin";

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// Vue.mixin(mixin);
// Vue.mixin(mixin2);

// 创建vm
new Vue({
  el: "#app", // 这里的app要小写
  render: (h) => h(App),
});
