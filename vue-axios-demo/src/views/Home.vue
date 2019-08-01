<template>
  <div class="home">

    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"

    />

    <!-- 联系人编辑 -->
    <van-popup position="bottom" v-model="showEdit">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @delete="onDelete"
        @save="onSave"
      />
    </van-popup>

  </div>
</template>

<script>
  import http from '../http';
  import {ContactEdit, ContactList, Popup, Toast} from 'vant'

  export default {
    name: 'home',
    http,
    data: function () {
      return {
        list: [],
        http: http,
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
      this.createView();
    },
    methods: {
      createView: async function () {
        let res = await this.http.getContactList()
        this.list = res.data;

      },
      onAdd: function () {
        this.showEdit = true,
          this.isEdit = false,
          this.editingContact = {};
      },
      onEdit: function (item) {
        this.showEdit = true,
          this.isEdit = true,
          this.editingContact = item;
      },
      onSave: async function (item) {
        if (this.isEdit) {
          let res = await this.http.editContactItem(item);
          if (res.code == 200) {
            Toast("信息已修改");
            this.showEdit = false;
            this.createView();
          }
        } else {
          let res = await this.http.addContactItembyJson(item);
          if (res.code == 200) {
            Toast("信息已保存");
            this.showEdit = false;
            this.createView();
          }

        }
      },
      onDelete: async function (item) {
        let res = await this.http.deleteContactItem({
          id: item.id
        });
        if (res.code == 200) {
          Toast("信息已删除");
          this.showEdit = false;
          this.createView();
        }
      }
    }

  }
</script>

<style lang="css" scoped>
  .van-popup {
    height: 80%;
  }

  .van-contact-list__add {
    z-index: 0;
  }
</style>
