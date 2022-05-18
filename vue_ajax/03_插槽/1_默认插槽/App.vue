<template>
  <div class="container">
    <!-- <FoodCategory title="美食" :listData="foods"> -->
    <FoodCategory title="美食">
      <img
        src="https://img0.baidu.com/it/u=3061034764,3693676703&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        alt=""
      />
    </FoodCategory>
    <!-- <FoodCategory title="游戏" :listData="games"> -->
    <FoodCategory title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </FoodCategory>
    <!-- <FoodCategory title="电影" :listData="films">-->
    <FoodCategory title="电影">
      <video
        controls
        src="https://www.bilibili.com/video/BV1AZ4y1r79q/"
      ></video>
    </FoodCategory>
  </div>
</template>

<script>
import FoodCategory from "./components/FoodCategory";
export default {
  name: "App",
  components: { FoodCategory },
  data() {
    return {
      foods: ["🍲", "🍖", "🦞"],
      games: ["🍠", "🥔", "🥬"],
      films: ["🏃‍♀️", "🏊‍♀️", "💃"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
