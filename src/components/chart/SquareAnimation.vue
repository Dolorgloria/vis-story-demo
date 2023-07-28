<script>
import {defineComponent} from 'vue'
import {getImageUrl} from "@/utils/util.js";

export default defineComponent({
  name: "SquareAnimation",
  data(){
    return{
      strList:['立法','监督','人事','弹劾权']
    }
  },
  methods: {getImageUrl}
})
</script>

<template>
  <div class="box">
    <div class="box-img"></div>
    <div class="cell" v-for="(i,index) in 4" :key="index" :id="'cell-'+i">
      <img class="cell-img" :src="getImageUrl('../static/image/square/img-'+i+'.png')"/>
      <div class="pmzd-font cell-str">{{strList[index]}}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
@square-width:300px;
@square-height:225px;
.box-img{
  width: 100%;
  height:100vh;
  position: absolute;
  top:0;
  left:0;
  background-image: url('../../static/image/overlay/overlay.svg');
  background-size: cover;
}
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @color-yellow-2;
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
#cell-1{
  transform: translate(@square-width*(-1),@square-height*(-1));
}
#cell-2{
  transform: translate(@square-width,@square-height*(-1));
}
#cell-3{
  transform: translate(@square-width*(-1),@square-height);
}
#cell-4{
  transform: translate(@square-width,@square-height);
}
.cell-img{
  width:100px;
  height:100px;
  margin-top: 10px;
  border-radius: 50%;
}
.cell-str{
  font-size:20px;
  color:@color-white;
  margin:10px;
}
</style>