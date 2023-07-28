<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ScreenPAge4"
})
</script>

<template>
  <div class="full-screen">
    <video class="screen-img" autoplay muted>
      <source src="../../static/image/video/video-4.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
</style>