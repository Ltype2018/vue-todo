<template>
  <div class="TodoList" :class="{completed:todo.done, editing:editing}">
    <!--展示todolist-->
    <van-row class="view" >
      <van-col span="1">
        <input class="toggle" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
      </van-col>
      <van-col span="22">
        <label v-text="todo.text" @dblclick="editing = true"></label>
      </van-col>
      <van-col span="1">
        <van-button type="primary" @click="REMOVETODO(todo)">x</van-button>
      </van-col>
    </van-row>
    <input class="edit" v-show="editing" v-focus="editing" @blur="doneEdit" :value="todo.text" @keyup.enter="doneEdit" />
  </div>
</template>

<script>
//使用v-model="todo.done"违背了props子组件修改父组件的原则，只能使用原生dom来绑定值
import { mapMutations, mapActions } from "vuex";
export default {
  name: "TodoList",
  props: ["todo"],
  data() {
    return {
      editing: false
    };
  },
  directives:{
    focus(el,{value},{context}){
      if(value){
        context.$nextTick(() =>el.focus())
      }
    }
  },
  methods: {
    ...mapActions(["toggleTodo", "editTodo"]),
    ...mapMutations(["REMOVETODO"]),
    doneEdit(e) {
      const value = e.target.value.trim();
      if (this.editing) {
        this.editTodo({
          todo: this.todo,
          text: value
        });
        this.editing = false;
      }
    }
  }
};
</script>

<style  scoped>
.editing .view{
  display: none;
}

</style>