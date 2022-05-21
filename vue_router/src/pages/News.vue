<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue👏</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RouterNews",
  data() {
    return {
      opacity: 1,
    };
  },
  // 因为缓存了news组件，所以定时器停不掉，需要两个新的生命周期钩子
  // beforeDestroy() {
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },

  // 激活
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  // 失活
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>
