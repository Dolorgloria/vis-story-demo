<script>
import {defineComponent} from 'vue'
import * as echarts from "echarts";
import {colorWhite} from "@/utils/globe.js";

export default defineComponent({
  name: "CarouselChart2",
  data(){
    return{
      options:[
        {
          title:{
            text:'纽约州',
            subtext:'居民收入情况',
            textStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            },
            subtextStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            }
          },
          xAxis: [
            { type: 'category', gridIndex: 0,data: ['人均年收入', '家庭\n收入\n中位数'],axisLabel:{
                show:true,
                color:'white',
                fontFamily:'PMZDBTT',
                fontSize:16
              }},
            { type: 'category', gridIndex: 1,data:['贫困人口比例'],axisLabel:{
                show:true,
                color:'white',
                fontFamily:'PMZDBTT',
                fontSize:16
              } }
          ],
          yAxis: [{ gridIndex: 0,show:true }, { gridIndex: 1, show:false }],
          grid: [{ left: '0%', right: '52%' }, { left: '52%' }],
          series: [{
            label:{
              show:true,
              color:'white',
              fontFamily:'PMZDBTT',
              fontSize:16
            },
            data: [43078,92454],
            type: 'bar',
            itemStyle:{
              color:'#ffcc00'
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          },
            {
              label:{
                show:true,
                color:'black',
                fontFamily:'PMZDBTT',
                formatter: '贫困人口比例\n{c}%',
                fontSize:16
              },
              xAxisIndex: 1,
              yAxisIndex: 1,
              name: '贫困人口比例',
              type: 'bar',
              stack: 'Poverty',
              data: [10],
              itemStyle:{
                color:'#ffffff'
              }
            },
            {
              label:{
                show:true,
                color:'black',
                fontFamily:'PMZDBTT',
                formatter: '非贫困人口比例\n{c}%',
                fontSize:16
              },
              xAxisIndex: 1,
              yAxisIndex: 1,
              name: '非贫困人口比例',
              type: 'bar',
              stack: 'Poverty',
              data: [90],
              itemStyle:{
                color:'#fff2bd'
              }
            },
          ]
        },
        {
          title:{
            text:'纽约州',
            subtext:'人种分布',
            textStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            },
            subtextStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            }
          },
          series: [
            {
              label:{
                show:true,
                fontFamily:'PMZDBTT',
                color:'black',
                formatter:'{b}\n{c}%'
              },
              type: 'treemap',
              data: [
                {
                  name: '白人',
                  value: 1-0.3641-0.0013-0.0009-0.0180,
                  itemStyle:{
                    color:'#faede4'
                  }
                },
                {
                  name: '非拉美裔白人',
                  value: 0.3641,
                  itemStyle:{
                    color:'#ecd4c4'
                  }
                },
                {
                  name: '黑人/非裔',
                  value: 0.0180,
                  itemStyle:{
                    color:'#332216'
                  }
                },
                {
                  name: '亚裔',
                  value: 0.0013,
                  itemStyle:{
                    color:'#eddcbf'
                  }
                },
                {
                  name: '其他',
                  value: 0.0009,
                  itemStyle:{
                    color:'#58402e'
                  }
                }
              ]
            }
          ]
        },
        {
          title:{
            text:'纽约州',
            subtext:'居民教育程度',
            textStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            },
            subtextStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            }
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 30,
                  formatter:'{b}\n{d}%',
                  color:'white',
                  fontFamily:'PMZDBTT'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 0.3, name: '本科' ,
                  itemStyle:{
                    color:'#ffcc00'
                  }
                },
                { value: 0.6, name: '高中',
                  itemStyle: {
                    color: '#ffea95'
                  }
                },
                { value: 0.1, name: '其他',itemStyle: {
                    color: '#fff7d7'
                  } }
              ]
            }
          ]
        },
        {
          title:{
            text:'纽约州',
            subtext:'城市化',
            textStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            },
            subtextStyle:{
              color:colorWhite,
              fontFamily:'PMZDBTT'
            }
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 30,
                  formatter:'{b}\n{d}%',
                  color:'white',
                  fontFamily:'PMZDBTT'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 53.5, name: '城市' ,
                  itemStyle:{
                    color:'#ffcc00'
                  } },
                { value: 31, name: '农村',
                  itemStyle: {
                    color: '#ffea95'
                  } },
                { value: 15.5, name: '郊区',itemStyle: {
                    color: '#fff7d7'
                  } }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods:{
    initChart(){
      const myChart1=echarts.init(document.getElementById('carousel-chart2-1'))
      myChart1.setOption(this.options[0])
      const myChart2=echarts.init(document.getElementById('carousel-chart2-2'))
      myChart2.setOption(this.options[1])
      const myChart3=echarts.init(document.getElementById('carousel-chart2-3'))
      myChart3.setOption(this.options[2])
      const myChart4=echarts.init(document.getElementById('carousel-chart2-4'))
      myChart4.setOption(this.options[3])
    }
  }
})
</script>

<template>
  <el-carousel height="60vh" :autoplay="false" arrow="always" indicator-position="none">
    <el-carousel-item v-for="item in 4" :key="item">
      <div class="carousel-chart" :id="'carousel-chart2-'+item"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="less">
.carousel-chart{
  height: 400px;
  width: 400px;
  margin-left: 150px;
}
</style>