// 该文件用于创建 Vuex 中最为核心的 store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用插件
Vue.use(Vuex);
// use后，创建vm时就可以传入store配置项

// 准备 actions，用于响应组件中的动作
// 这里写业务逻辑 发送ajax请求等
const actions = {
  // jia:function(){}
  // 这个jia和jian可以不写，直接commit
  // jia(context, value) {
  //   context.commit("JIA", value);
  // },
  // jian(context, value) {
  //   context.commit("JIAN", value);
  // },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
  // action中小写
};
// 准备 mutations，用于操作数据(state)
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  // mutations中大写
  JIAN(state, value) {
    state.sum -= value;
  },
};
// 准备 state，用于存储数据
const state = {
  sum: 0, //当前的和
  address: "火星",
  job: "👩‍🌾种土豆🥔",
};

// 准备getters —— 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 创建并暴露sotre
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
