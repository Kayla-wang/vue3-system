<template>
  <el-space direction="vertical" alignment="flex-start" :size="size">
      <el-skeleton :loading="loading" animated :count="3">
        <template #template>
          <el-skeleton-item variant="image"/>
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div>
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
        <template #default>
          <el-space :size="size">
            <el-card v-for="item in lists" :key="item.name">
              <img :src="item.imgUrl" class="image" />
              <div>
                <span>{{ item.name }}</span>
                <div class="bottom card-header">
                  <div class="time">{{ currentDate }}</div>
                  <el-button text class="button">Operation button</el-button>
                </div>
              </div>
            </el-card>
          </el-space>
        </template>
      </el-skeleton>
  </el-space>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])
const currentDate = new Date().toDateString()
const size = ref(20)


onMounted(() => {
  loading.value = false
  setTimeout(() => {

  })
  lists.value = [
    {
      imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})
</script>

<style lang="scss" scoped>
.image{
  max-height: 100%;
  max-width: 100%;
}
</style>
