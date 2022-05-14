<template>
  <div class="blog">
    <div class="breadcrumbs-block">
      <a href="/">Home </a> <span>&rsaquo;</span> <a href="/foods">Foods</a>
    </div>
    <!-- /.breadcrumbs-block -->
    <div class="title">{{mainTitle}}</div>
    <div class="flex-block">
      <div class="blog-block">
        <section class="blog-card" v-for="item in article" :key="item.id">
          <div class="wrap">
            <a href="#">
              <img :src="item.img" :alt="item.alt">
            </a>
          </div>
          <!-- /.wrap -->
          <div class="date-small">{{ item.date }}</div>
          <h1 class="post-title row-1">
            {{ item.title }}
          </h1>
          <p class="post-text row-4">
            {{ item.shortText }}
          </p>
          <a href="#" class="post-link">{{ redMoreBtnText }}</a>
        </section>
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
      <aside class="aside">
        <app-resent-post/>
        <app-adblock
        adblock="title-adblock"
        />
      </aside>
      <!-- /.assets -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.blog -->
</template>

<script>
import TheTopHeader from "../components/TheTopHeader";
import TheFooter from "../components/TheFooter";
import AppResentPost from "../components/AppResentPost";
import AppAdblock from "../components/AppAdblock";

export default {
  name: "Blog-page",
  components: {AppAdblock, AppResentPost, TheFooter, TheTopHeader},
  data() {
    return {
      mainTitle: 'foods',
      redMoreBtnText: 'red more',
      article: [
        {
          id: 1,
          img: require('@/assets/img/col.jpg'),
          alt: 'news image',
          date: '01.02.2022',
          title: '1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.',
          link: '#'
        },
        {
          id: 2,
          img: require('@/assets/img/col.jpg'),
          alt: 'news image',
          date: '02.02.2022',
          title: '2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.',
          link: '#'
        },
        {
          id: 3,
          img: require('@/assets/img/col.jpg'),
          alt: 'news image',
          date: '03.02.2022',
          title: '3-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.',
          link: '#'
        },
        {
          id: 4,
          img: require('@/assets/img/col.jpg'),
          alt: 'news image',
          date: '04.02.2022',
          title: '4-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.',
          link: '#'
        },
        {
          id: 5,
          img: require('@/assets/img/col.jpg'),
          alt: 'news image',
          date: '05.02.2022',
          title: '5-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.',
          link: '#'
        }
      ]
    }
  }
}
</script>
