<script>
import {defineComponent} from 'vue'
import * as echarts from "echarts";
import bus from "@/utils/EventBus.js";
import {colorWhite} from "@/utils/globe.js";

export default defineComponent({
  name: "CarouselCharts",
  data(){
    return{
      activeIndex:1,
      dataList:[
        [
          [31124, 77205],
          [11.5,100-11.5],
          [56.35,3.56, 7.09, 32.93],
          [0.28, 0.759-0.28, 1-0.759],
          [53.5, 31, 15.5]
        ],
        [
          [35481, 60083],
          [18.5, 100-0.185],
          [1-0.2451-0.2288-0.0008-0.0070, 0.2451, 0.2288, 0.0008, 0.0070],
          [0.39, 0.813-0.39, 1-0.813],
          [22.6, 76.9, 0.5]
        ]
      ]
    }
  },
  mounted() {
    // console.log(this.dataList[this.activeIndex-1][0])
    // this.activeIndex=1
    let options1=[
      {
        title:{
          text:'加州20选区',
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
          { type: 'category', gridIndex: 0,data: ['人均年收入', '家'],axisLabel:{
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
          data: this.dataList[0][0],
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
            data: [this.dataList[0][1][0]],
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
            data: [this.dataList[0][1][1]],
            itemStyle:{
              color:'#fff2bd'
            }
          },
        ]
      },
      {
        title:{
          text:'加州20选区',
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
                value: 56.3506,
                itemStyle:{
                  color:'#faede4'
                }
              },
              {
                name: '黑人/非裔',
                value: 3.5647,
                itemStyle:{
                  color:'#332216'
                }
              },
              {
                name: '亚裔',
                value: 7.0917,
                itemStyle:{
                  color:'#eddcbf'
                }
              },
              {
                name: '其他',
                value: 32.993,
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
          text:'加州20选区',
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
              { value: 0.28, name: '本科' ,
                itemStyle:{
                  color:'#ffcc00'
                }
              },
              { value: 0.479, name: '高中',
                itemStyle: {
                  color: '#ffea95'
                }
              },
              { value: 0.241, name: '其他',itemStyle: {
                  color: '#fff7d7'
                } }
            ]
          }
        ]
      },
      {
        title:{
          text:'加州20选区',
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
    let options2=[
      {
        title:{
          text:'加州37选区',
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
          data: this.dataList[1][0],
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
            data: [this.dataList[1][1][0]],
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
            data: [this.dataList[1][1][1]],
            itemStyle:{
              color:'#fff2bd'
            }
          },
        ]
      },
      {
        title:{
          text:'加州37选区',
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
                value: 13.41,
                itemStyle:{
                  color:'#faede4'
                }
              },
              {
                name: '黑人/非裔',
                value: 21.07,
                itemStyle:{
                  color:'#332216'
                }
              },
              {
                name: '亚裔',
                value: 6.58,
                itemStyle:{
                  color:'#eddcbf'
                }
              },
              {
                name: '其他',
                value: 58.93,
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
          text:'加州37选区',
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
              { value: this.activeIndex===1?0.28:0.39, name: '本科' ,
                itemStyle:{
                  color:'#ffcc00'
                }
              },
              { value: this.activeIndex===1?0.759-0.28:0.813-0.39, name: '高中',
                itemStyle: {
                  color: '#ffea95'
                }
              },
              { value: this.activeIndex===1?1-0.759:1-0.813, name: '其他',itemStyle: {
                  color: '#fff7d7'
                } }
            ]
          }
        ]
      },
      {
        title:{
          text:'加州37选区',
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
    const myChart1=echarts.init(document.getElementById('carousel-chart-1'))
    const myChart2=echarts.init(document.getElementById('carousel-chart-2'))
    const myChart3=echarts.init(document.getElementById('carousel-chart-3'))
    const myChart4=echarts.init(document.getElementById('carousel-chart-4'))
    myChart1.setOption(options1[0])
    myChart2.setOption(options1[1])
    myChart3.setOption(options1[2])
    myChart4.setOption(options1[3])
    bus.on('CDindex', (index)=>{
      if (index===1){
        myChart1.setOption(options1[0])
        myChart2.setOption(options1[1])
        myChart3.setOption(options1[2])
        myChart4.setOption(options1[3])
      }else {
        myChart1.setOption(options2[0])
        myChart2.setOption(options2[1])
        myChart3.setOption(options2[2])
        myChart4.setOption(options2[3])
      }

    })
  },
  methods:{
    initChart(){



    }
  }
})
</script>

<template>
  <el-carousel height="60vh" :autoplay="false" arrow="always" indicator-position="none">
    <el-carousel-item v-for="item in 4" :key="item">
      <div class="carousel-chart" :id="'carousel-chart-'+item"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="less">
@import "@/style/global.less";
.carousel-chart{
  height: 400px;
  width: 400px;
  margin-left: 250px;
}
</style>