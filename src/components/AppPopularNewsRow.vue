<template>
  <div class="row">
    <a :href="link"></a>
    <img :src=img alt="" class="img">
    <div class="content">
      <div class="date-small">{{date}}</div>
      <h3 class="title-news row-2">
        {{title}}
      </h3>
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  name: "App-popular-news-row",
  props: ['img', 'date', 'title', 'link'],
}
</script>