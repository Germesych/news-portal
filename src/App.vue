<template>
  <div class="main">
    <the-top-header/>
    <div class="container">
      <router-view/>
    </div>
    <!-- /.container -->
    <the-footer/>
  </div>
  <!-- /.main -->
</template>
<script>
import TheNav from "./components/TheNavBar";
import TheTopHeader from "./components/TheTopHeader";
import TheFooter from "./components/TheFooter";
export default {
  components: {TheFooter, TheTopHeader, TheNav}
}
</script>