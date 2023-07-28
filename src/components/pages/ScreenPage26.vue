<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ScreenPage26",
  data(){
    return{
      yearList:[1950,1974,2013,2021],
      strList:[
          '1950年, 舒墨在纽约布鲁克林出生。他的父亲亚伯拉罕在那里拥有一家小型灭虫企业，他的母亲塞尔玛是一名家庭主妇。舒墨一家现在仍住在布鲁克林。',
          '1974 年，从哈佛法学院毕业后，舒墨当选为纽约州议员。他在布鲁克林和皇后区工作了 18 年并确立了他打击犯罪先驱的声誉。',
          '2013 年，舒墨跨越过道通过了一项全面的移民改革方案：边境安全、经济机会和移民现代化法案，该法案在参议院获得了压倒性的两党支持。',
          '2021年，舒墨成为第一位担任参议院多数党领袖的纽约人。作为参议员，舒墨致力于保护中产阶级的经济利益，提升中产阶级的生活水平。'
      ],
      activeIndex:0
    }
  },
  methods:{
    onTooltipShow(index){
      this.activeIndex=index
      console.log(index)
    }
  }
})
</script>

<template>
  <div class="box">
    <div class="circle"></div>
    <div class="box-img"></div>
    <div @mouseover="onTooltipShow(index)" class="cell" v-for="(i,index) in 4" :key="index" :id="'cell-'+i">
<!--      <div ></div>-->
      <div class="cell-str">{{yearList[index]}}</div>
    </div>
  </div>
  <div class="tooltip">
    {{strList[activeIndex]}}
  </div>
</template>

<style scoped lang="less">
@import "@/style/global.less";
@square-width:320px;
@square-height:185px;
.tooltip{
  width: 200px;
  height: 120px;
  position: absolute;
  top:50px;
  left:50px;
  color: @color-white;
  border-radius: 5px;
  border: 2px solid @color-blue-1;
  background-color: #1f213e;
  padding: 10px;
  font-family: 'PMZDBTT';
  text-align: center;
}
.cell-str{
  font-size:20px;
  color:@color-white;
  margin:10px;
}
.circle{
  width: @square-width*2+100px;
  height: @square-width*2+100px;
  border: @color-white 2px solid;
  border-radius: 50%;
  position: absolute;
  top:50%;
  left:50%;
  z-index: 4;
  transform: translate(-50%, -50%);

}
.box-img{
  width: 100%;
  height:100vh;
  position: absolute;
  top:0;
  left:0;
  background-image: url('../../static/image/screen/screen-27.png');
  background-size: cover;
}
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //filter: contrast(30);
}
.cell {
  text-align:center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: @color-white;
  position: absolute;
  transition: transform .8s;
}
#cell-1{
  transform: translate(@square-width*(-1),@square-height*(-1));
}
#cell-2{
  transform: translate(@square-width*(-1),@square-height);
}
#cell-3{
  transform: translate(@square-width,@square-height*(-1));
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
  margin:35px;
  z-index: 4;
  font-family: 'PMZDBTT';
}
</style>