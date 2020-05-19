<template>
<div class="TodoList" :class="{completed:todo.done, editing:editing}">
  <!--展示todolist-->
    <van-row class="view">
      <van-col span="1"><input class="toggle" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)"></van-col>
      <van-col span="22" @dblclick="editing = true">{{todo.text}}</van-col>
      <van-col span="1">
        <van-button type="primary" @click="REMOVETODO(todo)">x</van-button>
      </van-col>
    </van-row>
    <input class="edit" v-show="editing" :value="todo.text">
</div>
</template>

<script>
//使用v-model="todo.done"违背了props子组件修改父组件的原则，只能使用原生dom来绑定值
import {mapMutations,mapActions} from 'vuex'
export default {
  name: "TodoList",
  props: ["todo"],
  data(){
    return{
      editing:false
    }
  },
  methods:{
       ...mapActions(['toggleTodo']),
       ...mapMutations(['REMOVETODO'])
  }
};
</script>