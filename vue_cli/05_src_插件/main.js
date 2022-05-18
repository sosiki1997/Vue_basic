// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入插件
import plugins from "./plugins";

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用插件（Vue帮你调用了install方法）
Vue.use(plugins);
// 创建vm
new Vue({
  el: "#app", // 这里的app要小写
  render: (h) => h(App),
});
