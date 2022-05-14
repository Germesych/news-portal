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

export default {
  name: "The-aside-block",
  components: {AppAdblock, AppPopularNewsRow},
  data() {
    return {
      adblockOne: `<img src="${require('@/assets/img/content/1.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
      adblockTwo: `<img src="${require('@/assets/img/content/2.jpeg')}" alt="img"><span class="adblock-test">Adblock #2</span>`,
      adblockThree: `<img src="${require('@/assets/img/content/3.jpeg')}" alt="img"><span class="adblock-test">Adblock #3</span>`,
      popularNewsTitle: 'popular news',
      popularNews1: [
        {
          id: 1,
          img: require('@/assets/img/content/1.jpeg'),
          alt: 'article img',
          date: '11.01.2020',
          title: 'Title news #1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 2,
          img: require('@/assets/img/content/2.jpeg'),
          alt: 'article img',
          date: '12.01.2020',
          title: 'Title news #2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 3,
          img: require('@/assets/img/content/3.jpeg'),
          alt: 'article img',
          date: '13.01.2020',
          title: 'Title news #3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 4,
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'article img',
          date: '14.01.2020',
          title: 'Title news #4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 5,
          img: require('@/assets/img/content/5.jpeg'),
          alt: 'article img',
          date: '15.01.2020',
          title: 'Title news #5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 6,
          img: require('@/assets/img/content/6.jpeg'),
          alt: 'article img',
          date: '14.01.2020',
          title: 'Title news #6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        }
      ],
      popularNews2: [
        {
          id: 7,
          img: require('@/assets/img/content/8.jpeg'),
          alt: 'article img',
          date: '17.01.2020',
          title: 'Title news #7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 8,
          img: require('@/assets/img/content/9.jpeg'),
          alt: 'article img',
          date: '18.01.2020',
          title: 'Title news #8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 9,
          img: require('@/assets/img/content/10.jpeg'),
          alt: 'article img',
          date: '19.01.2020',
          title: 'Title news #9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 10,
          img: require('@/assets/img/content/11.jpeg'),
          alt: 'article img',
          date: '20.01.2020',
          title: 'Title news #10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 11,
          img: require('@/assets/img/content/12.jpeg'),
          alt: 'article img',
          date: '21.01.2020',
          title: 'Title news #11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        },
        {
          id: 12,
          img: require('@/assets/img/content/1.jpeg'),
          alt: 'article img',
          date: '22.01.2020',
          title: 'Title news #12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut'
        }
      ]
    }
  }
}
</script>