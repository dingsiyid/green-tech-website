<template>
  <footer class="bg-primary-dark text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4 relative pb-2">
            关于我们
            <span class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></span>
          </h3>
          <p class="text-gray-300 mb-4">
            绿色未来是一个致力于推广可持续发展理念和绿色科技创新的平台。我们通过提供最新资讯、知识科普和案例分析，帮助公众、企业和政府更好地理解和参与环保行动。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <i class="fab fa-weibo"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4 relative pb-2">
            快速链接
            <span class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></span>
          </h3>
          <ul class="space-y-2">
            <li v-for="page in pages" :key="page.id">
              <router-link :to="page.path" class="text-gray-300 hover:text-accent transition-colors">
                {{ page.title }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4 relative pb-2">
            联系我们
            <span class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></span>
          </h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-accent"></i>
              <span>北京市朝阳区绿色科技园区</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-3 text-accent"></i>
              <span>400-123-4567</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope mr-3 text-accent"></i>
              <span>contact@greenfuture.org</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-clock mr-3 text-accent"></i>
              <span>周一至周五 9:00-18:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2023 绿色未来 - 可持续发展平台. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      pages: [
        { id: 'home', title: '首页', path: '/' },
        { id: 'news', title: '新闻与趋势', path: '/news' },
        { id: 'knowledge', title: '绿色科技知识库', path: '/knowledge' },
        { id: 'projects', title: '项目与案例', path: '/projects' },
        { id: 'data', title: '数据与可视化', path: '/data' },
        { id: 'about', title: '关于我们', path: '/about' }
      ]
    }
  }
}
</script>