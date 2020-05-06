<template>
  <div class="todoList">
    <template v-for="item in todoList">
      <van-row v-bind:key="item.index">
        <van-col span="1">x</van-col>
        <van-col span="22">{{item.todo}}</van-col>
        <van-col span="1">
          <van-checkbox v-model="item.done"></van-checkbox>
        </van-col>
      </van-row>
    </template>
    <section class="footer">
      <van-row>
        <van-col span="4" offset="6">
          <van-tag type="primary" @click="all">all</van-tag>
        </van-col>
        <van-col span="4">
          <van-tag type="success" @click="active">active</van-tag>
        </van-col>
        <van-col span="4">
          <van-tag type="warning" @click="completed">completed</van-tag>
        </van-col>
      </van-row>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "todoList",
  data() {
    return {
      checked: false,
      todoList:[]
    };
  },
  computed:{
      ...mapGetters(['allTodos','activeTodos','completedTodos'])
  },
  methods:{
       all(){
           this.todoList = this.allTodos
       },
       active(){
           this.todoList = this.activeTodos
       },
       completed(){
           this.todoList = this.completedTodos
       }
  }
};
</script>