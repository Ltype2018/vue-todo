<template>
  <li>
    <van-row>
      <van-col span="1">x</van-col>
      <van-col span="22">{{todo.text}}</van-col>
      <van-col span="1">
        <van-checkbox v-model="todo.done"></van-checkbox>
      </van-col>
    </van-row>
  </li>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todo"],
  data() {
    return {
      ramain: "",
      checked: false
    };
  }
};
</script>