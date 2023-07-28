<script>
import {defineComponent} from 'vue'
import {colorBlue1, colorPurple, colorRed1, colorYellow2, congressman} from "@/utils/globe.js";
import * as d3 from 'd3'
import _ from "lodash";

export default defineComponent({
  name: "ScreenPage14",
  mounted() {
    this.initUnitChart()
  },
  methods:{
    getOffsetX(i,blockRowNum, offset,numPerBlock){
      const blockIndex=_.floor(i/numPerBlock)
      const blockRow=blockIndex%blockRowNum
      const rowIndex=i%numPerBlock%Math.sqrt(numPerBlock)
      return blockRow*(10*5+8*4+12)+rowIndex*(10+6)+8+offset
    },
    getOffsetY(i, blockRowNum, offset, numPerBlock){
      const blockIndex=_.floor(i/numPerBlock)
      const blockLine=_.floor(blockIndex/blockRowNum)
      const lineIndex=_.floor(i%numPerBlock/Math.sqrt(numPerBlock))
      return blockLine*(10*5+8*4+12)+lineIndex*(10+6)+8+offset
    },
    initUnitChart(){
      let that=this
      const svg=d3.select('#overlay-chart-15')
      const circleAppend=svg.selectAll('circle')
      circleAppend.data(congressman)
          .enter()
          .append('circle')
          .attr('cx', function (d, key) {
            return that.getOffsetX(key,4,200,25)
          })
          .attr('cy', function (d, key) {
            return that.getOffsetY(key,4,640,25)
          })
          .attr('fill', function (d, key){
            if (key<100){
              return colorPurple
            }else {
              return colorYellow2
            }
          })
          .attr('r', 5)
    }
  }
})
</script>

<template>
<!--  <div class="screen-img"></div>-->
  <el-row style="position: absolute;left: 0;top: 0;" class="pmzd-font">
    <el-col :span="7">
      <div id="left-card">
        <div class="str-num">435</div>
        <div class="str-num">众议院</div>
      </div>
    </el-col>
    <el-col :span="10">
      <svg id="overlay-chart-15" width="1200" height="1200"></svg>
    </el-col>
    <el-col :span="7">
      <div id="right-card">
        <div class="str-num">100</div>
        <div class="str-num">参议院</div>
      </div>
    </el-col>
  </el-row>

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

#left-card{
  color: @color-yellow-1;
  text-align: center;
  padding-top: 200px;
}
#right-card{
  color: @color-purple;
  text-align: center;
  padding-top: 200px;
}
.str-num{
  font-size: 36px;
  font-weight: bolder;
}
#overlay-chart-15{
  transform: rotate(90deg);
}
</style>