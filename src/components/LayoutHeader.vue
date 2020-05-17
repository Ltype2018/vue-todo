<template>
    <div class="layoutHeader">
        <van-row>
            <van-col span="4">p</van-col>
            <van-col span="4" offset="12">c</van-col>
            <van-col span="4">b</van-col>
        </van-row>
        <TodoInput/>
    </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
export default {
    name:'LayoutHeader',
    components:{
        TodoInput
    }
}
</script>