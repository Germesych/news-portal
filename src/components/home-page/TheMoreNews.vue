<template>
  <div class="more-news">
    <h2 class="title-line">{{title}}</h2>
    <!-- /.title-line -->
    <div class="flex-block">
      <section class="card-new" v-for="item in article" :key="item.id">
        <router-link
            :to="'/article/' + item.id"
        />
        <img :src="item.img" :alt="item.alt">
        <div class="date-small">{{item.date}}</div>
        <!-- /.data-small -->
        <h1 class="title row-2">
          {{item.title}}
        </h1>
      </section>
      <!-- /.card-new -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.more-news -->
</template>

<script>
import posts from "@/api/article"
export default {
  name: "The-more-news",
  data(){
    return {
      title: 'more news',
      article: []
    }
  },
  methods: {
    getPosts(){
      for(let i = 3; i < 9; i++){
        this.article.push(posts[i])
      }
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
