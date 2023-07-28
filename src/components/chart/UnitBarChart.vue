<script>
import {defineComponent} from 'vue';
import _ from 'lodash';
import * as d3 from 'd3';
import data from '@/static/dataset/congressman.json'
import bus from "@/utils/EventBus.js";
import {
  colorBlue1,
  colorPurple,
  colorRed1,
  colorWhite,
  colorYellow1,
  colorYellow2,
  congressman,
  relation
} from "@/utils/globe.js";
import {legendColor} from "d3-svg-legend";

export default defineComponent({
  name: "UnitBarChart",
  data(){
    return{
      data:congressman,
      relation:relation
    }
  },
  mounted() {
    this.initUnitBarChart()
    this.initChartLegend()
  },
  methods:{
    initUnitBarChart(){
      let that=this,top10persons=[]
      _.forEach(_.slice(_.orderBy(that.relation['nodes'],['PageRank_total'],['desc']), 0,10), function (item){
        top10persons.push(item['name'])
      })
      console.log(top10persons)
      let yIndex=Array.from({length: 55}, () => 0)
      const orderedData=_.orderBy(this.data,['Seniority'])
      const svg=d3.select('#unit-bar-chart')

      const circleAppend=svg.selectAll('circle')
      circleAppend.data(orderedData)
          .enter()
          .append('circle')
          .attr('cx', function(d){
            return 100+Math.ceil(d['Seniority'])*8
          })
          .attr('cy', function (d) {
            yIndex[Math.ceil(d['Seniority'])]+=6
            return 680-yIndex[Math.ceil(d['Seniority'])]
          })
          .attr('fill', function (d) {
            if (d['Party2']===1){
              return colorRed1
            }else if (d['Party2']===0){
              return colorBlue1
            }else {
              return colorWhite
            }
          })
          .attr('r', 2)
      let xScale=d3.scaleLinear()
          .domain([0,55])
          .range([0,55*8])


      let xAxis=d3.axisBottom(xScale)
      svg.append('g')
          .attr("class","axis")
          .attr("transform","translate(100,680)")
          // .attr('stroke', 'white')
          // .attr('fill', 'none')
          .call(xAxis)

      svg.append("g")
          .append('text')
          .attr('font-weight', 500)
          .attr('font-family', 'PMZDBTT')
          .attr('fonts-size',80)
          .attr("x",200)
          .attr("y",100)
          .attr('fill', colorWhite)
          .text("第118届国会议员按资历分类")

    },
    initChartLegend(){
      const labelList=["民主党","共和党","未知&无党派"]
      const colorList=[ colorBlue1, colorRed1, colorWhite]
      const ordinal = d3.scaleOrdinal()
          .domain(labelList)
          .range(colorList);

      const svg = d3.selectAll("#unit-bar-chart-legend");

      svg.append("g")
          .attr("class", "legendOrdinal")
          .attr("transform", "translate(50,40)");

      const legendOrdinal = legendColor()
          .shape("path", d3.symbol().type(d3.symbolCircle).size(20)())
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


    }
  }
})
</script>

<template>
  <div>
    <svg id="unit-bar-chart" width="600" height="740"></svg>
    <svg id="unit-bar-chart-legend" width="200" height="200"></svg>
  </div>
</template>

<style lang="less">
#unit-bar-chart-legend{
  position: absolute;
  top: 10%;
}
#unit-bar-chart{
  margin-left: 350px;
}
.axis path,
.axis line{
  fill: none;
  stroke: none;
  shape-rendering: crispEdges;
}

.axis text {
  font-family: sans-serif;
  font-size: 11px;
  font-weight: bolder;
  color: white;
}
</style>