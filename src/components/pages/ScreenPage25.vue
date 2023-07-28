<script>
import {defineComponent} from 'vue'
import NewYorkMap2 from "@/components/chart/NewYorkMap2.vue";
import CarouselChart2 from "@/components/chart/CarouselChart2.vue";

export default defineComponent({
  name: "ScreenPage25",
  components: {CarouselChart2, NewYorkMap2}
})
</script>

<template>
  <el-row>
    <el-col :span="10">
      <NewYorkMap2></NewYorkMap2>
    </el-col>
    <el-col :span="10">
      <CarouselChart2></CarouselChart2>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">

</style>