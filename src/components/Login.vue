<template>
  <div class="login">
    <van-tabs v-model="activeName">
      <van-tab title="免密码登录" name="login">
        <van-field v-model="tel" required type="tel" label="手机号"></van-field>
        <van-field v-model="sms" required type="digit" placeholder="输入6位短信验证码">
          <template #button>
            <van-button size="small" type="primary">获取验证码</van-button>
          </template>
        </van-field>
        <div style="margin:16px;">
          <van-button round block type="info" @click="telLogin">注册/登录</van-button>
        </div>
      </van-tab>
      <van-tab title="密码登录" name="register">
        <van-field v-model="loginInfo.telmail" required placeholder="手机号或邮箱"></van-field>
        <van-field v-model="loginInfo.password" required type="password" placeholder="密码"></van-field>
        <div style="margin:16px;">
          <van-button round block type="info" @click="onSubmitInfo(loginInfo)">登录</van-button>
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
      loginInfo:{
         telmail:'',
         password:''
      },
      activeName: "login",
      tel:'',
      sms:''
    };
  },
  methods:{
    //提交表单，登陆后获取路由然后跳转到主页
    onSubmitInfo(val){
      this.$store.dispatch('user/Login',val)
      .then(() =>this.$router.push({path:'/todo'}))
      
    },
     telLogin(){
      this.$store.dispatch('getRoutes')
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
