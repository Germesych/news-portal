<template>
  <div class="home">
    <section class="section">
      <the-latest-news/>
    </section>

    <div class="flex-blk">
      <div class="content">
        <section class="section">
          <the-top-news/>
        </section>
        <!-- /.section -->
        <section class="section">
          <the-hot-week/>
        </section>
        <!-- /.section -->
        <section class="section">
          <the-more-news/>
        </section>
        <!-- /.section -->
      </div>
      <!-- /.content -->
      <div class="aside-blk">
        <the-aside-block/>
      </div>
      <!-- /.aside-blk -->
    </div>
    <!-- /.flex-blk -->
  </div>
  <!-- /.home -->
</template>

<script>

import TheLatestNews from "../components/home-page/TheLatestNews";
import TheTopNews from "../components/home-page/TheTopNews";
import TheAsideBlock from "../components/home-page/TheAsideBlock";
import TheHotWeek from "../components/home-page/TheHotWeek";
import TheMoreNews from "../components/home-page/TheMoreNews";
export default {
  name: 'Home-age',
  components: {TheMoreNews, TheHotWeek, TheTopNews, TheLatestNews, TheAsideBlock},
}
</script>
