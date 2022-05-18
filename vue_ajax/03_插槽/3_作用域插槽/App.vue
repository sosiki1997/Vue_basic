<template>
  <div class="container">
    <!-- 根据数据生成的结构，是由使用者决定的 -->
    <FoodCategory title="游戏">
      <template scope="one">
        <ul>
          <li v-for="(g, index) in one.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </FoodCategory>

    <FoodCategory title="游戏">
      <!-- 新写法 -->
      <template slot-scope="two">
        <ol>
          <li v-for="(g, index) in two.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </FoodCategory>

    <FoodCategory title="游戏">
      <!-- 解构赋值 -->
      <template scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </FoodCategory>
  </div>
</template>

<script>
import FoodCategory from "./components/FoodCategory";
export default {
  name: "App",
  components: { FoodCategory },
};
</script>

<style>
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
