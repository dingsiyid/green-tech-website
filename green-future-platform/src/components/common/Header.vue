<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <i class="fas fa-leaf text-2xl text-primary"></i>
        <router-link to="/" class="text-xl font-bold text-primary">绿色未来</router-link>
      </div>
      
      <!-- 桌面导航 -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="page in pages" :key="page.id">
          <router-link 
            :to="page.path"
            class="font-medium transition-colors hover:text-primary"
            active-class="text-primary border-b-2 border-primary"
            exact>
            {{ page.title }}
          </router-link>
        </li>
      </ul>
      
      <!-- 移动端菜单按钮 -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-700">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </nav>
    
    <!-- 移动端导航菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <ul class="py-2">
        <li v-for="page in pages" :key="page.id">
          <router-link 
            :to="page.path"
            class="block px-4 py-2 font-medium transition-colors hover:bg-light hover:text-primary"
            @click.native="mobileMenuOpen = false"
            active-class="text-primary bg-light">
            {{ page.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      pages: [
        { id: 'home', title: '首页', path: '/' },
        { id: 'news', title: '新闻与趋势', path: '/news' },
        { id: 'knowledge', title: '绿色科技知识库', path: '/knowledge' },
        { id: 'projects', title: '项目与案例', path: '/projects' },
        { id: 'data', title: '数据与可视化', path: '/data' },
        { id: 'about', title: '关于我们', path: '/about' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>