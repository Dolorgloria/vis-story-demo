<script>
import {defineComponent} from 'vue'
import anime from "animejs";
import {getImageUrl} from "@/utils/util.js";
import bus from "@/utils/EventBus.js";

export default defineComponent({
  name: "CellAnimation",
  data(){
    return{
      strList:['立法','','行政','司法']
    }
  },
  mounted() {
    bus.on('cellAnimationOn',(value)=>{
      if (value){
        this.setAnimation()
      }
    })
  },
  methods:{
    getImageUrl,
    setAnimation(){
      anime({
        targets:'#drop-1',
        translateY:{
          value:-250,
          duration:100,
          easing:'spring(1, 80, 10, 0)'
        }
      })
      anime({
        targets:'#drop-3',
        translateX:{
          value:-216.5,
          duration:100,
          easing:'spring(1, 80, 10, 0)'
        },
        translateY:{
          value:125,
          duration:400
        }
      })
      anime({
        targets:'#drop-4',
        translateX:{
          value:216.5,
          duration:100,
          easing:'spring(1, 80, 10, 0)'
        },
        translateY:{
          value:125,
          duration:400
        }
      })
    }
  }
})
</script>

<template>
  <div class="box">
    <div class="cell" v-for="(i,index) in 4" :key="index" :id="'drop-'+i">
      <img class="cell-img" :src="getImageUrl('../static/image/division/img-'+i+'.png')"/>
      <div v-if="i!==2" class="pmzd-font cell-str">{{strList[index]}}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";

.cell-str{
  font-size:20px;
  color:@color-white;
  margin:10px;
}

.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @color-black-1;
  //filter: contrast(30);
}
.cell {
  text-align:center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: @color-yellow-2;
  position: absolute;
  transition: transform .8s;
}
.box:hover .drop-2 {
  animation: .8s wave linear .2s;
}
.box:hover .drop-1 {
  transform: translateY(-250px);
}
.box:hover .drop-3 {
  transform: translate(-216.5px, 125px);
}
.box:hover .drop-4 {
  transform: translate(216.5px, 125px);
}

@keyframes wave {
  0% {}
  50% {
    transform: scale(1.1) rotate(180deg);
    border-top-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }
  100% {}
}
.cell-img{
  width:100px;
  height:100px;
  margin-top: 10px;
  border-radius: 50%;
}
</style>