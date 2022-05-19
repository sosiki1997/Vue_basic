// 人员管理相关的配置

import axios from "axios";
import { nanoid } from "nanoid";

const personOptions = {
  namespaced: true, //命名空间
  actions: {
    addPersonZhao(context, value) {
      if (value.name.indexOf("赵") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人必须姓赵");
      }
    },
    // 找服务器要一个人的名字
    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, personObj) {
      state.personList.unshift(personObj);
    },
  },
  state: {
    personList: [{ id: "001", name: "Jack" }],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};

export default personOptions;
