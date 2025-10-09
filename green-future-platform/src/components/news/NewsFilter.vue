<template>
  <div class="flex flex-wrap justify-center gap-2 mb-8">
    <button 
      v-for="filter in filters" 
      :key="filter" 
      :class="['px-4 py-2 rounded-full border transition-colors', 
              currentFilter === filter ? 
              'bg-primary text-white border-primary' : 
              'bg-white text-primary border-primary hover:bg-primary hover:text-white']"
      @click="$emit('filter-change', filter)">
      {{ filter }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NewsFilter',
  props: {
    filters: Array,
    currentFilter: String
  }
}
</script>