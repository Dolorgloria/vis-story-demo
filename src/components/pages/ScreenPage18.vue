<script>
import {defineComponent} from 'vue'
import axios from "axios";
import {colorPurple, colorWhite, colorYellow2} from "@/utils/globe.js";
import * as d3 from "d3";
import {legendColor} from "d3-svg-legend";
import _ from "lodash";

export default defineComponent({
  name: "ScreenPage17",
  mounted() {
    // this.initMyMap()
    this.initCurveChartLegend()
  },
  methods:{
    initMyMap(){
      let myMap=echarts.init(document.getElementById('map-container'))
      myMap.showLoading()
      axios('api/cd113.geojson').then(res=>{
        echarts.registerMap('cd', res.data,{
          Alaska: {
            left: -131,
            top: 25,
            width: 15
          },
          Hawaii: {
            left: -110,
            top: 28,
            width: 5
          }
        });
        myMap.hideLoading()
        let option = {
          series: [
            {
              name: 'precinct',
              type: 'map',
              roam: true,
              map: 'cd',
              zoom:4,
              center:[ -98.283,38.633],
              emphasis: {
                disabled:true
              }
            }
          ]
        }
        myMap.setOption(option)
      })
    },
    initCurveChartLegend(){
      const labelList=["民主党", "共和党", "未知&无党派"]
      const colorList=[ '#636bff', '#ff8266', colorWhite]
      const ordinal = d3.scaleOrdinal()
          .domain(labelList)
          .range(colorList);

      const svg = d3.selectAll("#map-chart-legend");

      svg.append("g")
          .attr("class", "legendOrdinal")
          .attr("transform", "translate(50,20)");

      const legendOrdinal = legendColor()
          // .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
          // .shapePadding(10)
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
  }
})
</script>

<template>
  <div class="full-screen">
    <img class="screen-img" src="../../static/image/screen/map-chart.png"/>
    <svg id="map-chart-legend" width="200" height="200"></svg>
  </div>
<!--  <div id="map-container"></div>-->
</template>

<style scoped lang="less">
#map-chart-legend{
  position: absolute;
  left: 80%;
  top: 20%;
}
.screen-img{
  width:75%;
  height: 88%;
  margin-top: 5%;
  margin-left: 200px;
}
//@import "@/style/global.less";
#map-container {
  width:100%;
  height:80vh;
  margin-top: 10vh;
}
</style>