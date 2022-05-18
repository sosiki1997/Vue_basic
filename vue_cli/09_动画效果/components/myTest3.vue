<template>
  <div>
    <button @click="isShow = !isShow">显示 | 隐藏</button>
    <!-- 多个元素过度 -->
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好</h1>
      <h1 v-show="isShow" key="2">zhangsan</h1>
    </transition-group>
  </div>
</template>

<script>
// 集成第三方动画
import "animate.css";
export default {
  name: "myTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
