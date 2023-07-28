<script>
import {defineComponent} from 'vue'
import {
  colorBlue1,
  colorPurple,
  colorRed1,
  colorWhite,
  colorYellow1,
  colorYellow2,
  congressman
} from "@/utils/globe.js";
import * as echarts from 'echarts'
import _ from "lodash";

export default defineComponent({
  name: "ScreenPage16",
  data(){
    return {
      ratios:[],
      options:[{
        title: {
          text: '参议院',
          left: 'center',
          textStyle:{
            color: colorWhite,
            fontSize:24,
            fontFamily:'PMZDBTT'
          }
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: 75,
                name: '男',
                itemStyle: {
                  color: colorPurple
                }
              },
              { value: 25,
                name: '女' ,
                itemStyle:{
                  color:'rgb(146, 76, 205)'
                }},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              label:{
                show:true,
                fontFamily:'PMZDBTT',
              }
            },
            label:{
              position:'inside',
              formatter: '{b} - {d}%',
              fontFamily:'PMZDBTT'
            }
          }
        ]
      }, {
        title: {
          text: '众议院',
          left: 'center',
          textStyle:{
            color: colorWhite,
            fontSize:24,
            fontFamily:'PMZDBTT'
          }
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: 75,
                name: '男',
                itemStyle: {
                  color: colorYellow1
                }
              },
              { value: 25,
                name: '女' ,
                itemStyle:{
                  color: colorYellow2
                }},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              label:{
                show:true,
                fontFamily:'PMZDBTT'
              }
            },
            label:{
              position:'inside',
              formatter: '{b} - {d}%',
              fontFamily:'PMZDBTT'
            }
          }
        ]
      }]
    }
  },
  mounted() {
    this.initChart()
    this.initRatio()
  },
  methods:{
    initChart(){
      let chart1=echarts.init(document.getElementById('left-chart'))
      chart1.setOption(this.options[0])
      let chart2=echarts.init(document.getElementById('right-chart'))
      chart2.setOption(this.options[1])
    },
    initRatio(){
      let tmpArray=[0,0]
      let that=this
      // console.log(_.countBy(congressman,['Gender']))
      _.forEach(congressman, function (item) {
        if (_.isEqual(item['Gender'], 0)){
          tmpArray[0]+=1
        }else {
          tmpArray[1]+=1
        }
        console.log(congressman.length)
        that.ratios[0]=_.round(tmpArray[0]/congressman.length*100,2)
        that.ratios[1]=_.round(tmpArray[1]/congressman.length*100,2)
      })
    }
  }
})
</script>

<template>
  <el-row style="height: 100vh">
    <el-col :span="7">
      <div id="left-chart" class="chart-small"></div>
    </el-col>
    <el-col :span="10">
      <div class="pmzd-font" style="font-size: 30px;color: white;text-align: center">美国国会</div>
      <img id="middle-chart" src="../../static/image/ratio/img.png"/>
      <span id="male-str" style="float: left" class="pmzd-font">男 {{ratios[1]+'%'}}</span>
      <span id="female-str" style="float: right" class="pmzd-font">女 {{ratios[0]+'%'}}</span>
    </el-col>
    <el-col :span="7">
      <div id="right-chart" class="chart-small"></div>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
@import "@/style/global.less";
.chart-small{
  width: 300px;
  height: 300px;
  margin-top:400px;
}
#middle-chart{
  width: 400px;
  height: 400px;
  text-align: center;
}
#male-str{
  color:rgb(255, 234, 201)
}
#female-str{
  color: rgb(238, 217, 255);
}
</style>