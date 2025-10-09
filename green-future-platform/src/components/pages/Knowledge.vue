<template>
  <section>
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-primary mb-12 relative">
        绿色科技知识库
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2"></span>
      </h2>
      
      <!-- 知识卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="item in knowledgeItems" :key="item.id" 
             class="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <h3 class="text-xl font-bold text-primary mb-3">{{ item.title }}</h3>
          <p class="text-gray-600 mb-4">{{ item.description }}</p>
          <button class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors w-full">
            了解更多
          </button>
        </div>
      </div>

      <!-- 知识测试 -->
      <h2 class="text-2xl md:text-3xl font-bold text-center text-primary mb-12 relative">
        知识测试
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2"></span>
      </h2>

      <div v-for="(quiz, index) in quizzes" :key="index" 
           class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="mb-4">
          <h3 class="text-xl font-bold text-primary">{{ quiz.question }}</h3>
        </div>
        <div class="grid gap-3 mb-4">
          <div v-for="(option, optIndex) in quiz.options" 
               :key="optIndex"
               :class="['p-3 rounded-lg cursor-pointer transition-colors', 
                       selectedAnswers[index] === optIndex ? 
                       'bg-primary text-white' : 
                       'bg-gray-100 hover:bg-gray-200']"
               @click="selectAnswer(index, optIndex)">
            {{ option }}
          </div>
        </div>
        <button @click="submitAnswer(index)" 
                class="bg-accent text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors w-full">
          提交答案
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Knowledge',
  data() {
    return {
      knowledgeItems: [
        {
          id: 1,
          title: '什么是碳足迹？',
          description: '碳足迹是指个人、组织、事件或产品直接和间接产生的温室气体排放总量，通常以二氧化碳当量表示。'
        },
        {
          id: 2,
          title: '可再生能源类型',
          description: '主要包括太阳能、风能、水能、生物质能、地热能和海洋能等，具有清洁、可持续的特点。'
        },
        {
          id: 3,
          title: '循环经济原则',
          description: '通过设计减少废弃物和污染，延长产品和材料的使用周期，促进自然系统再生。'
        }
      ],
      quizzes: [
        {
          question: '问题1：以下哪种能源不属于可再生能源？',
          options: ['A. 太阳能', 'B. 风能', 'C. 核能', 'D. 水能'],
          correct: 2
        },
        {
          question: '问题2：碳足迹通常以什么单位表示？',
          options: ['A. 千克', 'B. 二氧化碳当量', 'C. 碳原子数', 'D. 能量单位'],
          correct: 1
        }
      ],
      selectedAnswers: {}
    }
  },
  methods: {
    selectAnswer(quizIndex, optionIndex) {
      this.$set(this.selectedAnswers, quizIndex, optionIndex);
    },
    submitAnswer(quizIndex) {
      const quiz = this.quizzes[quizIndex];
      const selected = this.selectedAnswers[quizIndex];
      
      if (selected === undefined) {
        alert('请选择一个答案');
        return;
      }
      
      if (selected === quiz.correct) {
        alert('回答正确！');
      } else {
        alert('回答错误，请再试一次');
      }
    }
  }
}
</script>