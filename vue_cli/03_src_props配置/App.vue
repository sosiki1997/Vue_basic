<template>
  <div>
    <!-- 传递数据：直接在组件标签里面写属性 -->
    <StudentName name="李四" sex="女" :age="18" />
  </div>
</template>

<script>
import StudentName from "./components/Student";
export default {
  name: "App",
  components: { StudentName },
};
</script>
