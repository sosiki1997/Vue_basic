// 该文件用于创建 Vuex 中最为核心的 store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用插件
Vue.use(Vuex);
// use后，创建vm时就可以传入store配置项

// 准备 actions，用于响应组件中的动作
const actions = {};
// 准备 mutations，用于操作数据(state)
const mutations = {};
// 准备 state，用于存储数据
const state = {};

// // 创建sotre
// const store = new Vuex.Store({
// actions:actions,
// mutations:mutations,
// state:state,
// });

// // 暴露store
// export default store

// 简写：
// 创建并暴露sotre
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
