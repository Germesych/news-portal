<template>
  <div class="latest-news">
    <div class="flex-col">
      <section class="col" v-for="item in article" :key="item.id">
        <router-link
            class="the-post-link"
            :to="'/article/' + item.id"
        />
        <span class="category">{{ item.category }}</span>
        <!-- /.category -->
        <img :src="item.img" :alt="item.alt">
        <div class="col__content">
          <div class="date">{{item.date}}</div>
          <h1 class="col-title row-3">
            {{item.title}}
          </h1>
          <!-- /.col-title -->
        </div>
        <!-- /.col__content -->
      </section>
      <!-- /.col -->
    </div>
    <!-- /.flex-col -->
  </div>
  <!-- /.latest-news -->
</template>

<script>
import posts from "@/api/article"
export default {
  name: "The-latest-news",
  data(){
    return{
      article: []
    }
  },
  methods: {
    getPosts(){
      for(let i = 0; i < 6; i++){
        this.article.push(posts[i])
      }
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>