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
          title: '#1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 2,
          title: '#2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 3,
          title: '#3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 4,
          title: '#4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 5,
          title: '#5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 6,
          title: '#6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        },
        {
          id: 7,
          title: '#7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nulla lorem aliquam sem amet, leo sed. Non ac aliquet viverra pellentesque varius ac eleifend varius amet. '
        }
      ]
    }
  }
}
</script>