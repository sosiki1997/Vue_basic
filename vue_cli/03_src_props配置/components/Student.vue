<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      msg: "我是一个帅气的学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 方式一：简单声明接收
  props: ["name", "sex", "age"], // 接收到的props不能改（如果尝试修改外部传进来的数据 用this.age）

  // 方式二：接收的同时对数据进行类型限制
  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String,
  //   },

  // 方式三：接收的同时对数据 进行类型限制+默认值的指定+必要性的限制
  //   props: {
  //     name: {
  //       type: String, // name 的类型是字符串
  //       required: true, // name 是必要的
  //     },
  //     age: {
  //       type: Number,
  //       default: 99, // 默认值
  //     },
  //     sex: {
  //       type: String,
  //       required: true,
  //     },
  //   },
};
</script>
