<template>
  <div>
    <h2>我是About的内容</h2>
        <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        
          <router-view></router-view>
  
        
    </div>
  </div>
</template>

<script>
export default {
    name:'RouterAbout',
    // 没有起作用
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
        console.log('beforeRouteEnter');
        next();
    },
    // // 通过路由规则，离开该组件时被调用
    // beforeRouteLeave(to,from,next){
    //   console.log('beforeRouteLeave');
    //   next();
    // }
}
