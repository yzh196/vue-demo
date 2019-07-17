<template>
  <div id="app">
      <ul>
        <li v-for="info in productList">
          {{info.title}}
        </li>
      </ul>
  </div>
</template>


<script>
  export default{
    data: function () {
      return {
        totalMonery: {
          type: Number,
          require: true
        },
        productList: {
          type: Array,
          require: true
        }
      }
    },
    mounted: function () {
      this.careView()
    },
    methods: {
      careView: function () {
        this.axios.get('data.json').then(
          (response) => {
              console.log(response.data)
            this.productList = response.data
          })
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
