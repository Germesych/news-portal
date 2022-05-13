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
          <div class="date-small">MAY 21, 2021</div>
          <!-- /.data-small -->
          <h1 class="title">
            Lorem ipsum dolor sit amet, consectetur elit Ut adipiscing elit
          </h1>
          <img src="@/assets/img/col.jpg" alt="" class="article-img">
          <!-- /.article-img -->
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span class="author">Oswald Griffith</span>
          </q>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
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
        <app-adblock/>
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
  components: {AppRelatedPosts, AppAdblock, AppResentPost}
}
</script>