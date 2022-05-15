<template>
  <div class="hot-week">
    <div class="top-block">
      <h2 class="title-line">{{ title }}</h2>
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
          <h3 class="title row-2">
            {{ topArticle.title }}
          </h3>
          <p class="row-5">
            {{ topArticle.shortText }}
          </p>
        </div>
        <!-- /.content-block -->
      </div>
      <!-- /.flex-block -->
    </div>
    <!-- /.top_block -->
    <div class="block-row">
      <div class="row" v-for="item in article" :key="item.id">
        <router-link
            :to="'/article/' + item.id"
        />
        <img :src="item.img" :alt="item.alt" class="img">
        <div class="content">
          <div class="date-small">{{item.date}}</div>
          <h3 class="title row-2">
            {{item.title}}
          </h3>
        </div>
      </div>
    </div>
    <!-- /.footer-block -->
  </div>
  <!-- /.hot-week -->
</template>

<script>
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
      article: [
        {
          id: 1,
          img: require('@/assets/img/content/2.jpeg'),
          alt: 'images',
          date: '10.12.2020',
          title: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 2,
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'images',
          date: '12.12.2020',
          title: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 3,
          img: require('@/assets/img/content/5.jpeg'),
          alt: 'images',
          date: '13.12.2020',
          title: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 4,
          img: require('@/assets/img/content/6.jpeg'),
          alt: 'images',
          date: '14.12.2020',
          title: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  }
}
</script>
