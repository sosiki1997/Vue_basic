<template>
  <ul>
    <!-- 传递query参数时 -->
    <!-- <li>消息编号：{{$route.query.id}}</li> -->
    <!-- <li>消息标题：{{$route.query.title}}</li> -->

    <!-- 传递params参数时 -->
    <!-- <li>消息编号：{{ $route.params.id }}</li> -->
    <!-- <li>消息标题：{{ $route.params.title }}</li> -->

    <!-- props 配置项 -->
    <!-- <li>a:{{ a }}</li> -->
    <!-- <li>b:{{ b }}</li> -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "RouterDetail",
  // props: ["a", "b"], //只能接受固定数据
  props: ["id", "title"],
};
</script>

<style></style>
