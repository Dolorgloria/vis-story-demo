<script>
import {defineComponent} from 'vue'
import L from "leaflet";
import mapData from "@/static/dataset/NewYork.json";
import _ from "lodash";
import {colorBlue1, colorBlue2, colorWhite, colorYellow1, colorYellow2} from "@/utils/globe.js";
import * as echarts from "echarts";
import {svg1, svg2, svg3, svg4, svg5} from "@/utils/path.js";

export default defineComponent({
  name: "NewYorkMap",
  data(){
    return{
      tooltipStr:[
          '康宁公司最近在门罗县扩建 1.39 亿美元、新增 270 个就业岗位, 支持芯片行业所需的光学技术。<br>' +
          '纽约州罗切斯特在全国排名第一的地区技术和经济增长的时机已经成熟。',
          'Western New York Science & Technology Advanced Manufacturing Park（制造业集群）<br>' +
          '布法罗大学等研究机构和伊利社区学院等技术培训学校在争夺制造培训和新的国家科学基金会基金方面处于有利地位<br>',
          '大宾厄姆顿地区已经成为不断发展的电池制造中心。<br>' +
          '响应EDA重建区域经济计划。<br>' +
          '波士顿大学和康奈尔大学这样的顶尖研究型学校的赋能。',
          '奥尔巴尼纳米技术综合体，该综合体有可能成为美国第一个国家半导体技术中心（NSTC）的主要枢纽，该中心是根据舒默的法案创建的.<br>' +
          'Global Foundries 去年宣布在马耳他建立第二家芯片工厂，主要专注于汽车和军用芯片生产，除了 3,000 名员工外，还创造了数千个就业岗位。',
          'Cree-Wolfspeed 投资 12 亿美元在Marcy建设全球最大的 200 毫米碳化硅半导体设施。<br>' +
          ' JMA Wireless 这样的雪城科技公司将能够利用历史性激励措施，例如 5G 和电信技术开发方面的 1.5B 美元，并利用雪城大学实验室、罗马实验室。',
          '芯片和科技公司的所在地。位于韦斯特切斯特县和达奇斯县的 IBM、位于埃尔姆斯福德的 SeeQc 和 Onsemi。<br>' +
          '纽约州立大学新帕尔茨分校是哈德逊谷增材制造中心和哈德逊谷创业中心的所在地，这两个中心都是历史悠久的技术和创业中心'
      ],
      tooltipList:[
          'Finger Lakes', 'Western New York', 'Southern Tier', 'Capital Region', 'Central New York & The Mohawk Valley', 'Hudson Valley'
      ]
    }
  },
  mounted() {
    this.initMap()
  },
  methods:{
    initMap(){
      echarts.registerMap('NY', mapData);
      const myChart=echarts.init(document.getElementById('map-ny'))
      let that=this
      const option = {
        tooltip:{
          backgroundColor:'#1f213e',
          borderColor:colorBlue1,
          borderWidth: 1,
          position: [0,0],
          textStyle:{
            color:colorWhite,
            fontFamily: 'PMZDBTT'
          },
          formatter: function (params) {
            return that.tooltipStr[_.indexOf(that.tooltipList,params.name)]
          }
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
            show: true,
            position: 'right',
            color:colorWhite,
            fontFamily:'PMZDBTT',
            formatter:'{b}'
          },
          symbol: "circle",
          symbolSize: 20,
          //点的名称和经纬度
          data: [
            {
              name:'Finger Lakes',
              value: [-76.92973540000003,42.7238362],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-76.92973540000003,42.4238362],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg4
            },
            {
              value: [-76.92973540000003,42.1238362],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg1
            },
            {
              name:'Southern Tier',
              value: [-75.960055,42.107704],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-75.960055,41.807704],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg2
            },
            {
              value: [-75.960055,41.507704],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg5
            },
            {
              name:'Capital Region',
              value: [-73.756233,42.652580],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-73.756233,42.352580],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg3
            },
            {
              value: [-73.756233,42.052580],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg4
            },
            {
              name:'Central New York & The Mohawk Valley',
              value: [-74.005941,40.712784],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-74.005941,40.412784],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg1
            },
            {
              value: [-74.005941,40.112784],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg5
            },
            {
              name:'Western New York',
              value: [-75.387853,43.34473],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-75.387853,43.04473],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg2
            },
            {
              value: [-75.387853,42.74473],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg3
            },
            {
              name:'Hudson Valley',
              value: [-73.961289,41.920902],
              itemStyle: {
                color: colorWhite,
                opacity:0.8
              },
              emphasis:{
                itemStyle:{
                  color:colorYellow1
                }
              }
            },
            {
              value: [-73.961289,41.620902],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg1
            },
            {
              value: [-73.961289,41.320902],
              itemStyle: {
                color: colorWhite
              },
              symbol:svg4
            },
          ]
        }
        ]
      }
      myChart.setOption(option)
    }
  }
})
</script>

<template>
  <div class="full-screen">
    <div id="map-ny"></div>
  </div>

</template>

<style scoped lang="less">
@import "@/style/global.less";
#map-ny{
  margin-top: 5vh;
  height: 89vh;
  width: 80%;
  margin-left: 10%;
}

</style>