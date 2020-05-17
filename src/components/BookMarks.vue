<template>
  <div>
    <div class="bookMarks">
      <div class="a">aaaa</div>

      <div class="c">c</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMarks"
};
</script>

<style lang="scss" scoped>
.bookMarks {
  position: absolute;
  background-color: rgb(29, 26, 26);

  width: 500px;
}

.a {
  width: 100px;
  height: 200px;
  background-color: #ff4466;
 position: absolute;
}

.c{
  width: 100px;
  height: 50px;
  background-color: deeppink;
  position: absolute;
}
</style>