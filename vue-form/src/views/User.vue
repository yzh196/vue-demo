<template>
    <div>
      <h3>欢迎回来，{{name}}</h3>
      <Add>添加</Add>
    </div>
</template>

<script>
import Add from '@/views/Add.vue'
import store from '../store.js'
export default {
  name: 'User',
  store,
  data: function() {
    return{
      name: store.state.name
    }
  },
  components: { Add }
}
</script>

<style scoped>

</style>
