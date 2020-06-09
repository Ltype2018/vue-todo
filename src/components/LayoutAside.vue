<template>
<!--右侧栏，包括头像，用户权限对应的菜单，登出功能-->
    <div class="LayoutAside">
        <div class="userInfo">
          <van-image round width="80px" height="80px" :src="logoImage"></van-image>
        </div>
        <div class="menuList">
            <van-sidebar v-model="activeKey"  @change="onChange">
                <van-sidebar-item title="每日清单" to="/todo"></van-sidebar-item>
                <van-sidebar-item title="每日进度" to="/progress"></van-sidebar-item>
                <van-sidebar-item title="书签" to="/bookMarks"></van-sidebar-item>
                <van-sidebar-item title="关于" to="/about"></van-sidebar-item>
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
            this.$store.dispatch('signOut').then(() =>{
                this.$router.push({path:'/login'})
            }).catch(err =>console.log(err))
        },
        onChange(index){
            this.$notify({type:'primary', message:index})
        }
    }
}
</script>

<style scoped>

</style>