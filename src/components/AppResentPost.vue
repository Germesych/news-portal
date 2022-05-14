<template>
  <div class="resent-post">
    <h2 class="title">
      RESENT POST
    </h2>
    <!-- /.title -->
    <a href="#" class="post-link row-2" v-for="item in article" :key="item.id">
      {{ item.title }}
    </a>
  </div>
  <!-- /.resent-post -->
</template>
<script>
export default {
  name: "App-resent-post",
  data() {
    return {
      article: [
        {
          id: 1,
          title: 'Praesent dignissim turpis tincidunt, euismod metus eu, bibendum nunc. Praesent dignissim turpis tincidunt, euismod metus eu, bibendum nunc.'
        },
        {
          id: 2,
          title: 'Etiam id nulla ut velit ultrices aliquam. Etiam id nulla ut velit ultrices aliquam. Etiam id nulla ut velit ultrices aliquam.'
        },
        {
          id: 3,
          title: 'Nunc scelerisque turpis at arcu interdum, sed tempor eros facilisis. Nunc scelerisque turpis at arcu interdum, sed tempor eros facilisis.'
        },
        {
          id: 4,
          title: 'Quisque ut erat at justo mollis vehicula. Quisque ut erat at justo mollis vehicula. Quisque ut erat at justo mollis vehicula.'
        },
        {
          id: 5,
          title: 'Nullam placerat felis non tellus fringilla congue. Nullam placerat felis non tellus fringilla congue. Nullam placerat felis non tellus fringilla congue.'
        },
        {
          id: 6,
          title: 'Duis tempus urna sit amet lectus mollis tempus. Duis tempus urna sit amet lectus mollis tempus. Duis tempus urna sit amet lectus mollis tempus.'
        },
        {
          id: 7,
          title: 'Praesent id tortor vitae erat dignissim pharetra. Praesent id tortor vitae erat dignissim pharetra. Praesent id tortor vitae erat dignissim pharetra.'
        }
      ]
    }
  }
}
</script>