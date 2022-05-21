<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">⬅️</button>
      <button @click="forward">➡️</button>
      <button @click="go">Go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouterBanner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    go() {
      this.$router.go(2); //往前走两步，可传正负数
    },
  },
};
</script>
