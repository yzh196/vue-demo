<template>
  <div class="home">

    <!-- 联系人列表 -->
      <van-contact-list
        :list="list"
        @add="onAdd"
        @edit="onEdit"

      />

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>

  </div>
</template>

<script>
  import {Toast, ContactList, ContactEdit, Popup} from 'vant'
  import instance from '../axios';

export default {
  name: 'home',

  data: function(){
    return {
      instance: instance,
      list: [],
      showEdit: false,
      editingContact: {},
      isEdit: false

    }
  },
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  created() {
    const url = '/contactList';
    this.instance.get(url).then(res => {
      this.list = res.data.data;
    }).catch(err => {
      if (err.response.status == 404) {
        Toast("请求的地址错误");
      }
    })
  },
  methods: {
    onAdd: function () {
      this.showEdit = true,
        this.isEdit = false
    },
    onEdit: function (item) {
      this.showEdit = true,
        this.isEdit = true,
        this.editingContact = item;
    },
    onSave: function () {

    },
    onDelete: function () {

    }
  }

}
</script>

<style lang="css" scoped>
  .van-popup {
    height: 100%;
  }

  .van-contact-list__add {
    z-index: 0;
  }
</style>
