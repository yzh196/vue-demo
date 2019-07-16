<template>
  <div>
    <router-view></router-view>
    <footer class="am-topbar am-topbar-inverse am-topbar-fixed-bottom">
      <div class="am-btn-group am-btn-group-justify">
        <router-link class="am-btn am-btn-primary" :to="{name: 'list'}">列表页</router-link>
        <router-link class="am-btn am-btn-primary" :to="{name: 'user'}">个人中心</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>
