<template>
  <div class="related-posts">
    <h2 class="title">{{ title }}</h2>
    <!-- /.title -->
    <div class="block-row">
      <div class="row" v-for="item in posts" :key="item.id">
        <a href="#"></a>
        <img :src="item.img" :alt="item.alt" class="img">
        <div class="content">
          <div class="date-small">{{item.date}}</div>
          <h3 class="title row-2">
            {{item.title}}
          </h3>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.flex-block -->
  </div>
  <!-- /.related-posts -->
</template>

<script>
export default {
  name: "App-related-posts",
  props: ['posts', 'title'],
}
</script>