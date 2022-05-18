<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 传给了插槽的使用者App -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "FoodCategory",
  props: ["title"],
  // 数据在插槽定义组件里
  data() {
    return {
      games: ["🍠", "🥔", "🥬"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
