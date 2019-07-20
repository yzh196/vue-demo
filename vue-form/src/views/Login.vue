<template>
  <div>

    <form action="" class="am-form am-form-horizontal" v-if="!isReg">
      <div class="am-form-group">
        <label class="am-form-label am-u-sm-3" for="name">用户名</label>
        <div class="am-u-sm-9">
          <input class="am-form-field" id="name" required type="text" v-model="name"/>
        </div>
      </div>
      <div class="am-form-group">
        <label class="am-form-label am-u-sm-3" for="password">密码</label>
        <div class="am-u-sm-9">
          <input class="am-form-field" id="password" type="text" v-model="password"/>
        </div>
      </div>
      <div class="am-form-group">
        <button @click="login()" class="am-btn am-btn-success" type="button">登录</button>
        <button @click="reg()" class="am-btn am-btn-primary" type="button">注册</button>
      </div>
    </form>
    <form action="" class="am-form am-form-horizontal" v-else>
      <div class="am-form-group">
        <label class="am-form-label am-u-sm-3" for="name">用户名</label>
        <div class="am-u-sm-9">
          <input class="am-form-field" id="name" required type="text" v-model="name"/>
        </div>
      </div>
      <div class="am-form-group">
        <label class="am-form-label am-u-sm-3" for="password">密码</label>
        <div class="am-u-sm-9">
          <input class="am-form-field" id="password" required type="text" v-model="password"/>
        </div>
      </div>
      <div class="am-form-group">
        <label class="am-form-label am-u-sm-3" for="repeatpassword">重复密码</label>
        <div class="am-u-sm-9">
          <input class="am-form-field" id="repeatpassword" required type="text" v-model="repeatpassword"/>
        </div>
      </div>
      <button @click="adduser()" class="am-btn am-btn-success" type="button">提交</button>
      <button @click="canle()" class="am-btn am-btn-warning" type="button">返回</button>
    </form>

  </div>
</template>

<script>
  import store from '../store';

  export default {
    name: 'Login',
    store,
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
        const _name = localStorage.getItem('name');
        const _pass = localStorage.getItem('password');
        if (_name === this.name && _pass === this.password) {
          console.log(_name);
          store.commit('addName', _name);
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
          localStorage.setItem('name', this.name);
          localStorage.setItem('password', this.password);
          this.name = '';
          this.password = '';
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
