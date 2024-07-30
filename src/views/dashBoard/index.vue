<template>
  <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1>
<!--   <div id="main">-->
<!--   </div>-->
<!--  <svg-icon name="xianxingdaoyu" />-->
</template>

<script setup lang="ts">
import echarts from '@/utils/echarts'
import { onMounted } from 'vue'
function initData() {
  let myChart = echarts.init(document.getElementById('main'), null, {
    width: 600,
    height: 600
  });
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
}
onMounted(() => {
  // 接下来的使用就跟之前一样，初始化图表，设置配置项
  // 基于准备好的dom，初始化echarts实例
  initData()
})

</script>

<style scoped>
</style>
