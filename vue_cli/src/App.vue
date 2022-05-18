<template>
  <div>
    <myTest />
    <myTest2 />
    <myTest3 />
  </div>
</template>

<script>
import myTest from "./components/myTest";
import myTest2 from "./components/myTest2";
import myTest3 from "./components/myTest3";

export default {
  name: "App",
  components: { myTest, myTest2, myTest3 },
};
</script>
