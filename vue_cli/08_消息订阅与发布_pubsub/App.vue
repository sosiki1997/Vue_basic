<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <SchoolName />
    <StudentName />
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
    };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
