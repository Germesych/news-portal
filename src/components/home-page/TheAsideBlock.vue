<template>
  <aside class="aside">
    <app-adblock
      :adblock="adblockOne"
    />
    <div class="content-blk popular-news">
      <h2 class="title">{{popularNewsTitle}}</h2>
      <div class="block-row">
        <app-popular-news-row
            v-for="item in popularNews1"
            :key="item.id"
            :img="item.img"
            :date="item.date"
            :title="item.title"
            :link="item.id"
        />
      </div>
      <!-- /.block-row -->
    </div>
    <!-- /.content-blk /.popular-news -->
    <app-adblock
        :adblock="adblockTwo"
    />
    <div class="content-blk popular-news">
      <h2 class="title">{{popularNewsTitle}}</h2>
      <div class="block-row">
        <app-popular-news-row
            v-for="item in popularNews2"
            :key="item.id"
            :img="item.img"
            :date="item.date"
            :title="item.title"
            :link="item.id"
        />
      </div>
      <!-- /.block-row -->
    </div>
    <!-- /.content-blk /.popular-news -->
    <app-adblock
        :adblock="adblockThree"/>
  </aside>
  <!-- /.aside -->
</template>

<script>
import AppPopularNewsRow from "../AppPopularNewsRow";
import AppAdblock from "../AppAdblock";
export default {
  name: "The-aside-block",
  components: {AppAdblock, AppPopularNewsRow},
  data(){
    return{
      adblockOne: '1-Adblock',
      adblockTwo: '2-Adblock',
      adblockThree: '3-Adblock',
      popularNewsTitle: 'popular news',
      popularNews1: [
        {
          id: 1,
          img: require('@/assets/img/col.jpg'),
          date: '11.01.2020',
          title: 'Title news #1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 2,
          img: require('@/assets/img/col.jpg'),
          date: '12.01.2020',
          title: 'Title news #2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 3,
          img: require('@/assets/img/col.jpg'),
          date: '13.01.2020',
          title: 'Title news #3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 4,
          img: require('@/assets/img/col.jpg'),
          date: '14.01.2020',
          title: 'Title news #4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 5,
          img: require('@/assets/img/col.jpg'),
          date: '15.01.2020',
          title: 'Title news #5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 6,
          img: require('@/assets/img/col.jpg'),
          date: '14.01.2020',
          title: 'Title news #6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        }
      ],
      popularNews2: [
        {
          id: 7,
          img: require('@/assets/img/col.jpg'),
          date: '17.01.2020',
          title: 'Title news #7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 8,
          img: require('@/assets/img/col.jpg'),
          date: '18.01.2020',
          title: 'Title news #8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 9,
          img: require('@/assets/img/col.jpg'),
          date: '19.01.2020',
          title: 'Title news #9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 10,
          img: require('@/assets/img/col.jpg'),
          date: '20.01.2020',
          title: 'Title news #10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 11,
          img: require('@/assets/img/col.jpg'),
          date: '21.01.2020',
          title: 'Title news #11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 12,
          img: require('@/assets/img/col.jpg'),
          date: '22.01.2020',
          title: 'Title news #12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        }
      ]
    }
  }
}
</script>