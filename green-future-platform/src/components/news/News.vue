<template>
  <section>
    <div class="container mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <h2 class="text-2xl md:text-3xl font-bold text-center text-primary mb-12 relative">
        新闻与趋势
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2"></span>
      </h2>
      
      <!-- 总介绍区域 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1569163139394-de44cb54d5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                 alt="绿色科技" class="w-full h-64 object-cover rounded-xl">
          </div>
          <div class="md:w-2/3">
            <h3 class="text-2xl font-bold text-primary mb-4">全球绿色科技发展趋势</h3>
            <p class="text-gray-700 mb-4">
              随着全球气候变化问题日益严峻，绿色科技创新正成为推动可持续发展的关键力量。从可再生能源到碳捕捉技术，从绿色材料到循环经济，全球正在经历一场深刻的绿色转型。
            </p>
            <p class="text-gray-700">
              本栏目汇集全球最新可持续发展资讯和新兴绿色科技动态，为您提供前沿的技术洞察和市场趋势分析，助力把握绿色经济机遇。
            </p>
          </div>
        </div>
      </div>

      <!-- 飘窗 - 热点新闻 -->
      <HotNews />

      <!-- 新闻筛选 -->
      <NewsFilter 
        :filters="newsFilters"
        :currentFilter="currentFilter"
        @filter-change="setFilter"
      />

      <!-- 分板块展示 -->
      <div class="space-y-12">
        <!-- 新兴绿色科技板块 -->
        <div>
          <h3 class="text-2xl font-bold text-primary mb-6 flex items-center">
            <i class="fas fa-seedling mr-3"></i>
            新兴绿色科技
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard 
              v-for="tech in filteredGreenTech" 
              :key="tech.id" 
              :item="tech"
              @click="openExternalLink(tech.externalLink)"
            />
          </div>
        </div>

        <!-- 全球可持续发展资讯 -->
        <div>
          <h3 class="text-2xl font-bold text-primary mb-6 flex items-center">
            <i class="fas fa-globe-americas mr-3"></i>
            全球可持续发展资讯
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard 
              v-for="article in filteredGlobalNews" 
              :key="article.id" 
              :item="article"
              @click="openExternalLink(article.externalLink)"
            />
          </div>
        </div>

        <!-- 本地动态 -->
        <div>
          <h3 class="text-2xl font-bold text-primary mb-6 flex items-center">
            <i class="fas fa-map-marker-alt mr-3"></i>
            本地动态
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard 
              v-for="local in filteredLocalNews" 
              :key="local.id" 
              :item="local"
              @click="openExternalLink(local.externalLink)"
            />
          </div>
        </div>
      </div>

      <!-- 业内跳转面板 -->
      <div class="mt-12 bg-white rounded-2xl shadow-lg p-6">
        <h3 class="text-2xl font-bold text-primary mb-6 text-center">业内资源</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="resource in industryResources" :key="resource.id" 
               class="bg-light rounded-xl p-6 text-center transition-all hover:shadow-lg">
            <i :class="[resource.icon, 'text-3xl text-primary mb-4']"></i>
            <h4 class="text-lg font-bold text-primary mb-2">{{ resource.name }}</h4>
            <p class="text-gray-600 mb-4 text-sm">{{ resource.description }}</p>
            <a :href="resource.url" target="_blank" 
               class="inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors">
              访问网站
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsFilter from '@/components/news/NewsFilter'
import NewsCard from '@/components/news/NewsCard'
import HotNews from '@/components/news/HotNews'

export default {
  name: 'News',
  components: {
    NewsFilter,
    NewsCard,
    HotNews
  },
  data() {
    return {
      currentFilter: '全球资讯',
      newsFilters: ['全球资讯', '本地动态', '新兴绿色科技', '新能源', '储能技术', '碳捕捉', '绿色材料'],
      greenTech: [
        {
          id: 1,
          title: '直接空气碳捕捉技术突破',
          description: '新型吸附材料使碳捕捉效率提升300%，成本降低50%',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: '碳捕捉',
          date: '2023-10-20',
          views: 1560,
          externalLink: 'https://example.com/carbon-capture-breakthrough'
        },
        {
          id: 2,
          title: '固态电池商业化应用加速',
          description: '能量密度提升至传统锂电池2倍，充电时间缩短70%',
          image: 'https://images.unsplash.com/photo-1627634777217-c864268db270?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: '储能技术',
          date: '2023-10-18',
          views: 1320,
          externalLink: 'https://example.com/solid-state-battery'
        },
        {
          id: 3,
          title: '生物降解塑料新突破',
          description: '新型酶催化剂使塑料在自然环境中3个月内完全分解',
          image: 'https://images.unsplash.com/photo-1589923188651-268a35c0b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: '绿色材料',
          date: '2023-10-15',
          views: 980,
          externalLink: 'https://example.com/biodegradable-plastic'
        }
      ],
      globalNews: [
        {
          id: 1,
          title: '全球可再生能源投资创新高',
          summary: '2023年全球可再生能源投资达1.7万亿美元，同比增长15%',
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          date: '2023-10-22',
          views: 2100,
          externalLink: 'https://example.com/renewable-energy-investment'
        },
        {
          id: 2,
          title: '欧盟通过新气候法案',
          summary: '2030年减排目标从55%提升至57%，碳市场改革加速',
          image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          date: '2023-10-19',
          views: 1780,
          externalLink: 'https://example.com/eu-climate-law'
        }
      ],
      localNews: [
        {
          id: 1,
          title: '北京碳达峰行动方案发布',
          summary: '明确2025年实现碳达峰，重点领域减排目标细化',
          image: 'https://images.unsplash.com/photo-1596012788100-21498edf57dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          date: '2023-10-21',
          views: 1250,
          externalLink: 'https://example.com/beijing-carbon-peak'
        },
        {
          id: 2,
          title: '上海绿色建筑标准升级',
          summary: '新建建筑能效标准提升30%，推动超低能耗建筑发展',
          image: 'https://images.unsplash.com/photo-1548613053-22087b6c0b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          date: '2023-10-17',
          views: 890,
          externalLink: 'https://example.com/shanghai-green-building'
        }
      ],
      industryResources: [
        {
          id: 1,
          name: '联合国环境规划署',
          description: '全球环境事务的领导和权威机构',
          icon: 'fas fa-globe',
          url: 'https://www.unep.org'
        },
        {
          id: 2,
          name: '国际可再生能源机构',
          description: '促进可再生能源的广泛采用和可持续利用',
          icon: 'fas fa-solar-panel',
          url: 'https://www.irena.org'
        },
        {
          id: 3,
          name: '世界自然基金会',
          description: '全球最大的独立性非政府环境保护组织',
          icon: 'fas fa-paw',
          url: 'https://www.worldwildlife.org'
        }
      ]
    }
  },
  computed: {
    filteredGreenTech() {
      if (this.currentFilter === '全球资讯' || this.currentFilter === '新兴绿色科技') {
        return this.greenTech
      }
      return this.greenTech.filter(tech => tech.category === this.currentFilter)
    },
    filteredGlobalNews() {
      if (this.currentFilter === '全球资讯') {
        return this.globalNews
      }
      return []
    },
    filteredLocalNews() {
      if (this.currentFilter === '本地动态') {
        return this.localNews
      }
      return []
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter
    },
    openExternalLink(url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>