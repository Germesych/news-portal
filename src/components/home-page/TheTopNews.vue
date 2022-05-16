<template>
  <div class="top-news">
    <div class="title-blk">
      <div class="title-line">TOP NEWS</div>
      <div class="filter-news" @click="filter">
        <button
            data-filer="all"
            class="btn btn-filter btn-filter__active"
            @click="filterAll"
        >All</button>
        <!-- /button -->
        <button
            data-filer="politics"
            class="btn btn-filter"
        >POLITICS</button>
        <!-- /button -->
        <button
            data-filer="life-stile"
            class="btn btn-filter"
            @click="filterLifeStyle"
        >LIFE STYLE</button>
        <!-- /button -->
        <button
            data-filer="foods"
            class="btn btn-filter"
            @click="filterAllFoods"
        >FOODS</button>
        <!-- /button -->
        <button
            data-filer="culture"
            class="btn btn-filter"
            @click="filterAllCulture"
        >CULTURE</button>
        <!-- /button -->
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
    filter(event) {
      switch (event.target.dataset.filer){
        case 'all':
          this.filterAll()
          this.filterActiveLink()
          event.target.classList.add('btn-filter__active')
          break
        case 'politics':
          this.filterGet('politics')
          event.target.classList.add('btn-filter__active')
          break
        case 'life-stile':
          this.filterGet('life-style')
          event.target.classList.add('btn-filter__active')
          break
        case 'foods':
          this.filterGet('foods')
          event.target.classList.add('btn-filter__active')
          break
        case 'culture':
          this.filterGet('culture')
          event.target.classList.add('btn-filter__active')
          break
      }
    },
    filterActiveLink(){
      const btn = document.querySelectorAll('.btn-filter')
      for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('btn-filter__active')){
          btn[i].classList.remove('btn-filter__active')
        }
      }
    },
    filterAll() {
      let postsArr = []
      for (let i = 0; i < 7; i++) {
        postsArr.push(article[i])
      }
      this.posts = postsArr
    },

    filterGet(data) {
      this.filterActiveLink()
      let postsArr = []
      for (let i = 0; i < article.length; i++) {
        let category = data.toLowerCase()
        let articleCategory = article[i].category.toLowerCase()
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