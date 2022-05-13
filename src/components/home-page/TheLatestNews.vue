<template>
  <div class="latest-news">
    <div class="flex-col">
      <div class="col" v-for="item in article" :key="item.id">
        <span class="category">{{ item.category }}</span>
        <!-- /.category -->
        <img :src="item.img" :alt="item.alt">
        <div class="col__content">
          <div class="date">{{item.date}}</div>
          <h2 class="col-title row-3">
            {{item.title}}
          </h2>
          <!-- /.col-title -->
        </div>
        <!-- /.col__content -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.flex-col -->
  </div>
  <!-- /.latest-news -->
</template>

<script>
export default {
  name: "The-latest-news",
  data(){
    return{
      article: [
        {
          id: 1,
          category: 'tech',
          date: '01.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        },
        {
          id: 2,
          category: 'foods',
          date: '02.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        },
        {
          id: 3,
          category: 'tech',
          date: '03.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        },
        {
          id: 4,
          category: 'politic',
          date: '04.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        },
        {
          id: 5,
          category: 'tech',
          date: '05.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        },
        {
          id: 6,
          category: 'business',
          date: '06.07.2022',
          img: require('@/assets/img/col.jpg'),
          alt: 'images',
          title: 'Title-6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mor'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>