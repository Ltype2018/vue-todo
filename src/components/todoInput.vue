<template>
  <div class="todoInput">
    <van-cell-group>
      <van-field v-model="value" placeholder="input your todo">
        <template #button>
          <van-button size="small" type="primary" @click="addTodo">添加</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <TodoList v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" /> 
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item name="all" icon="todo-list-o">all</van-tabbar-item>
        <van-tabbar-item name="active" icon="fire-o">active</van-tabbar-item>
        <van-tabbar-item name="completed" icon="completed">completed</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  name: "TodoInput",
  data() {
    return {
      value: "",
      active: "all"
    };
  },
  computed: {
    //往getters传入当前激活tab
    filteredTodos(){
      return this.$store.getters.filteredTodos(this.active)
    }
    
  },
  methods: {
    addTodo() {
      this.$store.commit("UPDATETODO", this.value);
      this.value = "";
    },
  },
  components: {
    TodoList
  }
};
</script>

<style lang="scss" scoped>
.todoInput {
  margin: 30% 10px 0px 10px;
  overflow: hidden;
}
footer{
    height: 30px;;
}
</style>