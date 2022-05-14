<template>
  <div class="article-page">
    <div class="breadcrumbs-block">
      <a href="/">Home</a>
      <span>&rsaquo;</span>
      <a href="/blog/foods">Foods</a>
      <span>&rsaquo;</span>
      <a href="/blog/foods/article">
        Lorem ipsum dolor sit amet, consectetur elit Ut adipiscing elit
      </a>
    </div>
    <!-- /.breadcrumbs-block -->
    <div class="flex-block">
      <div class="wrap">
        <article class="article">
          <div class="date-small">{{article.date}}</div>
          <!-- /.data-small -->
          <h1 class="title">
            {{article.title}}
          </h1>
          <div class="article-img" style="background: #9b9b9b">
            <img :src="article.img" :alt="article.alt" class="">
          </div>
          <!-- /.article-img -->
          <div v-html="article.content"></div>
          <div class="article-nav">
            <a href="" class="prev"><span>&lsaquo;</span> Previous article</a>
            <a href="" class="next">Next article  <span>&rsaquo;</span></a>
          </div>
          <!-- /.article-nav -->
        </article>
        <!-- /.article -->
        <app-related-posts/>
      </div>
      <!-- /.wrap -->
      <aside class="aside">
        <app-resent-post/>
        <app-adblock
        adblock="title adblock tutu..."
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
export default {
  name: "Article-page",
  components: {AppRelatedPosts, AppAdblock, AppResentPost},
  data(){
    return {
      article: {
        id: 1,
        date: '14.05.2022',
        title: 'Lorem ipsum dolor sit amet, consectetur elit Ut adipiscing elit consectetur elit Ut adipiscing elit',
        img: require('@/assets/img/col.jpg'),
        alt: 'article image',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.</p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="author">Oswald Griffith</span></q><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.</p>'
      }
    }
  }
}
</script>