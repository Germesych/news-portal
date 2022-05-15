<template>
  <div class="content-blk popular-news">
    <h2 class="title">{{title}}</h2>
    <div class="block-row">
      <div class="row" v-for="item in posts" :key="item.id">
        <router-link
            :to="'/article/' + item.id"
        />
        <img :src=item.img :alt="item.alt" class="img">
        <div class="content">
          <div class="date-small">{{item.date}}</div>
          <h3 class="title-news row-2">
            {{item.title}}
          </h3>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.block-row -->
  </div>
  <!-- /.content-blk /.popular-news -->
</template>

<script>
export default {
  name: "App-popular-news-row",
  props: ['posts', 'title'],
}
</script>