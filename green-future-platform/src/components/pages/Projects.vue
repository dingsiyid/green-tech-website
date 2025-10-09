<template>
  <section>
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-primary mb-12 relative">
        项目与案例
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2"></span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex justify-between text-sm text-gray-500 mb-4">
              <span><i class="fas fa-map-marker-alt mr-1"></i> {{ project.location }}</span>
              <span><i class="fas fa-calendar-alt mr-1"></i> {{ project.duration }}</span>
            </div>
            <button class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors w-full">
              查看详情
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '哥本哈根2025气候计划',
          description: '丹麦首都计划在2025年成为全球首个碳中和首都，通过能源、交通和建筑等多领域改革实现目标。',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
          location: '丹麦，哥本哈根',
          duration: '2012-2025'
        },
        {
          id: 2,
          title: '联合国可持续发展目标',
          description: '全球193个国家共同承诺的17个可持续发展目标，涵盖消除贫困、应对气候变化等多个领域。',
          image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
          location: '全球范围',
          duration: '2015-2030'
        }
      ]
    }
  }
}
</script>