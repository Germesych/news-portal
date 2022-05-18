<template>
  <div class="blog">
    <div class="breadcrumbs-block">
      <a href="/">Home </a> <span>&rsaquo;</span> <span>{{ $route.params.id }}</span>
    </div>
    <!-- /.breadcrumbs-block -->
    <div class="title"> {{ $route.params.id }}</div>
    <div class="flex-block">
      <div class="blog-block">
        <section class="blog-card" v-for="item in loadingPosts" :key="item.id">
          <div class="wrap">
            <router-link :to="'/article/' + item.id">
              <img :src="item.img" :alt="item.alt">
            </router-link>
          </div>
          <!-- /.wrap -->
          <div class="date-small">{{ item.date }}</div>
          <h1 class="post-title row-1">
            {{ item.title }}
          </h1>
          <p class="post-text row-4">
            {{ item.shortText }}
          </p>
          <router-link class="post-link" :to="'/article/' + item.id">{{ redMoreBtnText }}</router-link>
<!--          <a href="#" class="post-link">{{ redMoreBtnText }}</a>-->
        </section>
        <!-- /.blog-card -->
        <div class="pagination">
          <button class="pagination-prev btn-disable">&lsaquo;</button>
          <a href="" class="pagination-link pagination-link__active">1</a>
          <!-- /.pagination-link -->
          <a href="" class="pagination-link">2</a>
          <!-- /.pagination-link -->
          <a href="" class="pagination-link">3</a>
          <!-- /.pagination-link -->
          <a href="" class="pagination-link">4</a>
          <!-- /.pagination-link -->
          <a href="" class="pagination-link">5</a>
          <!-- /.pagination-link -->
          <button class="pagination-next">&rsaquo;</button>
        </div>
      </div>
      <!-- /.blog-block -->
      <aside class="aside">
        <app-resent-post/>
        <app-adblock
            :adblock="adblock"
        />
      </aside>
      <!-- /.assets -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.blog -->
</template>

<script>
import TheTopHeader from "../components/TheTopHeader";
import TheFooter from "../components/TheFooter";
import AppResentPost from "../components/AppResentPost";
import AppAdblock from "../components/AppAdblock";
import sport from "../api/sportPosts"
import tech from "../api/techPosts"
import foods from "../api/foodsPosts"
import business from "../api/businessPosts"
import politics from "../api/politicsPosts"
import culture from "../api/culturePosts"
import lifeStyle from "../api/lifeStylePosts"

export default {
  name: "Blog-page",
  components: {AppAdblock, AppResentPost, TheFooter, TheTopHeader},
  data() {
    return {
      countStart: 20,
      countEnd: 5,
      blogHeight: 0,
      thePosts: [],
      mainTitle: 'foods',
      redMoreBtnText: 'red more',
      adblock: `<img src="${require('@/assets/img/content/1.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
    }
  },
  watch: {
    '$route.params.id' (to){
      if(to){
        this.postsGet(to.toLowerCase())
      }
    }
  },
  computed: {
    loadingPosts(){
      return this.thePosts
    }
  },
  methods: {
    postsGet(category){
      console.log('Category ', category)
      switch (category) {
        case 'tech':
          this.getPosts(tech)
          break
        case 'sport':
          this.getPosts(sport)
          break
        case 'business':
          this.getPosts(business)
          break
        case 'politics':
          this.getPosts(politics)
          break
        case 'life-style':
          this.getPosts(lifeStyle)
          break
        case 'foods':
          this.getPosts(foods)
          break
        case 'culture':
          this.getPosts(culture)
          break
      }
    },
    getPosts(posts){
      this.thePosts =[]
      for(let i = 0; i < 5; i++ ){
        this.thePosts.push(posts[i])
      }
    },
    scrollEvent(){
      const blog = document.querySelector('.blog-block')
      if(blog){
        this.blogHeight = blog.clientHeight
        // console.log('blog- ', blog.clientHeight)
      }
      if(window.scrollY > (blog.clientHeight - 800)){
        // console.log('blog-load: ', blog.clientHeight)
        this.blogHeight = blog.clientHeight
      }
      // if(window.scrollY > 50){
      //   // console.log('scroll- ', window.scrollY)
      // }
    },
    scroll(){
      window.addEventListener('scroll', this.scrollEvent)
    }
  },
  mounted() {
    // this.scroll()
    this.postsGet(this.$route.params.id.toLowerCase())
  }
}
</script>
