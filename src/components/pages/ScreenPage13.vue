<script>
import {defineComponent} from 'vue'
import * as d3 from 'd3'
import {colorWhite} from "@/utils/globe.js";

export default defineComponent({
  name: "ScreenPage13",
  mounted() {
    this.initUnitChart()
  },
  methods:{
    initUnitChart(){
      let tmpArray=new Array(4400)
      const svg=d3.select('#overlay-chart')
      const circleAppend=svg.selectAll('circle')
      circleAppend.data(tmpArray)
          .enter()
          .append('circle')
          .attr('cx', function (d, key) {
            return 5+(key%80)*12
          })
          .attr('cy', function (d, key) {

            return 5+Math.floor(key/80)*12
          })
          .attr('fill', colorWhite)
          .attr('r', 5)
    }
  }
})
</script>

<template>
  <div class="screen">
    <div class="screen-img"></div>
<!--    <img class="img" src="../../static/image/overlay/overlay.png"/>-->
<!--    <el-image class="img" src="../../static/image/overlay/overlay.png" fit="fill"></el-image>-->
    <svg id="overlay-chart" width="1200" height="600"></svg>
    <div class="screen-str pmzd-font">美国第118届国会<br/>总人数<span class="strike">541</span>人</div>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
.screen-img{
  background-image: url('../../static/image/overlay/overlay.png');
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
}
.img{
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
}
#overlay-chart{
  z-index: 2;
}
.screen-str{
  color: white;
  font-size: 36px;
  font-weight: 900;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 4;
  text-align: center;
}
.strike{
  color: @color-yellow-2;
  font-size: 40px;
}
.screen{
  height: 100vh;
  position: relative;
}
</style>