<template>
  <div 
    class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
    @click="$emit('click')">
    <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${item.image})` }"></div>
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-lg font-bold text-primary">{{ item.title }}</h4>
        <span v-if="item.category" class="bg-primary-light text-white text-xs px-2 py-1 rounded-full">
          {{ item.category }}
        </span>
      </div>
      <p class="text-gray-600 text-sm mb-4">{{ item.description || item.summary }}</p>
      <div class="flex justify-between text-xs text-gray-500">
        <span><i class="far fa-calendar mr-1"></i> {{ item.date }}</span>
        <span><i class="far fa-eye mr-1"></i> {{ item.views }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    item: Object
  }
}
</script>