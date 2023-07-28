<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts'
import _ from "lodash";
import {colorBlue1, colorWhite} from "@/utils/globe.js";
import bus from "@/utils/EventBus.js";

export default defineComponent({
  name: "LineChartAnimation",
  data(){
    return{
      descStr:['起源于《无尽边境法案2020》', '修改后提出《2021年美国创新与竞争法案》', '增加资深议员联署，并整合多个相关法案，于参议院通过', '进一步整合两院意见，形成《芯片与科学法案》', '总统签署'],
      dataList: [[0, 10.9], [11, 20.9], [22, 48.5], [26, 68.8], [27, 100]],
      nameList:['查尔斯·舒默','罗·卡纳','蒂姆·瑞安','拜登'],
      dateList:['2020年5月', '2021年4月', '2022年3月', '2022年7月', '2022年8月']
    }
  },
  mounted() {
    this.initLineChart()
  },
  methods: {
    initLineChart(){
      const tmpList=[]
      _.forEach(this.dataList, function(item){
        tmpList.push({
          value:item,
          itemStyle:{
            color:'white',
            borderColor:'white',
            borderWidth:4
          }
        })
      })
      let that=this
      const chart=echarts.init(document.getElementById('line-chart'))
      const option = {
        title:{
          text:'舒默任职经历及法案被通过的概率',
          textStyle:{
            color:colorWhite,
            fontFamily:'PMZDBTT',
            fontWeight:'normal'
          }
        },
        tooltip:{
          formatter: function (param) {
            return that.descStr[param.dataIndex]
          },
          textStyle:{
            fontFamily: 'PMZDBTT'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: false,
          axisLine:{
            lineStyle:{
              color:colorWhite,
              width:2
            }
          },
          axisLabel:{
            show:true,
            fontFamily:'PMZDBTT',
            formatter: function (params){
              let label=''
              switch (params) {
                case 0:
                  label='2020年5月'
                      break
                case 11:
                  label='2021年4月'
                      break
                case 22:
                  label='2022年3月'
                      break
                case 27:
                  label='2022年8月'
                      break
              }
              return label
            }
          },
          splitLine:{
            show: false
          },
          splitNumber: 27,
          axisTick:{
            show:false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            animationDuration:2000,
            type: 'line',
            data: tmpList,
            symbol:'circle',
            label: {
              show: true,
              formatter: function (params) {
                console.log(params)
                return that.dateList[params.dataIndex]+' - '+params.value[1]+'%'
              },
              position: 'insideTopLeft',
              fontFamily: 'PMZDBTT',
              color:colorWhite
            },
            lineStyle: {
              color: 'white',
              width: 2
            },
          },
          {
            animationDuration: 1000,
            animationDelay: function (idx) {
              // 越往后的数据延迟越大
              return idx * 200;
            },
            symbolSize:45,
            data: [{
              value:[0, 17.9],
              symbol:'image://./figure/1.png'
            }, {
              value:[0, 28.9],
              symbol:'image://./figure/2.png'
            }, {
              value:[11, 27.9],
              symbol:'image://./figure/1.png'
            }, {
              value:[22, 55.5],
              symbol:'image://./figure/1.png'
            }, {
              value:[25, 72.5],
              symbol:'image://./figure/1.png'
            }, {
              value:[25, 83.5],
              symbol:'image://./figure/3.png'
            }, {
              value:[26, 99],
              symbol:'image://./figure/4.png'
            },
            ],
            type: 'scatter',
            tooltip:{
              formatter: function (params) {
                return that.nameList[_.split(_.split(params.data.symbol,'/')[4], '.')[0]-1]
              },
              borderColor: colorWhite
            }
          }
        ]
      };

      bus.on('lineAnimation', (value)=>{
        if (value){
          chart.setOption(option)
        }
      })
    }
  }
})
</script>

<template>
  <div id="line-chart"></div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
#line-chart{
  margin-left: 10%;
  width: 80%;
  margin-top: 5vh;
  height: 90vh;
}
</style>