import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '',
    userStatus: 0,
    vipLevel: 0
  },
  mutations: {
    login: function (state, userId) {
      state.userInfo = userId
    },
    setMemberInfo: function (state, info) {
      state.userStatus = info.userStatus,
      state.vipLevel = info.vipLevel
    }
  },
  getters: {
    userPower: function (state) {
       switch (state.userStatus) {
         case 0:
           return '普通';
           break;
         case 1:
           return  'VIP';
           break;
         case 2:
           return  'SVIP' + state.vipLevel;
           break;
         default:
           return '临时'
       }
    }
  },
  actions: {
    buyVip: async function ({commit}, info) {
      // return new Promise((resolve,reject) => {
      //   commit('setMemberInfo', {
      //     userStatus: info.userStatus,
      //     vipLevel: info.vipLevel
      //   })
      //   resolve('操作成功')
      // })

      commit('setMemberInfo', {
        userStatus: info.userStatus,
        vipLevel: info.vipLevel
      })
      return '操作成功'
    },
    getFreeVip: function ({ commit, state }) {
      return new Promise((resolve,reject) => {

          console.log(arguments);
          debugger
          if(state.userStatus === 0){
            console.log(state);
            commit('setMemberInfo', {
              userStatus: 1,
              vipLevel: 1
            })
            resolve('分享成功，获得一个会员资格')
          }else{
            resolve('已经是会员，分享成功')
          }
      })
  }
  }
})
