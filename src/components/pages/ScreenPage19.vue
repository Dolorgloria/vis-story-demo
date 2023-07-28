<script>
import {defineComponent} from 'vue'
import CaliforniaMap from "@/components/chart/CaliforniaMap.vue";
import CarouselChart from "@/components/chart/CarouselChart.vue";

export default defineComponent({
  name: "ScreenPage19",
  components: {CarouselCharts: CarouselChart, CaliforniaMap}
})
</script>

<template>
  <el-row>
    <el-col :span="10">
      <CaliforniaMap></CaliforniaMap>
    </el-col>
    <el-col :span="14">
      <CarouselCharts></CarouselCharts>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">

</style>