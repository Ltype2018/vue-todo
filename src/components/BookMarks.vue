<template>
  <div>
<p>
  <input type="checkbox" id="cbox1" value="first_checkbox">
  <label for="cbox1">This is the first checkbox</label>
</p>
<p>
  <input type="checkbox" id="cbox2" value="second_checkbox" checked="checked">
  <label for="cbox2">This is the second checkbox, which is checked</label>
</p>
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