<template>
  <div class="home">

    <!-- 联系人列表 -->

      <van-contact-list
        :list="list"
        @add="onAdd"
        @edit="onEdit"

      />

  </div>
</template>

<script>
  import {Toast,ContactList} from 'vant'
  import axios from '../axios';

export default {
  name: 'home',
  axios,
  data: function(){
    return {
      list: []
    }
  },
  components: {
    [ContactList.name]: ContactList,
    [Toast.name]: Toast
  },
  created() {
    const url = 'http://localhost:9000/api/contactList';
    this.axios.get(url).then(res => {
      console.log(res)
      this.list = res.data.data;
    }).catch(err => {
      Toast(err.toString());
    })
  },
  methods: {
    onAdd: function () {

    },
    onEdit: function () {

    },
    onSelect: function () {

    }
  }

}
</script>

<style>

</style>
