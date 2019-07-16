<template>
  <section class="real-app">
    <input @keyup.enter="addTodo()" v-model="info" autofocus class="add-input" placeholder="请输入记录的事情" type="text">
    <Item :todo="todo" v-for="todo in computerTodos" :key="todo.id" @del="delTodo"></Item>
    <Tabs :filter="filter" :todos="todos" @clearTodo="clearCompletedTodo" @toggle="filterTodos"></Tabs>
  </section>
</template>

<script>
  import Item from './item.vue'
  import Tabs from './tabs.vue'

  let id = 0
  export default {
    name: 'todo',
    data: function () {
      return {
        info: '',
        todos: [

        ],
        filter: 'all'
      }
    },
    components: {
      Item,
      Tabs
    },
    computed: {
      computerTodos: function () {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      addTodo: function (e) {
        this.todos.unshift({
          id: id++,
          contant: this.info,
          completed: false
        })
        this.info = ''
      },
      delTodo: function (id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      clearCompletedTodo: function () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
      filterTodos: function (state) {
        this.filter = state
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .real-app {
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
  }

  .add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
</style>
