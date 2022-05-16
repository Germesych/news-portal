<template>
  <div class="article-page">
    <div class="breadcrumbs-block">
      <router-link to="/">Home</router-link>
      <span>&rsaquo;</span>
      <router-link :to="'/blog/' + article.category">{{ article.category }}</router-link>
      <span>&rsaquo;</span>
      <span class="breadcrumbs-title characters-length ">{{ article.title }}</span>
    </div>
    <!-- /.breadcrumbs-block -->
    <div class="flex-block">
      <div class="wrap">
        <article class="article">
          <div class="date-small">{{ article.date }}</div>
          <!-- /.data-small -->
          <h1 class="title">
            {{ article.title }}
          </h1>
          <div class="article-img" style="background: #9b9b9b">
            <img :src="article.img" :alt="article.alt" class="">
          </div>
          <!-- /.article-img -->
          <div v-html="article.content"></div>
          <div class="article-nav">
            <a href="" class="prev"><span>&lsaquo;</span> Previous article</a>
            <a href="" class="next">Next article <span>&rsaquo;</span></a>
          </div>
          <!-- /.article-nav -->
        </article>
        <!-- /.article -->
        <app-related-posts
            :title="relatedTitle"
            :posts="relatedPosts"
        />
      </div>
      <!-- /.wrap -->
      <aside class="aside">
        <app-resent-post/>
        <app-adblock
            :adblock="adblock"
        />
      </aside>
      <!-- /.aside -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.article-page -->
</template>

<script>
import AppResentPost from "../components/AppResentPost";
import AppAdblock from "../components/AppAdblock";
import AppRelatedPosts from "../components/article-page/AppRelatedPosts";
import posts from "@/api/article"

export default {
  name: "Article-page",
  components: {AppRelatedPosts, AppAdblock, AppResentPost},
  data() {
    return {
      adblock: `<img src="${require('@/assets/img/content/12.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
      article: {},
      relatedTitle: 'Related Posts',
      relatedPosts: []
    }
  },
  watch: {
    '$route' (to){
      console.log(to.params.id)
      this.getPost()
      window.scrollTo(0, 0);
    }
  },
  methods: {
    getPost(){
      let id = this.$route.params.id
      for(let i = 0; i < posts.length; i++){
        if(Number(id) === Number(posts[i].id)){
          return this.article = posts[i]
        }
      }
    },
    relatedPostsGet(){
      for(let i = 5; i < 9; i++){
        this.relatedPosts.push(posts[i])
      }
    }
  },
  mounted() {
    this.getPost()
    this.relatedPostsGet()
    window.scrollTo(0, 0);
  }
}
</script>