<template>
  <!--  <el-radio-group class="dark" v-model="encodingIndex" @change="changeEncoding">-->
  <!--    <el-radio class="dark" v-for="(i, k) in encodingType" :key="k" :label="k">{{i}}</el-radio>-->
  <!--  </el-radio-group>-->
  <el-row>
    <el-col :span="14">
      <el-radio-group style="margin-left: 10%;" v-model="encodingIndex" size="small" @change="changeEncoding">
        <el-radio v-for="(item, key) in encodingType" :label="key">{{item}}</el-radio>
      </el-radio-group>
      <div id="graph-chart"></div>
    </el-col>
    <el-col :span="10">
      <div id="graph-bar-chart"></div>
    </el-col>
  </el-row>
</template>

<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import data from '@/static/dataset/relation.json'
import _ from "lodash";
import * as d3 from "d3";
import bus from "@/utils/EventBus.js";
import {getImageUrl} from "@/utils/util.js";
import {colorBlue1, colorWhite} from "@/utils/globe.js";

export default defineComponent({
  name: "GraphChart",
  data(){
    return{
      maxValue:[0,0,0,0,0],
      minValue:[10000,10000,10000,10000,10000],
      top10values:[0,0,0,0,0],
      data:data,
      encodingIndex:0,
      encodingType:['PageRank_total', 'BC_total', 'Bills_total', 'Cospon_freq_total', 'Sponsor_freq_total'],
      categories:[
        {
          "name": "参议院 - 民主党"
        },
        {
          "name": "众议院 - 民主党"
        },
        {
          "name": "参议院 - 共和党"
        },
        {
          "name": "众议院 - 共和党"
        },
        {
          "name": "其他"
        }]
    }
  },
  mounted() {
    this.initData()
    this.initChart()
    this.initBarChart()
  },
  methods:{
    getOption(nodes, links){
      return {
        title:{
          text:'xx关系图',
          textStyle:{
            color:colorWhite,
            fontFamily:'PMZDBTT'
          },
          top: 30
        },
        color: ['#887fff', '#7fb5ff', '#ff666e', '#ff8266', '#ffffff'],
        tooltip: {},
        legend: {
          textStyle: {
            color: 'white',
            fontFamily: 'PMZDBTT'
          }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            tooltip: {
              trigger:'item',
              padding:0,
              borderColor:colorBlue1,
              formatter: function (params) {
                if (params.data.id===398){
                  return "<div class='tooltip-item'>民主党领袖 会议主席</div>" +
                      "<div class='tooltip-item'>资历：42年连任</div>" +
                      "<div class='tooltip-item'>议员经历<br>参议院：第106届-第108届（1999年-现在）<br>众议院：第97届-第105届（1981年-1989年）</div>"
                }
              }
            },
            type: 'graph',
            layout: 'circular',
            circular: {
              rotateLabel: true
            },
            data: nodes,
            links: links,
            categories: this.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      }
    },
    addLabel(index){
      let that=this
      _.forEach(that.data['nodes'], function (item){
        if (item[that.encodingType[index]]>that.top10values[index]||_.isEqual(item['name'],'Charles E. Schumer')){
          item['label']={
            show:true
          }
        }else {
          item['label']={
            show:false
          }
        }
      })
    },
    initData(){
      // console.log(data['links'])
      for (let i = 0; i < 5; i++) {
        const propertyStr=this.encodingType[i]
        this.top10values[i]=_.orderBy(this.data['nodes'],[propertyStr],['desc'])[9][propertyStr]
      }
      let that=this
      // bus.emit('top10persons',_.slice()
      _.forEach(that.data['nodes'], function (item) {
        if (_.isEqual(item['name'],'Charles E. Schumer')){
          item['itemStyle']={
            shadowColor: 'rgba(255, 255, 255)',
            shadowBlur: 15
          }
          item['label']={
            show:true
          }
        }
        for (let i = 0; i < 5; i++) {
          const tmpValue=item[that.encodingType[i]]
          if (tmpValue>that.maxValue[i]){
            that.maxValue[i]=tmpValue
          }
          if (tmpValue<that.minValue[i]) {
            that.minValue[i]=tmpValue
          }
        }
      })
    },
    changeEncoding(){
      const switchEncodingStr=this.encodingType[this.encodingIndex]
      let scale = d3.scaleLinear().domain([this.minValue[this.encodingIndex], this.maxValue[this.encodingIndex]]).range([5,60])
      this.addLabel(this.encodingIndex)

      _.forEach(this.data['nodes'], function (item) {
        item['symbolSize']=scale(item[switchEncodingStr])
      })
      let myEchart=echarts.init(document.getElementById('graph-chart'))
      myEchart.setOption(this.getOption(this.data['nodes'], this.data['links']))
      this.initBarChart()
    },
    initChart(){
      let scale = d3.scaleLinear().domain([this.minValue[0], this.maxValue[0]]).range([5,60])
      this.addLabel(this.encodingIndex)
      _.forEach(this.data['nodes'], function (item) {
        item['symbolSize']=scale(item['PageRank_total'])
      })
      let myEchart=echarts.init(document.getElementById('graph-chart'))
      myEchart.setOption(this.getOption(this.data['nodes'], this.data['links']))
    },
    initBarChart(){
      let myChart=echarts.init(document.getElementById('graph-bar-chart'))
      let tmpData=_.reverse(_.slice(_.orderBy(this.data['nodes'],[this.encodingType[this.encodingIndex]],['desc']), 0,10))
      let xAxis=[],chartData=[]
      let that=this
      _.forEach(tmpData, function (item) {
        xAxis.push({value:item['name'],textStyle:{
          color:'white',
            fontFamily:'PMZDBTT'
          }})
        let itemColor=''
        if(_.isEqual(item['party'],'Republican')){
          if(_.isEqual(item['House'], 'Senate')){
            itemColor='#ff666e'
          }else {
            itemColor='#ff8266'
          }
        }else if(_.isEqual(item['party'],'Democratic')){
          if(_.isEqual(item['House'], 'Senate')){
            itemColor='#887fff'
          }else {
            itemColor='#7fb5ff'
          }
        }else {
          itemColor='white'
        }
        chartData.push({
          value: item[that.encodingType[that.encodingIndex]],
          itemStyle:{
            color: itemColor
          }
        })
      })
      let option = {
        tooltip:{},
        grid:{
          containLabel:true
        },
        yAxis: {
          type: 'category',
          data: xAxis
        },
        xAxis: {
          type: 'value',
          axisLabel:{
            show:true,
            fontFamily:'PMZDBTT',
            color:'white'
          }
        },
        series: [
          {
            data: chartData,
            type: 'bar'
          }
        ]
      };
      myChart.setOption(option)
    }
  }
})
</script>

<style lang="less">
@import "@/style/global.less";
@border-radius-num:10px;
#graph-bar-chart{
  width: 80%;
  margin-left: 10%;
  height: 80vh;
  margin-top: 10vh;
}
#graph-chart{
  width: 80%;
  margin-left: 10%;
  height: 80vh;
  margin-top: 10vh;
}
.info-card{
  width: 400px;
  height: 300px;
  border-radius: @border-radius-num;
  border: white 3px solid;
  background-color: #1f213f;
}
.info-left-str{
  color:white;
}
#chinese-name{
  font-weight: 900;
}
#english-name{
  font-weight: bold;
}
.info-right-card{
  border-radius: @border-radius-num;
  background-color: #636bff;
  color: white;
}


.el-radio__input.is-checked + .el-radio__label {
  color: @color-blue-1 !important;
}
.el-radio__input.is-checked .el-radio__inner {
  background: @color-blue-1 !important;
  border-color: @color-blue-1 !important;
}
.el-radio__inner:hover {
  border-color: @color-blue-1 !important;
}
.tooltip-item{
  background-color: @color-blue-1;
  color:@color-white;
  font-family: 'PMZDBTT';
}
</style>