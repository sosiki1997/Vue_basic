<template>
  <div>
    <!-- <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前BigSum为：{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ $store.state.address }}{{ $store.state.job }}</h3> -->
    <!-- 模版{{}}里面能看到vc身上的所有东西 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前BigSum为：{{ bigSum }}</h3>
    <h3>我在{{ address }}{{ job }}</h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment">➕</button>
    <button @click="decrement">➖</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button> -->

    <button @click="increment(n)">➕</button>
    <button @click="decrement(n)">➖</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "CountNumber",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },

  computed: {
    ...mapState(["sum", "address", "job"]),
    ...mapGetters(["bigSum"]),
  },

  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 也有数组写法

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    // 也有数组写法
  },
  // mounted() {
  //   console.log("Count", this); //输出vc是什么
  // },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
