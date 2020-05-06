<template>
    <div class="layoutHeader">
        <van-row>
            <van-col span="4">p</van-col>
            <van-col span="4" offset="12">c</van-col>
            <van-col span="4">b</van-col>
        </van-row>
        <todoInput></todoInput>
    </div>
</template>

<script>
import todoInput from '@/components/todoInput'
export default {
    name:'LayoutHeader',
    components:{
        todoInput
    }
}
</script>