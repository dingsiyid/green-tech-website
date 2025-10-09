// 主Vue应用
new Vue({
    el: '#app',
    data: {
        currentPage: 'home',
        mobileMenuOpen: false,
        currentFilter: '全球资讯',
        selectedAnswers: {},
        contactForm: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        pages: [
            { id: 'home', title: '首页' },
            { id: 'news', title: '新闻与趋势' },
            { id: 'knowledge', title: '绿色科技知识库' },
            { id: 'projects', title: '项目与案例' },
            { id: 'data', title: '数据与可视化' },
            { id: 'about', title: '关于我们' }
        ],
        homeCards: [
            {
                id: 1,
                title: '我们的使命',
                description: '通过提供最新的可持续发展资讯和绿色科技知识，推动社会各界参与环保行动，共建人与自然和谐共生的美好未来。',
                image: 'https://images.unsplash.com/photo-1569163139394-de44cb54d5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
            },
            {
                id: 2,
                title: '核心价值',
                description: '我们相信科技创新与环保理念的结合是解决环境问题的关键，致力于搭建连接专家、企业和公众的交流平台。',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
            },
            {
                id: 3,
                title: '行动倡议',
                description: '从个人生活到全球合作，我们提供切实可行的环保方案，鼓励每个人为可持续发展贡献力量。',
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80'
            }
        ],
        quickLinks: [
            {
                id: 1,
                title: '新闻与趋势',
                description: '了解全球与本地可持续发展最新动态和绿色科技前沿资讯',
                page: 'news',
                icon: 'fas fa-newspaper'
            },
            {
                id: 2,
                title: '绿色科技知识库',
                description: '学习环保知识，参与互动答题，提升可持续发展意识',
                page: 'knowledge',
                icon: 'fas fa-book'
            },
            {
                id: 3,
                title: '项目与案例',
                description: '探索政府、城市和国际组织的绿色转型计划与成功案例',
                page: 'projects',
                icon: 'fas fa-project-diagram'
            },
            {
                id: 4,
                title: '数据与可视化',
                description: '查看可再生能源利用趋势和城市绿色指数排名',
                page: 'data',
                icon: 'fas fa-chart-line'
            }
        ],
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
        ],
        carbonData: [
            { name: '中国', emissions: '10,667', perCapita: '7.4', renewable: '15.9%', target: '2060' },
            { name: '美国', emissions: '4,712', perCapita: '14.2', renewable: '12.4%', target: '2050' },
            { name: '欧盟', emissions: '2,556', perCapita: '5.7', renewable: '22.1%', target: '2050' }
        ],
        teamMembers: [
            '环境科学与工程专家',
            '可持续发展政策顾问',
            '绿色技术创新者',
            '数据可视化专家',
            '内容创作与传播团队'
        ],
        partners: [
            '联合国环境规划署(UNEP)',
            '世界自然基金会(WWF)',
            '国际可再生能源机构(IRENA)',
            '多家高校环境研究机构',
            '绿色科技创新企业'
        ]
    },
    computed: {
        filteredNews() {
            if (this.currentFilter === '全球资讯') {
                return this.newsArticles;
            }
            return this.newsArticles.filter(article => 
                article.category === this.currentFilter
            );
        }
    },
    methods: {
        switchPage(pageId) {
            this.currentPage = pageId;
            this.mobileMenuOpen = false;
            window.scrollTo(0, 0);
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        setFilter(filter) {
            this.currentFilter = filter;
        },
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
        },
        submitContactForm() {
            alert('感谢您的留言！我们会尽快与您联系。');
            this.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
});