<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <!-- 缓存路由组件keep-alive include="组件名"-->
        <keep-alive include="RouterNews"> 
          <router-view></router-view>
        </keep-alive>
        
    </div>
  </div>
</template>

<script>
export default {
    name:'RouterHome'
}
