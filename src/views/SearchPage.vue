<template>
  <div class="search-page">
    <div class="flex-block">
      <div class="search-block">
        <h2 class="title">Search Results</h2>
        <form class="search" @submit.prevent="thisValue">
          <input v-model="valueInput" type="text" placeholder="Search">
          <button class="btn-search" type="submit">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.60879 12.605L6.60121 11.8151L6.86851 11.5325C8.01786 12.5015 9.50346 13.0773 11.1134 13.0618C14.7032 13.0273 17.5851 10.0895 17.5507 6.4997C17.5162 2.90987 14.5784 0.0279368 10.9886 0.0624018C7.39875 0.0968668 4.51682 3.03467 4.55128 6.6245C4.56674 8.23443 5.17092 9.7087 6.16182 10.8392L5.88442 11.1119L5.09446 11.1195L0.152692 16.1672L1.65693 17.6428L6.60879 12.605ZM6.55119 6.6053C6.52729 4.11542 8.5179 2.08621 11.0078 2.06231C13.4977 2.0384 15.5269 4.02902 15.5508 6.5189C15.5747 9.00879 13.5841 11.038 11.0942 11.0619C8.6043 11.0858 6.57509 9.09519 6.55119 6.6053Z" fill="#F44336"/>
            </svg>
          </button>
        </form>
        <!-- /.search -->
        <div class="search-info">
          Showing <span>{{quantitySearchView}} - {{quantityResultPage}}</span> of <span>{{quantityResult}}</span> for
        </div>
        <!-- /.search-info -->
        <div class="search-result">
          <div
              class="row"
              v-if="quantityResult"
              v-for="item in postsResultInPage"
              :key="item.id"
          >
            <h1 class="title">
              {{ item.title }}
            </h1>
            <div class="result-content row-3" v-html="item.content"></div>
          </div>
          <!-- /.row -->
          <div class="row" v-else>
            Not Results....
          </div>
        </div>
        <!-- /.search-result -->
        <div class="pagination" v-if="quantityResult">
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
        <!-- /.pagination -->
      </div>
      <!-- /.search-block -->
      <aside class="aside">
        <app-adblock
            :adblock="adblockOne"
        />
        <app-adblock
            :adblock="adblockTwo"
        />
      </aside>
      <!-- /.aside -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.search-page -->
</template>

<script>
import AppAdblock from "../components/AppAdblock";
import posts from '@/api/article'
export default {
  name: "Search-page",
  components: {AppAdblock},
  data(){
    return {
      adblockOne: `<img src="${require('@/assets/img/content/1.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
      adblockTwo: `<img src="${require('@/assets/img/content/2.jpeg')}" alt="img"><span class="adblock-test">Adblock #2</span>`,
      valueInput: '',
      quantityResult: 0, // Сколько всего найдено
      quantitySearchView: 0, // Сколько выведено на странице
      quantityResultPage: 1, // Сколько страниц
      postsResultInPage: [],
    }
  },
  watch: {
    '$route' (to){
      if(to.query.value){
        this.valueInput = to.query.value.split('+').join(' ')
        console.log('watch= ', this.valueInput)
        this.searchPosts()
      }
    }
  },
  methods:{
    thisValue(){
      this.$router.push({ path: '/search', query: { value: this.valueInput } })
    },
    loadingPage(){
      this.valueInput = this.$route.query.value.split('+').join(' ')
      this.searchPosts()
    },
    searchPosts(){
      let arr = []
      let quantityResult = 0
      for(let i = 0; i < posts.length; i++){
        if(posts[i].title.toLowerCase().indexOf(this.valueInput.toLowerCase()) > -1){
          quantityResult++
          if(arr.length < 8){
            arr.push(posts[i])
          }
        }
      }
      if(quantityResult > 0){
        this.quantityResultPage = Math.ceil(quantityResult / 8) // Сколько страниц
      }
      this.quantitySearchView = arr.length // Сколько выведено на странице
      this.quantityResult = quantityResult // Сколько всего найдено

      this.postsResultInPage = arr
      console.log('Search... ');
    }
  },
  mounted() {
    this.loadingPage()
  }
}
</script>
