<template>
  <div class="adblock">
    <div v-html="adblock"></div>
  </div>
  <!-- /.adblock -->
</template>

<script>
export default {
  name: "App-adblock",
  props: ['adblock']
}
</script>