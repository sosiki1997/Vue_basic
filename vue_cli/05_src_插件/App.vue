<template>
  <div>
    <SchoolName />
    <hr />
    <StudentName />
  </div>
</template>

<script>
import SchoolName from "./components/School";
import StudentName from "./components/Student";

export default {
  name: "App",
  components: { SchoolName, StudentName },
};
</script>
