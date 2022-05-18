<template>
  <div class="container">
    <!-- search区域 -->
    <Search />
    <!-- list区域 -->
    <List />
  </div>
</template>

<script>
import Search from "./components/GitSearch";
import List from "./components/GitList";
export default {
  name: "App",
  components: { Search, List },
};
</script>
