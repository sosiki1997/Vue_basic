// 该文件用于创建 Vuex 中最为核心的 store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";

import countOptions from "./count";
import personOptions from "./person";

// 使用插件
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});

// #region
// // 准备 actions，用于响应组件中的动作
// const actions = {
//   jiaOdd(context, value) {
//     if (context.state.sum % 2) {
//       context.commit("JIA", value);
//     }
//   },
//   jiaWait(context, value) {
//     setTimeout(() => {
//       context.commit("JIA", value);
//     }, 500);
//   },
// };
// // 准备 mutations，用于操作数据(state)
// const mutations = {
//   JIA(state, value) {
//     state.sum += value;
//   },
//   JIAN(state, value) {
//     state.sum -= value;
//   },
//   ADD_PERSON(state, personObj) {
//     state.personList.unshift(personObj);
//   },
// };
// // 准备 state，用于存储数据
// const state = {
//   sum: 0,
//   address: "火星",
//   job: "👩‍🌾种土豆🥔",
//   personList: [{ id: "001", name: "Jack" }],
// };

// // 准备getters —— 用于将state中的数据进行加工
// const getters = {
//   bigSum(state) {
//     return state.sum * 10;
//   },
// };
// #endregion

// #region
// 创建并暴露sotre
// export default new Vuex.Store({
//   actions,
//   mutations,
//   state,
//   getters,
// });
// #endregion
