<script>
import {defineComponent} from 'vue'
import L from "leaflet";
import mapData from "@/static/dataset/NewYork.json";
import {colorBlue1, colorBlue2, colorWhite, colorYellow1, colorYellow2} from "@/utils/globe.js";
import * as echarts from "echarts";

export default defineComponent({
  name: "NewYorkMap2",
  mounted() {
    this.initMap()
  },
  methods:{
    initMap(){
      echarts.registerMap('NY', mapData);
      const myChart=echarts.init(document.getElementById('map-ny2'))
      const option = {
        tooltip: {
          show:false,
          trigger:'item',
        },
        geo: {
          roam: false,
          map: 'NY',
          emphasis: {
            disabled: true
          },
          itemStyle: {
            areaColor: colorBlue1,
            borderColor: '#4f56cc',
            borderWidth: 4
          }
        },
        series:[{
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 2,
          label: {
            show: false
          },
          tooltip:{
            formatter: function (params, ticket) {
              console.log(params, ticket)
            }
          },
          emphasis:{
            label:{
              show:true,
              formatter:'{b}',
              position:'top',
              color:colorBlue1,
              fontFamily:'PMZDBTT'
            }
          }
        }
        ]
      }
      myChart.setOption(option)
    }
  }
})
</script>

<template>
  <div id="map-ny2"></div>
</template>

<style scoped lang="less">
#map-ny2{
  height: 400px;
  width: 400px;
  margin-left: 200px;
}

</style>