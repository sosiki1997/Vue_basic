<template>
  <div class="demo">
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// export 1.分别暴露
// const school = Vue.extend({})
// export default Vue.extend({});
export default {
  name: "School",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
// export { school }; // 2.统一暴露
// export default school; // 3.默认暴露
</script>

<style>
.demo {
  background-color: pink;
}
</style>
