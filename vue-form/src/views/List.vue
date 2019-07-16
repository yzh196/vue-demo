<template>
    <div>
      <p  class="am-alert  am-alert-danger" v-if="list.length < 1"><i  class="am-icon-edit"></i> 暂无数据</p>
      <div v-show="list.length > 0">
        <div class="am-panel am-panel-default" v-for="(item,index) in list" :key="index">
          <div class="am-panel-hd">{{item.title}}</div>
          <div class="am-panel-bd">
            {{item.contant}}
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import store from '../store'
export default {
  name: 'List',
  store,
  data: function () {
    return {
      list: store.state.lists
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
