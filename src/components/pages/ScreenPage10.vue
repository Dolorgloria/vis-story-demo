<script>
import {defineComponent} from 'vue'
import {getImageUrl} from "@/utils/util.js";

export default defineComponent({
  name: "ScreenPage10",
  data(){
    return{
      slides:['迫使芯片公司投资美国放弃在中国的投资', "限制高科技人才交流", '威胁我国相关产业甚至国家安全'],
      curImages:[],
      curIndex:1,
      images:[
          getImageUrl('../static/image/carousel/img-1-1.svg'),
          getImageUrl('../static/image/carousel/img-1-2.svg'),
          getImageUrl('../static/image/carousel/img-2-1.svg'),
          getImageUrl('../static/image/carousel/img-2-2.svg'),
          getImageUrl('../static/image/carousel/img-3-1.svg'),
          getImageUrl('../static/image/carousel/img-3-2.svg'),
      ]
    }
  },
  methods: {
    getImageUrl,
    setActiveImage(activeIndex){
      this.curIndex=activeIndex
    }
  },
  mounted() {

  }
})
</script>

<template>
  <div class="full-screen">
    <el-carousel indicator-position="outside" class="carousel-item" @change="setActiveImage" type="card" height="600px" :loop="false" arrow="never" :autoplay="false" initial-index="1">
      <el-carousel-item v-for="(item, index) in slides" :key="item">
        <img
            v-if="index===this.curIndex"
            style="width: 300px; height: 300px"
            :src="images[this.curIndex*2+1]"
        />
        <img
            v-if="index!==this.curIndex"
            style="width: 300px; height: 300px"
            :src="images[index*2]"
        />
        <div class="carousel-item-text pmzd-font" :class="index===this.curIndex?'text-blue':'text-black'">{{ '- '+(index+1)+' -' }}</div>
        <div class="carousel-item-text pmzd-font" :class="index===this.curIndex?'text-blue':'text-black'">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less">
@import "@/style/global.less";

.carousel-item{
  text-align: center;
}
.text-blue{
  color: #636bff;
}
.screen-img{
  width: 300px;
  height: 300px;
}
.carousel-item-text{
  //font-family: 'PMZDBTT';
  font-size: 30px;
}
.text-black{
  color:@color-white;
}
.el-carousel__mask {
  background-color: @color-black-1 !important;
}
</style>