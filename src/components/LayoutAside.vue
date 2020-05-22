<template>
<!--右侧栏，包括头像，用户权限对应的菜单，登出功能-->
    <div class="LayoutAside">
        <div class="userInfo">
          <van-image round width="80px" height="80px" :src="logoImage"></van-image>
        </div>
        <div class="menuList">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="1"></van-sidebar-item>
            </van-sidebar>
        </div>
        <div class="sign_out" @click="signOut">退出</div>
    </div>
</template>

<script>

export default {
    name:"LayoutAside",
    data(){
        return{
            logoImage:require('../assets/logo.jpg'),
            activeKey:0
        }
    },
    methods:{
        //退出账户,跳转到登陆界面
        signOut(){
            this.$store.dispatch('sinOut').then(() =>{
                this.$router.push({path:'/login'})
            }).catch(err =>console.log(err))
        }
    }
}
</script>

<style scoped>
.van-sidebar{
    display: flex;
    padding: 0;
}
.van-sidebar-item{
    display: flex;

    
    
}
</style>