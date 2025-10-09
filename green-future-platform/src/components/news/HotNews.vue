<template>
  <div class="floating-window bg-gradient-to-r from-primary-light to-primary text-white rounded-2xl p-6 mb-12 shadow-xl">
    <div class="flex items-center mb-4">
      <i class="fas fa-fire text-2xl mr-3"></i>
      <h3 class="text-xl font-bold">热点聚焦</h3>
    </div>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1">
        <h4 class="font-semibold mb-2">全球碳市场交易额突破万亿美元</h4>
        <p class="text-sm opacity-90">碳交易市场快速发展，为企业减排提供经济激励</p>
        <a href="https://example.com/carbon-market" target="_blank" class="text-accent hover:underline text-xs mt-1 inline-block">
          阅读全文 →
        </a>
      </div>
      <div class="flex-1">
        <h4 class="font-semibold mb-2">欧盟通过碳边境调节机制</h4>
        <p class="text-sm opacity-90">新政策将影响全球贸易格局，推动绿色制造</p>
        <a href="https://example.com/eu-carbon-mechanism" target="_blank" class="text-accent hover:underline text-xs mt-1 inline-block">
          阅读全文 →
        </a>
      </div>
      <div class="flex-1">
        <h4 class="font-semibold mb-2">中国可再生能源装机容量全球第一</h4>
        <p class="text-sm opacity-90">太阳能、风能发电量持续增长，能源结构优化加速</p>
        <a href="https://example.com/china-renewable-energy" target="_blank" class="text-accent hover:underline text-xs mt-1 inline-block">
          阅读全文 →
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotNews'
}
</script>