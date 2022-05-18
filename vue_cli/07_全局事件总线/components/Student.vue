<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  mounted() {
    // console.log("Student", this.$on);
  },
  methods: {
    sendStudentName() {
      // 触发 hello 事件
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>
<style>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 5px;
}
</style>
