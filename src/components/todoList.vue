<template>
  <div class="todoList">
      <van-row>
        <van-col span="1">x</van-col>
        <van-col span="22">{{todo.text}}</van-col>
        <van-col span="1">
          <van-checkbox v-model="todo.done"></van-checkbox>
        </van-col>
      </van-row>
    <section class="footer">
      <van-row>
          <van-col span="4">{{remain}}item left</van-col>
        <van-col span="4" offset="4">
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
import { mapGetters,mapState } from "vuex";

export default {
  name: "todoList",
  data() {
    return {
      ramain:'',
      checked: false,
    };
  },
  computed:{
      ...mapState(['todoList']),
      ...mapGetters(['allTodos','activeTodos','completedTodos'])
  }
};
</script>