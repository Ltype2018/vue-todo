<template>
  <div class="login">
    <van-tabs v-model="activeName">
      <van-tab title="免密码登录" name="login">
          <van-field v-model="tel" required type="tel" label="手机号"></van-field>
          <van-field v-model="sms" required  type="digit"  placeholder="输入6位短信验证码">
            <template #button>
              <van-button size="small" type="primary">获取验证码</van-button>
            </template>
          </van-field>
          <div style="margin:16px;">
            <van-button round block type="info" @click="telLogin">注册/登录</van-button>
          </div>
      </van-tab>
      <van-tab title="密码登录" name="register">
          <van-field v-model="telmail" required    placeholder="手机号或邮箱"></van-field>
          <van-field v-model="password" required  type="password"  placeholder="密码"></van-field>
          <div style="margin:16px;">
            <van-button round block type="info" @click="login">登录</van-button>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      activeName: "login",
      telmail:'',
      password:'',
      tel:'',
      sms:''
    };
  },
  methods:{
     ...mapActions(['v_toLogin']),
     login(){
       let data = {
         username:this.username,
         password:this.password
       }
       this.v_toLogin(data)
     },
     telLogin(){
       console.log('cao')
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin: 40% 10px 0px 10px;
}

</style>
