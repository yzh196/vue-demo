<template>
    <div>

      <form class="am-form am-form-horizontal" action="" v-if="!isReg">
        <div class="am-form-group">
          <label for="name" class="am-form-label am-u-sm-3" >用户名</label>
          <div  class="am-u-sm-9">
            <input type="text" id="name" v-model="name" class="am-form-field" required/>
          </div>
        </div>
        <div class="am-form-group">
          <label for="password" class="am-form-label am-u-sm-3" >密码</label>
          <div  class="am-u-sm-9">
            <input type="text" id="password" v-model="password" class="am-form-field"/>
          </div>
        </div>
        <div class="am-form-group">
          <button type="button" class="am-btn am-btn-success" @click="login()">登录</button>
          <button type="button" class="am-btn am-btn-primary" @click="reg()">注册</button>
        </div>
      </form>
      <form action="" class="am-form am-form-horizontal" v-else>
        <div class="am-form-group">
          <label for="name" class="am-form-label am-u-sm-3" >用户名</label>
          <div  class="am-u-sm-9">
            <input type="text" id="name" v-model="name" class="am-form-field" required/>
          </div>
        </div>
        <div class="am-form-group">
          <label for="password" class="am-form-label am-u-sm-3" >密码</label>
          <div  class="am-u-sm-9">
            <input type="text" id="password" v-model="password" class="am-form-field" required/>
          </div>
        </div>
        <div class="am-form-group">
          <label for="repeatpassword" class="am-form-label am-u-sm-3" >重复密码</label>
          <div  class="am-u-sm-9">
            <input type="text" id="repeatpassword" v-model="repeatpassword" class="am-form-field" required/>
          </div>
        </div>
        <button type="button" class="am-btn am-btn-success"  @click="adduser()">提交</button>
        <button type="button" class="am-btn am-btn-warning"  @click="canle()">返回</button>
      </form>

    </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      isReg: false,
      name: '',
      password: '',
      repeatpassword: ''
    }
  },
  methods: {
    login: function () {
      const _name = localStorage.getItem('name')
      const _pass = localStorage.getItem('password')
      if (_name === this.name && _pass === this.password) {
        this.$router.push('/home/list')
      } else {
        alert('用户名或密码不正确')
      }
    },
    reg: function () {
      this.isReg = true
    },
    canle: function () {
      this.isReg = false
    },
    adduser: function () {
      if (this.password === this.repeatpassword) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.name = ''
        this.password = ''
        this.isReg = false
      } else {
        alert('请检查密码是否一致')
      }
    }
  }
}
</script>

<style scoped>

</style>
