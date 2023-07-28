<template>
    <div class="flow-chart" :style="active?{}:{display: 'none'}">
<!--      <div class="overlay" v-if="ifDarker"></div>-->
      <div class="vertical-line darker"></div>
      <div v-for="i in 5" :key="i">
        <div class="pin" :id="'pin-'+i"></div>
        <div class="tear" :id="'tear-'+i">
          <img class="tear-img" :src="getImageUrl('../static/image/animate/img-'+i+'.svg')" height="40" width="40" alt=""/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'animate.css';
  import {defineComponent} from 'vue'
  import anime from "animejs";
  import {getImageUrl} from "@/utils/util.js";
  import bus from "@/utils/EventBus.js";
  import {colorWhite} from "@/utils/globe.js";
  
  export default defineComponent({
    name: "FlowChart",
    data(){
      return{
        active:false,
        activeIndex:0,
        distance:60,
        ifDarker:false,
        beginPage:1,
        stepPage:[1,5]
      }
    },
    mounted() {
      let that=this
      bus.on('curIndex', (value)=>{
        console.log(value)
        if (value===7){
          that.active=true
          that.setHighlight(1)
        }
        if (value===16){
          that.setAfterActive(1)
          that.setHighlight(2)
        }
        if (value===24){
          that.setAfterActive(2)
          that.setHighlight(3)
        }
        if (value===27){
          that.active=false
        }
      })
    },
    methods:{
      getImageUrl,
      setHighlight(index){
        anime({
          targets: '#pin-'+index,
          translateY:{
            value: 100*Math.sqrt(2)*(-1),
            duration: 1000,
            easing: 'easeInOutExpo'
          },
          backgroundColor: '#ffcc00'
        })
        anime({
          targets: '#tear-'+index,
          translateY: {
            value: 100,
            duration: 60,
            easing: 'easeInOutExpo'
          },
          translateX: {
            value: -100,
            duration: 60,
            easing: 'easeInOutExpo'
          },
          scale: {
            value: [0,1],
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        })
      },
      setAfterActive(index){
        anime({
          targets: '#tear-'+index,
          translateY: {
            value: 250,
            duration: 1000,
            easing: 'easeInOutExpo'
          },
          translateX: {
            value: -250,
            duration: 1000,
            easing: 'easeInOutExpo'
          },
          scale: {
            value: [1,0],
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        })
        anime({
          targets: '#pin-'+index,
          translateY:{
            value: 250*Math.sqrt(2)*(-1),
            duration: 1000,
            easing: 'easeInOutExpo'
          },
          backgroundColor: 'rgba(14,14,14)',
          height:'4px',
          width:'4px',
          // borderColor:colorWhite,
          border:'2px solid white'
        })
      }
    }
  })
  </script>
  
  <style scoped lang="less">
  @import "@/style/global.less";

  .overlay{
    background-color: rgba(14,14,14,50%);
    width: 60px;
    height: 100vh;
    z-index: 6;
    position: absolute;
    left: 0;
    top:0;
  }
  
  .flow-chart{position: absolute;float: left;left: 0;top:0;}
  
  .no-active{
    animation: up 1s;
  }

  .vertical-line{
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 100vh;
    border-right: white 2px solid;
    z-index: 5;
  }
  .tear {
    rotate: 135deg;
    width: 50px;
    height: 50px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background-color: #ffcc00;
    position: absolute;
    z-index: 5;
    left:6px;
    transform: scale(0);
  }
  each(range(5), {
    #tear-@{value} {
      top: 395px+30px*((@value)-1);
    }
  })
  .pin{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 1;
    background-color: white;
    position: absolute;
    left: 27px;
    z-index: 5;
  }
  each(range(5), {
    #pin-@{value} {
      top: 435px+30px*@value;
    }
  })
  .tear-img{
    border-radius: 50%;
    transform: rotate(-135deg);
    position: absolute;
    left: 2.5px;
    bottom: 2.5px;
    margin-top: 10px;
  }
  .darker{
    filter: opacity(50%);
  }
  </style>