<template>
  <aside class="aside">
    <app-adblock
        :adblock="adblockOne"
    />
    <app-popular-news-row
        :title="popularNewsTitle"
        :posts="popularNews1"
    />
    <app-adblock
        :adblock="adblockTwo"
    />
    <app-popular-news-row
        :title="popularNewsTitle"
        :posts="popularNews2"
    />
    <app-adblock
        :adblock="adblockThree"/>
  </aside>
  <!-- /.aside -->
</template>

<script>
import AppPopularNewsRow from "../AppPopularNewsRow";
import AppAdblock from "../AppAdblock";
import posts from '@/api/article'

export default {
  name: "The-aside-block",
  components: {AppAdblock, AppPopularNewsRow},
  data() {
    return {
      adblockOne: `<img src="${require('@/assets/img/content/1.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
      adblockTwo: `<img src="${require('@/assets/img/content/2.jpeg')}" alt="img"><span class="adblock-test">Adblock #2</span>`,
      adblockThree: `<img src="${require('@/assets/img/content/3.jpeg')}" alt="img"><span class="adblock-test">Adblock #3</span>`,
      popularNewsTitle: 'popular news',
      popularNews1: [],
      popularNews2: []
    }
  },
  methods: {
    popularNewsPosts1(){
      for(let i = 0; i < 6; i++){
        this.popularNews1.push(posts[i])
      }
    },
    popularNewsPosts2(){
      for(let i = 6; i < 12; i++){
        this.popularNews2.push(posts[i])
      }
    }
  },
  mounted() {
    this.popularNewsPosts1()
    this.popularNewsPosts2()
  }
}
</script>