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
          <div class="date-small">{{ article.date }}</div>
          <!-- /.data-small -->
          <h1 class="title">
            {{ article.title }}
          </h1>
          <div class="article-img" style="background: #9b9b9b">
            <img :src="article.img" :alt="article.alt" class="">
          </div>
          <!-- /.article-img -->
          <div v-html="article.content"></div>
          <div class="article-nav">
            <a href="" class="prev"><span>&lsaquo;</span> Previous article</a>
            <a href="" class="next">Next article <span>&rsaquo;</span></a>
          </div>
          <!-- /.article-nav -->
        </article>
        <!-- /.article -->
        <app-related-posts
            :title="relatedTitle"
            :posts="relatedPosts"
        />
      </div>
      <!-- /.wrap -->
      <aside class="aside">
        <app-resent-post/>
        <app-adblock
            :adblock="adblock"
        />
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
  components: {AppRelatedPosts, AppAdblock, AppResentPost},
  data() {
    return {
      adblock: `<img src="${require('@/assets/img/content/12.jpeg')}" alt="img"><span class="adblock-test">Adblock #1</span>`,
      article: {
        id: 1,
        date: '14.05.2022',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: require('@/assets/img/content/10.jpeg'),
        alt: 'article image',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.</p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="author">Oswald Griffith</span></q><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet.</p>'
      },
      relatedTitle: 'Related Posts',
      relatedPosts: [
        {
          id: 1,
          date: '01.01.2019',
          title: 'Fusce congue mauris fermentum, pretium nibh nec, scelerisque libero. Fusce congue mauris fermentum, pretium nibh nec, scelerisque libero.',
          img: require('@/assets/img/content/2.jpeg'),
          alt: 'article image'
        },
        {
          id: 2,
          date: '05.01.2019',
          title: 'Sed eget augue tristique, ornare metus fringilla, blandit enim. Sed eget augue tristique, ornare metus fringilla, blandit enim.',
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'article image'
        }, {
          id: 3,
          date: '09.01.2019',
          title: 'Curabitur iaculis nisl sit amet congue sollicitudin. Curabitur iaculis nisl sit amet congue sollicitudin.',
          img: require('@/assets/img/content/7.jpeg'),
          alt: 'article image'
        },
        {
          id: 4,
          date: '22.01.2019',
          title: 'Maecenas vel tellus ullamcorper, varius enim sed, euismod magna. Maecenas vel tellus ullamcorper, varius enim sed, euismod magna.',
          img: require('@/assets/img/content/10.jpeg'),
          alt: 'article image'
        }
      ]
    }
  }
}
</script>