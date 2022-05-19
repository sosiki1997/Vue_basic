// 脚手架配置
module.exports = {
  pages: {
    index: {
      // 入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy: "http://localhost:5000", //这里写转发给谁，只写到端口号
  // },

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      //  请求前缀，走代理就在请求前缀加/api 代理服务器就会转发给服务器
      "/api": {
        target: "http://localhost:5000",
        // 重写路径
        // 前：请求的地址 /api/students
        // 后：请求的地址 /students
        pathRewrite: { "^/api": "" }, //{'正则匹配条件' : '值'}
        ws: true, //用于支持websocket：客户端和服务器的一种通信方式
        changeOrigin: true, //用于控制请求头中的 host 值（为true时跟target一致）
      },
      // 配置多个代理
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
