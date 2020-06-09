<template>
  <div class="layout">
    <div class="layoutHeader">
      <LayoutHeader></LayoutHeader>
    </div>
    <div class="layoutMain">
      <div class="layoutAside"><LayoutAside></LayoutAside></div>
      <div class="layoutContent"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import LayoutAside from '@/components/LayoutAside'
import LayoutHeader from "@/components/LayoutHeader"
export default {
  name: "Layout",
  components: {
    LayoutHeader,
    LayoutAside
  }
};
</script>

<style scoped>
.layout{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.layoutHeader{
    height: 30px;
}
.layoutMain{
    height: 100%;
    display: flex;
}
.layoutAside{
    flex-basis:500px;
}
.layoutContent{
    flex-grow: 1;
    background-color: cornsilk;
    overflow: hidden;
}
</style>