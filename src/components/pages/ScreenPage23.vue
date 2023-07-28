<script>
import {defineComponent} from 'vue'
import NewYorkMap from "@/components/chart/NewYorkMap.vue";
import CarouselChart2 from "@/components/chart/CarouselChart2.vue";
import CaliforniaMap from "@/components/chart/CaliforniaMap.vue";

export default defineComponent({
  name: "ScreenPage23",
  components: {CarouselChart2, NewYorkMap}
})
</script>

<template>
  <el-row>
    <el-col :span="10">
      <NewYorkMap></NewYorkMap>
    </el-col>
    <el-col :span="14">
      <CarouselChart2></CarouselChart2>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">

</style>