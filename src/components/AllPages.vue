<template>
    <div>
      <FlowChart></FlowChart>
      <full-page ref="fullpage" :options="options" id="fullpage">

        <div class="section">
          <ScreenPage1></ScreenPage1>
        </div>
        <div class="section">
          <ScreenPage4></ScreenPage4>
        </div>
        <div class="section">
          <ScreenPage5></ScreenPage5>
        </div>
        <div class="section">
          <ScreenPage6></ScreenPage6>
        </div>
        <div class="section">
          <ScreenPage7></ScreenPage7>
        </div>
        <div class="section">
          <ScreenPage8></ScreenPage8>
        </div>
        <div class="section">
          <ScreenPage10></ScreenPage10>
        </div>

        <div class="section">
                  <ScreenPage11></ScreenPage11>
                </div>
        <div class="section">
          <CellAnimation></CellAnimation>
        </div>
        <div class="section">
          <ScreenPage12></ScreenPage12>
        </div>
        <div class="section">
          <ScreenPage13></ScreenPage13>
        </div>
        <div class="section">
          <ScreenPage14></ScreenPage14>
        </div>
        <div class="section">
          <ScreenPage15></ScreenPage15>
        </div>
        <div class="section">
          <ScreenPage16></ScreenPage16>
        </div>
        <div class="section">
          <ScreenPage18></ScreenPage18>
        </div>
        <div class="section">
          <ScreenPage19></ScreenPage19>
        </div>
        <div class="section">
          <ScreenPage20></ScreenPage20>
        </div>

        <div class="section">
          <GraphChart></GraphChart>
        </div>
        <div class="section">
          <UnitBarChart></UnitBarChart>
        </div>
        <div class="section">
          <ScreenPage25></ScreenPage25>
        </div>
        <div class="section">
          <ScreenPage26></ScreenPage26>
        </div>
        <div class="section">
          <ScreenPage27></ScreenPage27>
        </div>
        <div class="section">
          <ScreenPage26-2></ScreenPage26-2>
        </div>
        <div class="section">
          <ScreenPage28></ScreenPage28>
        </div>
        <div class="section">
          <ScreenPage30></ScreenPage30>
        </div>
        <div class="section">
          <ScreenPage31></ScreenPage31>
        </div>
        <div class="section">
          <ScreenPage32></ScreenPage32>
        </div>
        <div class="section">
          <ScreenPage33></ScreenPage33>
        </div>
        <div class="section"></div>
      </full-page>
    </div>
  </template>
  
<script>
import {colorBlack, colorWhite} from "@/utils/globe.js";
import ScreenPage1 from "@/components/pages/ScreenPage1.vue";
import FlowChart from "@/components/FlowChart.vue";
import ScreenPage2 from "@/components/pages/ScreenPage2.vue";
import ScreenPage3 from "@/components/pages/ScreenPage3.vue";
import ScreenPage9 from "@/components/pages/ScreenPage9.vue";
import ScreenPage10 from "@/components/pages/ScreenPage10.vue";
import ScreenPage8 from "@/components/pages/ScreenPage8.vue";
import ScreenPage7 from "@/components/pages/ScreenPage7.vue";
import ScreenPage6 from "@/components/pages/ScreenPage6.vue";
import ScreenPage5 from "@/components/pages/ScreenPage5.vue";
import ScreenPage4 from "@/components/pages/ScreenPage4.vue";
import ScreenPage11 from "@/components/pages/ScreenPage11.vue";
import ScreenPage12 from "@/components/pages/ScreenPage12.vue";
import ScreenPage13 from "@/components/pages/ScreenPage13.vue";
import ScreenPage14 from "@/components/pages/ScreenPage14.vue";
import ScreenPage15 from "@/components/pages/ScreenPage15.vue";
import ScreenPage16 from "@/components/pages/ScreenPage16.vue";
import ScreenPage18 from "@/components/pages/ScreenPage18.vue";
import ScreenPage19 from "@/components/pages/ScreenPage19.vue";
import ScreenPage20 from "@/components/pages/ScreenPage20.vue";
import ScreenPage21 from "@/components/pages/ScreenPage21.vue";
import UnitBarChart from "@/components/chart/UnitBarChart.vue";
import ScreenPage23 from "@/components/pages/ScreenPage23.vue";
import CellAnimation from "@/components/chart/CellAnimation.vue";
import SquareAnimation from "@/components/chart/SquareAnimation.vue";
import LineChartAnimation from "@/components/chart/LineChartAnimation.vue";
import NewYorkMap from "@/components/chart/NewYorkMap.vue";
import bus from "@/utils/EventBus.js";
import CDMap from "@/components/chart/CDMap.vue";
import ScreenPage25 from "@/components/pages/ScreenPage25.vue";
import ScreenPage26 from "@/components/pages/ScreenPage26.vue";
import ScreenPage27 from "@/components/pages/ScreenPage27.vue";
import ScreenPage28 from "@/components/pages/ScreenPage28.vue";
import ScreenPage30 from "@/components/pages/ScreenPage30.vue";
import ScreenPage31 from "@/components/pages/ScreenPage31.vue";
import ScreenPage32 from "@/components/pages/ScreenPage32.vue";
import ScreenPage262 from "@/components/pages/ScreenPage26-2.vue";
import GraphChart from "@/components/chart/GraphChart.vue";
import ScreenPage33 from "@/components/pages/ScreenPage33.vue";

export default {
  name: 'AllPages',
  components: {
    ScreenPage33,
    GraphChart,
    ScreenPage262,
    ScreenPage32,
    ScreenPage31,
    ScreenPage30,
    ScreenPage28,
    ScreenPage27,
    ScreenPage26,
    ScreenPage25,
    CDMap,
    NewYorkMap,
    LineChartAnimation,
    SquareAnimation,
    CellAnimation,
    ScreenPage23,
    UnitBarChart,
    ScreenPage21,
    ScreenPage20,
    ScreenPage19,
    ScreenPage16,
    ScreenPage15,
    ScreenPage14,
    ScreenPage13,
    ScreenPage12,
    ScreenPage11,
    ScreenPage5,
    ScreenPage6,
    ScreenPage7,
    ScreenPage8,
    ScreenPage10,
    ScreenPage9,
    ScreenPage3,
    ScreenPage2,
    FlowChart,
    ScreenPage1,
    ScreenPage4,
    ScreenPage18
  },
  data(){
    return{
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        onLeave: this.onLeave,
        sectionsColor: [colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack,colorWhite,colorWhite,colorBlack,colorBlack,colorBlack,colorBlack,colorBlack]
      }
    }
  },
  mounted() {
  },
  methods:{
    onLeave(origin, dest){
      bus.emit('curIndex', dest.index)
      if (dest.index===8){
        bus.emit('cellAnimationOn',true)
      }else if (dest.index===26){
        bus.emit('lineAnimation',true)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "@/style/global.less";
#screen1-str{
  text-align: center;
  font-weight: bolder;
  color: rgb(255, 69, 59);
  font-size: 80px;
  position: relative;
  top:50%;
  transform:translateY(-50%);
}
</style>