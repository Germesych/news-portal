<template>
  <div class="blog">
    <div class="breadcrumbs-block">
      <a href="/">Home </a> <span>&rsaquo;</span> <a href="/blog/foods">Foods</a>
    </div>
    <!-- /.breadcrumbs-block -->
    <h1 class="title">FOODS</h1>
    <div class="flex-block">
      <div class="blog-block">
        <div class="blog-card">
          <div class="wrap">
            <a href="#">
            <img src="@/assets/img/col.jpg" alt="">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">MAY 21, 2021</div>
          <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          </h2>
          <p class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <a href="#" class="post-link">READ MORE</a>
        </div>
        <!-- /.blog-card -->
        <div class="blog-card">
          <div class="wrap">
            <a href="#">
              <img src="@/assets/img/col.jpg" alt="">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">MAY 21, 2021</div>
          <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          </h2>
          <p class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <a href="#" class="post-link">READ MORE</a>
        </div>
        <!-- /.blog-card -->
        <div class="blog-card">
          <div class="wrap">
            <a href="#">
              <img src="@/assets/img/col.jpg" alt="">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">MAY 21, 2021</div>
          <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          </h2>
          <p class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <a href="#" class="post-link">READ MORE</a>
        </div>
        <!-- /.blog-card -->
        <div class="blog-card">
          <div class="wrap">
            <a href="#">
              <img src="@/assets/img/col.jpg" alt="">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">MAY 21, 2021</div>
          <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          </h2>
          <p class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <a href="#" class="post-link">READ MORE</a>
        </div>
        <!-- /.blog-card -->
        <div class="blog-card">
          <div class="wrap">
            <a href="#">
              <img src="@/assets/img/col.jpg" alt="">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">MAY 21, 2021</div>
          <h2 class="post-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          </h2>
          <p class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.
          </p>
          <a href="#" class="post-link">READ MORE</a>
        </div>
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
      <div class="assets">
        <app-resent-post/>
        <app-adblock/>
      </div>
      <!-- /.assets -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.blog -->
</template>

<script>
import AppTopHeader from "../components/App-top-header";
import AppFooter from "../components/App-footer";
import AppResentPost from "../components/App-resent-post";
import AppAdblock from "../components/App-adblock";
export default {
  name: "Blog-page",
  components: {AppAdblock, AppResentPost, AppFooter, AppTopHeader}
}
</script>

<style scoped>

</style>