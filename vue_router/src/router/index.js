// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建并暴露一个路由器
const router = new VueRouter({
  // history模式和hash模式
  mode: "hash",
  routes: [
    {
      name: "about", //命名路由
      path: "/about",
      component: About,
      meta: { isAuth: true, title: "about" },
    },
    // 一级路由
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { title: "home" },
      // 二级路由 子路由
      children: [
        {
          name: "news",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "news" },
          // 独享路由守卫只有前置
          // 独享路由守卫和全局路由（后置）守卫组合使用
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth) {
          //     if (localStorage.getItem("name") === "jack") {
          //       next();
          //     } else {
          //       alert("无权限查看");
          //     }
          //   } else {
          //     next();
          //   }
          // },
        },
        {
          name: "message",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "message" },
          children: [
            {
              name: "detail",
              path: "detail", //传递query参数时不用配置
              // path: "detail/:id/:title", //传递params参数时配置 占位符
              component: Detail,
              meta: { isAuth: true, title: "detail" },

              // props 的第一种写法，值为对象｜该对象中的所有key-value都会以props的形式传给Detail组件
              // props: {a:1,b:'hello'},
              // props 的第二种写法，值为布尔值｜若布尔值为真，就会把该路由组件收到的所有params参数 以props的形式传给Detail组件
              // props: true,
              // props 的第三种写法，值为函数
              // 这是一个回调函数：我们定义的，我们不调用，但最终它执行了，就是回调函数
              // props($route) {
              //   return { id: $route.query.id, title: $route.query.title };
              // },
              // 解构赋值 简化代码
              // props({ query }) {
              //   return { id: query.id, title: query.title };
              // },
              // 解构赋值的连续写法 进一步简化代码
              props({ query: { id, title } }) {
                return { id, title };
              },
            },
          ],
        },
      ],
    },
  ],
});

// #region
// // 全局前置 路由守卫 —— 初始化的时候被调用、在每一次路由切换之前 调用这个回调函数
// router.beforeEach((to, from, next) => {
//   // if (to.path === "/home/news" || to.path === "/home/message")
//   // if (to.name === "news" || to.name === "message")
//   //判断是否需要权限校验
//   if (to.meta.isAuth) {
//     if (localStorage.getItem("name") === "jack") {
//       next();
//     } else {
//       alert("无权限查看");
//     }
//   } else {
//     next();
//   }
// });

// // 全局后置 路由守卫 —— 初始化的时候被调用、在每一次路由切换之后被调用
// router.afterEach((to, from) => {
//   console.log(to, from);
//   document.title = to.meta.title || "vue";
// });
// #endregion

export default router;
