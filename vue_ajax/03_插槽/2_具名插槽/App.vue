<template>
  <div class="container">
    <!-- <FoodCategory title="美食" :listData="foods"> -->
    <FoodCategory title="美食">
      <img
        slot="center"
        src="https://img0.baidu.com/it/u=3061034764,3693676703&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        alt=""
      />
      <a slot="footer" href="https://www.ele.me/">更多美食</a>
    </FoodCategory>
    <!-- <FoodCategory title="游戏" :listData="games"> -->
    <FoodCategory title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </FoodCategory>
    <!-- <FoodCategory title="电影" :listData="films">-->
    <FoodCategory title="电影">
      <video
        slot="center"
        controls
        src="https://www.bilibili.com/video/BV1AZ4y1r79q/"
      ></video>
      <!-- <template slot="footer"> -->
      <template v-slot:footer>
        <div class="footer" slot="footer">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
