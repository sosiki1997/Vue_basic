// 求和相关的配置
const countOptions = {
  namespaced: true, //命名空间
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    address: "火星",
    job: "👩‍🌾种土豆🥔",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

export default countOptions;
