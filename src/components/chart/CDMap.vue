<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CDMap"
})
</script>

<template>
  <div class="full-screen">
    <img class="screen-img" style="margin-left: 10%;margin-right: 20%;" src="../../static/image/screen/map-chart.png"/>
  </div>
</template>

<style scoped lang="less">
.screen-img{
  height: 99%;
}

.full-screen{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}

</style>