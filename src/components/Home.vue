<template>
    <div class="home">
        <Layout></Layout>
    </div>
</template>

<script>
import Layout from '@/views/Layout'
export default {
    name:"Home",
    components:{
        Layout
    }
}
</script>

<style scoped>
.home{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>