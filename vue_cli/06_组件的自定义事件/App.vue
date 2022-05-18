<template>
  <div class="app">
    <h1>{{ msg }} {{ studentName }}</h1>

    <!-- 方法1 -->
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
    <SchoolName :getSchoolName="getSchoolName" />

    <!-- 方法2 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据（第一种写法，使用@或v-on）-->
    <StudentName v-on:atguigu="getStudentName" @demo="m1" />
    <!-- 
    由于v-on在StudentName这个组件标签上，
    给StudentName组件的实例对象vc(VueComponent)上绑定了一个事件atguigu
    如果以后有人触发了这个事件，demo函数就会被调用
    -->

    <!-- 方法3 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据（第二种写法，使用ref） -->
    <!-- <StudentName ref="student" /> -->
    <!-- 在App组件里通过 this.$refs.student 
    就可以获取到StudentName组件的实例对象
    （this 是App组件的实例对象） -->
  </div>
</template>

<script>
import SchoolName from "./components/School";
import StudentName from "./components/Student";

export default {
  name: "App",
  components: { SchoolName, StudentName },
  data() {
    return {
      msg: "你好",
      studentName: "",
    };
  },
  methods: {
    // 方法1
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    // 方法2
    getStudentName(name) {
      console.log("App收到了学生名", name);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },

  // 挂载完毕 方法3
  // mounted() {
  //   // $on 在vue3中被弃用
  //   this.$refs.StudentName.$on("atgui gu", this.getStudentName);
  // },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
