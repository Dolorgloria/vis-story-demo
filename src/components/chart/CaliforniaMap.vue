<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts'
import mapData from "@/static/dataset/California.json";
import {colorBlue1, colorYellow1} from "@/utils/globe";
import bus from "@/utils/EventBus.js";
import _ from "lodash";

export default defineComponent({
  name: "CaliforniaMap",
  mounted() {
    this.initMap()
  },
  methods:{
    initMap(){
      echarts.registerMap('Cal', mapData);
      const myChart=echarts.init(document.getElementById('map-cal'))
      const option = {
        tooltip: {
          show:false,
          trigger:'item',
        },
        geo: {
          roam: false,
          map: 'Cal',
          emphasis: {
            disabled: true
          },
          itemStyle: {
            areaColor: '#ffffff',
            borderColor: '#cccccc',
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
          },
          symbol: "circle",
          symbolSize: 20,
          //点的名称和经纬度
          data: [
            {
              name:'加州20选区',
              value: [-118.6659738,35.7729152],
              itemStyle: {
                color: colorYellow1,
                opacity:0.8
              },
            },
            {
              name:'加州37选区',
              value: [-118.3248754,34.0102133],
              itemStyle: {
                color: colorYellow1,
                opacity:0.8
              },
            }
          ]
        }
        ]
      }
      myChart.setOption(option)
      myChart.on('click', function (params) {
        if (_.isEqual(params.componentType,'series')){
          if (_.isEqual(params.dataIndex,0)){
            bus.emit('CDindex',1)
            //20选区
          }else if (_.isEqual(params.dataIndex,1)){
            bus.emit('CDindex',2)
            //37选区
          }
        }
      })
    },
  }
})
</script>

<template>
  <div id="map-cal"></div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
#map-cal{
  height: 400px;
  width: 400px;
  margin-left: 200px;
}

.marker-text{
  font-size:15px;
  color:red;
}
</style>