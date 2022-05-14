<template>
  <div class="top-news">
    <div class="title-blk">
      <div class="title-line">TOP NEWS</div>
      <div class="filter-news">
        <button class="btn btn-filter btn-filter__active" @click="filterAll">All</button>
        <button class="btn btn-filter" @click="filterPolitics">POLITICS</button>
        <button class="btn btn-filter" @click="filterLifeStyle">LIFE STYLE</button>
        <button class="btn btn-filter" @click="filterAllFoods">FOODS</button>
        <button class="btn btn-filter" @click="filterAllCulture">CULTURE</button>
      </div>
      <!-- /.filter-news -->
    </div>
    <!-- /.title-blk -->
    <div class="content-block">
      <section class="row-block" v-for="post in posts" :key="post.id">
        <a href=""></a>
        <img :src="post.img" :alt="post.alt">
        <div class="content">
          <div class="date">{{ post.date }}</div>
          <h1 class="content__title row-2">
            {{ post.title }}
          </h1>
          <!-- /.col-title -->
        </div>
      </section>
      <!-- /.row-block -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.top-news -->
</template>

<script>
import article from "../../api/article";

export default {
  name: "The-top-news",
  data() {
    return {
      title: 'top news',
      posts: [
        {
          id: 1,
          category: 'tech',
          img: require('@/assets/img/content/12.jpeg'),
          alt: 'article image',
          date: '01.04.2018',
          title: '#1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 2,
          category: 'tech',
          img: require('@/assets/img/content/2.jpeg'),
          alt: 'article image',
          date: '02.04.2018',
          title: '#2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 3,
          category: 'tech',
          img: require('@/assets/img/content/7.jpeg'),
          alt: 'article image',
          date: '03.04.2018',
          title: '#3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        , {
          id: 4,
          category: 'tech',
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'article image',
          date: '04.04.2018',
          title: '#4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 5,
          category: 'tech',
          img: require('@/assets/img/content/3.jpeg'),
          alt: 'article image',
          date: '05.04.2018',
          title: '#5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 6,
          category: 'tech',
          img: require('@/assets/img/content/6.jpeg'),
          alt: 'article image',
          date: '06.04.2018',
          title: '#6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 7,
          category: 'tech',
          img: require('@/assets/img/content/11.jpeg'),
          alt: 'article image',
          date: '07.04.2018',
          title: '#7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  },
  methods: {
    filter(category) {
      console.log()
    },

    filterAll(event) {
      let postsArr = []
      for (let i = 0; i < 7; i++) {
        postsArr.push(article[i])
      }
      this.posts = postsArr
      console.log(postsArr)
    },

    filterPolitics(event) {
      let postsArr = []
      for (let i = 0; i < article.length; i++) {
        let category = event.target.innerText.toUpperCase()
        let articleCategory = article[i].category.toUpperCase()
        if(postsArr.length > 6){
          break
        }
        if(articleCategory === category){
          postsArr.push(article[i])
        }
      }
      this.posts = postsArr
    },
    filterLifeStyle(event) {
      let postsArr = []
      for (let i = 0; i < article.length; i++) {
        let category = event.target.innerText.toUpperCase()
        let articleCategory = article[i].category.toUpperCase()
        if(postsArr.length > 6){
          break
        }
        if(articleCategory === category){
          postsArr.push(article[i])
        }
      }
      this.posts = postsArr
    },
    filterAllFoods(event) {
      let postsArr = []
      for (let i = 0; i < article.length; i++) {
        let category = event.target.innerText.toUpperCase()
        let articleCategory = article[i].category.toUpperCase()
        if(postsArr.length > 6){
          break
        }
        if(articleCategory === category){
          postsArr.push(article[i])
        }
      }
      this.posts = postsArr
    },
    filterAllCulture(event) {
      let postsArr = []
      for (let i = 0; i < article.length; i++) {
        let category = event.target.innerText.toUpperCase()
        let articleCategory = article[i].category.toUpperCase()
        if(postsArr.length > 6){
          break
        }
        if(articleCategory === category){
          postsArr.push(article[i])
        }
      }
      this.posts = postsArr
    },
  },
}
</script>