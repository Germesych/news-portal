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
        <router-link :to="'/article/' + post.id"/>
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
      posts: []
    }
  },
  methods: {
    filter(category) {
      console.log()
    },

    filterAll() {
      let postsArr = []
      for (let i = 0; i < 7; i++) {
        postsArr.push(article[i])
      }
      this.posts = postsArr
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
        let category = 'life-style'.toUpperCase()
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
  mounted() {
    this.filterAll()
  }
}
</script>