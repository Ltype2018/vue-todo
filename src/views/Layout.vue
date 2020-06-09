<template>
  <div class="layout">
    <div class="layoutHeader">
      <LayoutMenus></LayoutMenus>
    </div>
    <div class="layoutMain">
      <div class="layoutContent"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import LayoutMenus from "@/components/LayoutMenus"
export default {
  name: "Layout",
  components: {
    LayoutMenus
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