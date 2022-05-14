<template>
  <header class="header">
    <div class="top-header">
      <div class="container">
        <div class="date">
          {{ date }}
        </div>
        <div class="news-slider">
          <div class="news-slider__category">{{news[iterationNews].category}}</div>
          <div class="wrap">
            <a href="#"></a>
            <div class="news-slider__img">
              <img :src="news[iterationNews].img" :alt="news[iterationNews].alt">
            </div>
            <div class="news-slider__text">
              {{news[iterationNews].title}}
            </div>
          </div>
          <!-- /.wrap -->
        </div>
        <!-- /.news-slider -->
        <div class="news-slider__nav">
          <button class="btn prev" @click="prevNews">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="19" height="19" rx="0.5" stroke="#BEBEBE"/>
              <path d="M12.7054 15.2946C13.0947 14.9053 13.095 14.2743 12.7062 13.8846L8.83 10L12.7062 6.11538C13.095 5.72569 13.0947 5.09466 12.7054 4.70538C12.3158 4.31581 11.6842 4.31581 11.2946 4.70538L6.70711 9.29289C6.31658 9.68342 6.31658 10.3166 6.70711 10.7071L11.2946 15.2946C11.6842 15.6842 12.3158 15.6842 12.7054 15.2946Z" fill="#BEBEBE"/>
            </svg>
          </button>
          <button class="btn next" @click="nextNews">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="19" height="19" rx="0.5" stroke="#BEBEBE"/>
              <path d="M6.70462 15.2946C6.31534 14.9053 6.315 14.2743 6.70385 13.8846L10.58 10L6.70385 6.11538C6.315 5.72569 6.31534 5.09466 6.70462 4.70538C7.09419 4.31581 7.72581 4.31581 8.11538 4.70538L12.7029 9.29289C13.0934 9.68342 13.0934 10.3166 12.7029 10.7071L8.11538 15.2946C7.72581 15.6842 7.09419 15.6842 6.70462 15.2946Z" fill="#BEBEBE"/>
            </svg>
          </button>
        </div>
        <!-- /.news-slider__nav -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.top-header -->
    <div class="header-search container">
      <div class="logo">
        <span class="color-black">1</span>NEWS
      </div>
      <form class="search">
        <input type="text" placeholder="Enter your keywords ">
        <button class="btn" type="submit">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.60879 12.605L6.60121 11.8151L6.86851 11.5325C8.01786 12.5015 9.50346 13.0773 11.1134 13.0618C14.7032 13.0273 17.5851 10.0895 17.5507 6.4997C17.5162 2.90987 14.5784 0.0279368 10.9886 0.0624018C7.39875 0.0968668 4.51682 3.03467 4.55128 6.6245C4.56674 8.23443 5.17092 9.7087 6.16182 10.8392L5.88442 11.1119L5.09446 11.1195L0.152692 16.1672L1.65693 17.6428L6.60879 12.605ZM6.55119 6.6053C6.52729 4.11542 8.5179 2.08621 11.0078 2.06231C13.4977 2.0384 15.5269 4.02902 15.5508 6.5189C15.5747 9.00879 13.5841 11.038 11.0942 11.0619C8.6043 11.0858 6.57509 9.09519 6.55119 6.6053Z" fill="#F44336"/>
          </svg>
        </button>
      </form>
    </div>
    <!-- /.header -->
    <the-nav-bar/>
  </header>
  <!-- /.header -->
</template>

<script>
import TheNavBar from "./TheNavBar";
export default {
  name: "The-top-header",
  components: {TheNavBar},
  data(){
    return {
      date: new Date().toLocaleDateString(),
      news: [
        {
          id: 1,
          title: 'News-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'business',
          img: require('@/assets/img/content/1.jpeg'),
          alt: 'news image'
        },
        {
          id: 2,
          title: 'News-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'tech',
          img: require('@/assets/img/content/2.jpeg'),
          alt: 'news image'
        },
        {
          id: 3,
          title: 'News-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'foods',
          img: require('@/assets/img/content/3.jpeg'),
          alt: 'news image'
        },
        {
          id: 4,
          title: 'News-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'politics',
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'news image'
        },
        {
          id: 5,
          title: 'News-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'sport',
          img: require('@/assets/img/content/5.jpeg'),
          alt: 'news image'
        }
      ],
      iterationNews: 0
    }
  },
  methods:{
    nextNews(){
      if(this.iterationNews < (this.news.length - 2)){
        this.iterationNews++
      }
    },
    prevNews(){
      if(this.iterationNews !== 0){
        this.iterationNews--
      }
    }
  }
}
</script>