<template>
  <div class="hot-week">
    <section class="top-block">
      <div class="title-line">{{ title }}</div>
      <div class="flex-block">
        <router-link
            to="/article/1"
        />
        <div class="img-block">
          <span class="category">{{ topArticle.category }}</span>
          <img :src="topArticle.img" :alt="topArticle.alt">
        </div>
        <!-- /.img-block -->
        <div class="content-block">
          <div class="date-small">{{ topArticle.date }}</div>
          <h1 class="title row-2">
            {{ topArticle.title }}
          </h1>
          <p class="row-5">
            {{ topArticle.shortText }}
          </p>
        </div>
        <!-- /.content-block -->
      </div>
      <!-- /.flex-block -->
    </section>
    <!-- /.top_block -->
    <section class="block-row">
      <div class="row" v-for="item in article" :key="item.id">
        <router-link
            :to="'/article/' + item.id"
        />
        <img :src="item.img" :alt="item.alt" class="img">
        <div class="content">
          <div class="date-small">{{item.date}}</div>
          <h1 class="title row-2">
            {{item.title}}
          </h1>
        </div>
      </div>
    </section>
    <!-- /.footer-block -->
  </div>
  <!-- /.hot-week -->
</template>

<script>
import posts from "@/api/article"
export default {
  name: "The-hot-week",
  data() {
    return {
      title: 'hot this week',
      topArticle: {
        id: 1,
        date: '07.02.2021',
        category: 'foods',
        img: require('@/assets/img/content/1.jpeg'),
        alt: 'images',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque deleniti doloremque, ducimus eveniet illo labore laudantium magni quasi rem sint unde veritatis! Accusantium cumque earum eius esse optio voluptate.',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni numquam porro! Beatae debitis dolorem dolorum, ea eligendi enim ex exercitationem iste mollitia nam natus nemo sunt unde velit, voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni numquam porro! Beatae debitis dolorem dolorum, ea eligendi enim ex exercitationem iste mollitia nam natus nemo sunt unde velit, voluptates.'
      },
      article: []
    }
  },
  methods: {
    getPosts(){
      for(let i = 5; i < 9; i++){
        this.article.push(posts[i])
      }
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
