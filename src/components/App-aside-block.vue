<template>
  <aside class="aside">
    <app-adblock/>
    <app-popular-news/>
    <app-adblock/>
    <app-popular-news/>
    <app-adblock/>
  </aside>
  <!-- /.aside -->
</template>

<script>
import AppPopularNews from "./App-popular-news";
import AppAdblock from "./App-adblock";
export default {
  name: "App-aside-block",
  components: {AppAdblock, AppPopularNews}
}
</script>