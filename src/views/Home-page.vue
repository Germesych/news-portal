<template>
  <div class="home">
    <section class="section">
      <app-latest-news/>
    </section>

    <div class="flex-blk">
      <div class="content">
        <section class="section">
          <app-top-news/>
        </section>
        <!-- /.section -->
        <section class="section">
          <app-hot-week/>
        </section>
        <!-- /.section -->
        <section class="section">
          <app-more-news/>
        </section>
        <!-- /.section -->
      </div>
      <!-- /.content -->
      <div class="aside-blk">
        <app-aside-block/>
      </div>
      <!-- /.aside-blk -->
    </div>
    <!-- /.flex-blk -->
  </div>
  <!-- /.home -->
</template>

<script>

import AppLatestNews from "../components/App-latest-news";
import AppTopNews from "../components/App-top-news";
import AppAsideBlock from "../components/App-aside-block";
import AppHotWeek from "../components/App-hot-week";
import AppMoreNews from "../components/App-more-news";
export default {
  name: 'Home-age',
  components: {AppMoreNews, AppHotWeek, AppTopNews, AppLatestNews, AppAsideBlock},
}
</script>
