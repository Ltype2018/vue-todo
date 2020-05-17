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
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item name="all" icon="https://img.yzcdn.cn/vant/user-inactive.png">all</van-tabbar-item>
        <van-tabbar-item name="active" icon="search">active</van-tabbar-item>
        <van-tabbar-item name="completed" icon="setting-o">completed</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import TodoList from "./TodoList";
import { mapGetters } from "vuex";
export default {
  name: "TodoInput",
  data() {
    return {
      value: "",
      active: "all"
    };
  },
  computed: {
    ...mapGetters(["filteredTodos"])
  },
  methods: {
    addTodo() {
      this.$store.commit("UPDATETODO", this.value);
      this.value = "";
    },
    onChange() {
      this.filteredTodos(this.active);
    }
  },
  components: {
    TodoList
  }
};
</script>

<style lang="scss" scoped>
.todoInput {
  margin: 30% 10px 0px 10px;
}
footer{
    height: 30px;;
}
</style>