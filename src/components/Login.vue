<template>
  <div class="hello">
    <van-tabs v-model="activeName">
      <van-tab title="免密码登录" name="login">
          <van-field v-model="tel" required  label="手机号"></van-field>
          <van-field v-model="sms" required  type="password" label="短信验证码" placeholder="验证码">
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <div style="margin:16px;">
            <van-button round block type="info">注册/登录</van-button>
          </div>
      </van-tab>
      <van-tab title="密码登录" name="register">
          <van-field v-model="tel" required name="用户名" label="用户名"></van-field>
          <van-field v-model="password" required type="password" label="密码" placeholder="密码"></van-field>
          <div style="margin:16px;">
            <van-button round block type="info">登录</van-button>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      activeName: "login",
      username:'',
      password:'',
      tel:'',
      sms:''
    };
  },
  methods:{
    onSubmit(){
      console.log('hell')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
