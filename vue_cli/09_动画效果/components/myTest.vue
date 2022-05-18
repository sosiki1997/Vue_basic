<template>
  <div>
    <button @click="isShow = !isShow">显示 | 隐藏</button>
    <transition appear>
      <!-- appear 让一开始也有效果 -->
      <h1 v-show="isShow">你好</h1>
    </transition>
  </div>
</template>

<script>
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

.v-enter-active {
  animation: slide 1s;
}
.v-leave-active {
  animation: slide 1s reverse;
}
/* 动画效果 */
@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
