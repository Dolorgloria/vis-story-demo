<script>
import {defineComponent} from 'vue'
import * as d3 from "d3";
import _ from "lodash";
import {colorBlue1, colorPurple, colorRed1, colorWhite, colorYellow2, congressman} from "@/utils/globe.js";
import {legendColor} from "d3-svg-legend";

export default defineComponent({
  name: "ScreenPage15",
  methods:{
    parliamentLayout(data,startAngle, endAngle, totalAngle, r0, r1, size){
      let points = [];
      let r = r0;
      let sum=0
      // console.log(this.jsonData)
      while (sum<data.length){
        let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
        let newSize = (totalAngle * r) / totalRingSeatsNumber;
        sum+=totalRingSeatsNumber
        for (
            let k = Math.floor((startAngle * r) / newSize) * newSize;
            k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
            k += newSize
        ) {
          let angle = k / r;
          let x = Math.cos(angle) * r;
          let y = Math.sin(angle) * r;
          points.push([x, y]);
        }
        r += size;
      }
      return points;
    },
    initCurveChart1(){
      const orderedData=_.orderBy(congressman,['Party'],['desc'])
      const points=this.parliamentLayout(orderedData,-Math.PI,Math.PI,Math.PI * 2,60,200,14)
      const svg = d3.select('#unit-chart')
      const circleAppend=svg.selectAll('circle')
      circleAppend.data(orderedData)
          .enter()
          .append('circle')
          .attr('cx', function (d,key) {
            return points[key][0]+200
          })
          .attr('cy', function (d, key) {
            return points[key][1]+200
          })
          .attr('r', 5)
          .attr('fill',function(d){
            switch (d['Party']) {
              case 'R':
                return colorPurple
              case 'D':
                return colorYellow2
              default:
                return colorWhite
            }
          })
    },
    calRatio(){
      let first=[0,0,0],result=[0,0,0]
      _.forEach(congressman, function (item) {
        switch (item['Party']) {
          case 'R':
            first[0]+=1
                break
          case 'D':
            first[1]+=1
                break
          default:
            first[2]+=1
        }
      })
      for (let i = 0; i < 3; i++) {
        result[i]=_.round(first[i]/congressman.length*100,2)
      }
      return result
    },
    initCurveChartLegend(){
      const ratio=this.calRatio()
      const labelList=["民主党  "+ratio[0]+'%', "共和党  "+ratio[1]+'%', "未知&无党派  "+ratio[2]+'%']
      const colorList=[ colorPurple, colorYellow2, colorWhite]
      const ordinal = d3.scaleOrdinal()
          .domain(labelList)
          .range(colorList);

      const svg = d3.selectAll("#unit-chart-legend");

      svg.append("g")
          .attr("class", "legendOrdinal")
          .attr("transform", "translate(50,20)");

      const legendOrdinal = legendColor()
          .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
          .shapePadding(10)
          .scale(ordinal);

      svg.select(".legendOrdinal")
          .call(legendOrdinal);

      svg.selectAll(".label")
          .attr('fill',function (d) {
            return colorList[_.indexOf(labelList,d)]
          })
          .attr('font-weight', 500)
          .attr('font-family', 'PMZDBTT')
          .attr('fonts-size',24)

    },
    getOffsetX(i,blockRowNum, offset){
      const blockIndex = _.floor(i / 25)
      const blockRow = blockIndex % blockRowNum
      const rowIndex = i % 25 % 5
      return 5 + blockRow * (12*5+6) + rowIndex * (5*2+2) + offset
    },
    getOffsetY(i,blockRowNum, offset){
      const blockIndex = _.floor(i / 25)
      const blockLine = _.floor(blockIndex / blockRowNum)
      const lineIndex = _.floor(i % 25 / 5)
      return 5+blockLine * (12*5+6) + lineIndex * (5*2+2) + offset
    },
  },
  mounted() {
    this.initCurveChart1()
    this.initCurveChartLegend()
  }
})
</script>

<template>
  <div style="position: relative;height: 100vh;width: 100%;">
    <svg id="unit-chart" width="400" height="400"></svg>
    <svg id="svg-color-quant" width="400" height="400"></svg>
  </div>
  <svg id="unit-chart-legend" width="400" height="400"></svg>
</template>

<style scoped lang="less">
@import "@/style/global.less";
#unit-chart{
  position: absolute;
  top: 25%;
  left: 25%;
}
#unit-chart-legend{
  position: absolute;
  left: 60%;
  top: 25%;
}
</style>