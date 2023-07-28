<script>
import {defineComponent} from 'vue'
import * as d3 from 'd3'
import _ from "lodash";
import {colorWhite} from "@/utils/globe.js";

export default defineComponent({
  name: "UnitChart",
  mounted() {
    this.initChartLeft()
    this.initChartRight()
  },
  methods:{
    getOffsetX(i,blockRowNum, offset,numPerBlock){
      const blockIndex=_.floor(i/numPerBlock)
      const blockRow=blockIndex%blockRowNum
      const rowIndex=i%numPerBlock%Math.sqrt(numPerBlock)
      return blockRow*(2*16+8+12)+rowIndex*(16+4)+8+offset
    },
    getOffsetY(i, blockRowNum, offset, numPerBlock){
      const blockIndex=_.floor(i/numPerBlock)
      const blockLine=_.floor(blockIndex/blockRowNum)
      const lineIndex=_.floor(i%numPerBlock/Math.sqrt(numPerBlock))
      return blockLine*(2*16+8+12)+lineIndex*(16+4)+8+offset
    },
    initChartLeft(){

      const svg=d3.select('#unit-view-1')
      const circleAppend=svg.selectAll('circle')
      let that=this
      circleAppend.data(new Array(45))
          .enter()
          .append('circle')
          .attr('cx', function (d, key) {
            return that.getOffsetX(key,5,100,4)
          })
          .attr('cy', function (d, key) {
            return that.getOffsetY(key,5,100,4)
          })
          .attr('r', 8)
          .attr('fill', function (d, key) {
            if (key<4){
              return '#636bff'
            }else {
              return 'white'
            }
          })
      svg.append("g")
          .append('text')
          .attr('font-weight', 500)
          .attr('font-family', 'PMZDBTT')
          .attr('fonts-size',80)
          .attr("x",70)
          .attr("y",50)
          .attr('fill', colorWhite)
          .text("与法案相关的45份修正案中，舒墨参与署名4次")
    },
    initChartRight(){
      const svg=d3.select('#unit-view-2')
      const circleAppend=svg.selectAll('circle')
      let that=this
      circleAppend.data(new Array(86))
          .enter()
          .append('circle')
          .attr('cx', function (d, key) {
            return that.getOffsetX(key,5,100,4)
          })
          .attr('cy', function (d, key) {
            return that.getOffsetY(key,5,100,4)
          })
          .attr('r', 8)
          .attr('fill', function (d, key) {
            if (key<7){
              return '#636bff'
            }else {
              return 'white'
            }
          })
      svg.append("g")
          .append('text')
          .attr('font-weight', 500)
          .attr('font-family', 'PMZDBTT')
          .attr('fonts-size',80)
          .attr("x",70)
          .attr("y",50)
          .attr('fill', colorWhite)
          .text("与法案相关的86次行动中，舒墨共有7次关键行动")

    }
  }
})
</script>

<template>
  <div class="unit-view">
    <el-row>
      <el-col :span="12">
        <svg id="unit-view-1" class="view"></svg>
      </el-col>
      <el-col :span="12">
        <svg id="unit-view-2" class="view"></svg>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
.unit-view{
  justify-content: space-between;
}
#unit-view-1{
  margin-left: 150px;
  width: 500px;
  height: 99vh;
}
#unit-view-2{
  width: 500px;
  height: 99vh;
}
</style>