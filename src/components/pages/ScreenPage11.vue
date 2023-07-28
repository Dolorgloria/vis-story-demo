<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ScreenPage11"
})
</script>

<template>
  <div class="screen">
    <div class="screen-str pmzd-font"><span class="strike">美国</span></div>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
.screen-str{
  color: white;
  font-size: 36px;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  left:50%;
  z-index: 4;
  text-align: center;
}
.strike{
  color: @color-yellow-2;
  font-size: 60px;
}
.screen{
  height: 100vh;
  position: relative;
}
</style>