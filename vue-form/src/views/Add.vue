<template>
  <div>
    <form class="am-form am-form-horizontal" action="">
      <div class="am-form-group">
        <label for="title" class="am-form-label am-u-sm-2" >标题</label>
        <div  class="am-u-sm-10">
          <input type="text" id="title" v-model="title" class="am-form-field" required/>
        </div>
      </div>
      <div class="am-form-group">
        <label for="contant" class="am-form-label am-u-sm-2" >内容</label>
        <div  class="am-u-sm-10">
          <textarea class="am-form-field"v-model="contant" rows="5"></textarea>
        </div>
      </div>
      <div class="am-form-group">
        <button type="button" class="am-btn am-btn-success" @click="add()">发布</button>
        <button type="button" class="am-btn am-btn-primary" @click="jump()">查看列表</button>
        <router-link class="am-btn am-btn-danger" to="/">退出登录</router-link>
      </div>
    </form>

  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Add',
  store,
  data () {
    return {
      title: '',
      contant: ''
    }
  },
  methods: {
    add: function () {
      if(this.contant == ''){
        alert('内容不能为空')
        return
      }
      store.commit('addItem', {
        title: this.title,
        contant: this.contant
      })
      this.title = ''
      this.contant = ''
    },
    jump: function () {
      this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped>

</style>
