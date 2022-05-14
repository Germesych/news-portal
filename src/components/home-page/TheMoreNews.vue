<template>
  <div class="more-news">
    <h2 class="title-line">{{title}}</h2>
    <!-- /.title-line -->
    <div class="flex-block">
      <div class="card-new" v-for="item in article" :key="item.id">
        <a href="#"></a>
        <img :src="item.img" :alt="item.alt">
        <div class="date-small">{{item.date}}</div>
        <!-- /.data-small -->
        <h3 class="title row-2">
          {{item.title}}
        </h3>
      </div>
      <!-- /.card-new -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.more-news -->
</template>

<script>
export default {
  name: "The-more-news",
  data(){
    return {
      title: 'more news',
      article: [
        {
          id: 1,
          date: '20.03.2022',
          img: require('@/assets/img/content/4.jpeg'),
          alt: 'images',
          title: 'Title-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        },
        {
          id: 2,
          date: '22.03.2022',
          img: require('@/assets/img/content/7.jpeg'),
          alt: 'images',
          title: 'Title-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        },
        {
          id: 3,
          date: '23.03.2022',
          img: require('@/assets/img/content/6.jpeg'),
          alt: 'images',
          title: 'Title-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        },
        {
          id: 4,
          date: '24.03.2022',
          img: require('@/assets/img/content/5.jpeg'),
          alt: 'images',
          title: 'Title-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        },
        {
          id: 5,
          date: '25.03.2022',
          img: require('@/assets/img/content/11.jpeg'),
          alt: 'images',
          title: 'Title-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        },
        {
          id: 6,
          date: '26.03.2022',
          img: require('@/assets/img/content/12.jpeg'),
          alt: 'images',
          title: 'Title-6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum dolor sit amet'
        }
      ]
    }
  }
}
</script>
