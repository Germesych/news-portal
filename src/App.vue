<template>
  <div class="main">
    <app-top-header/>
    <div class="container">
      <router-view/>
    </div>
    <!-- /.container -->
    <app-footer/>
  </div>
  <!-- /.main -->
</template>
<script>
import AppNav from "./components/App-nav";
import AppTopHeader from "./components/App-top-header";
import AppFooter from "./components/App-footer";
export default {
  components: {AppFooter, AppTopHeader, AppNav}
}
</script>