<template>
  <div id="app">
    <Cat :List="productList"></Cat>
  </div>
</template>

<script>
  import Cat from './views/cart'
  export default {
    data: function () {
      return {
        totalMonery: {
          type: Number,
          require: true
        },
        productList: []
      }
    },
    components: {
      Cat
    },
    mounted: function () {
      this.careView()
    },
    methods: {
      careView: function () {
        const url = '/cms/info/iList.jsp?cat_id=10001&tm_id=524';
        this.axios.get(url).then(
          (response) => {
            console.log(response);
            this.productList = response.data.result.list;
          })
      }
    }
  }
</script>

<style lang="">

</style>
