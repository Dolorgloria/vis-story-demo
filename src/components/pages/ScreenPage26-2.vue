<script>
import {defineComponent} from 'vue'
import NewYorkMap from "@/components/chart/NewYorkMap.vue";

export default defineComponent({
  name: "ScreenPage26-2",
  components: {NewYorkMap}
})
</script>

<template>
  <NewYorkMap></NewYorkMap>
</template>

<style scoped lang="less">
@import "@/style/global.less";
</style>