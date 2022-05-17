<template>
  <div class="nav-top container">
    <nav class="nav">
      <ul class="nav-list reset-ul">
        <li class="nav-items nav-active">
          <router-link to="/" class="nav-active">Home</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="nav-items">
          <router-link to="/blog/tech">tech</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/blog/business">BUSINESS</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="nav-items">
          <router-link to="/blog/politics">POLITICS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/blog/life-style">LIFE STYLE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/blog/foods">FOODS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/blog/culture">CULTURE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/blog/sport">SPORT</router-link>
        </li>
        <!-- /.nav-items -->
      </ul>
    </nav>
    <!-- /.nav -->
  </div>
  <!-- /.nav-top -->
</template>

<script>
export default {
  name: "The-nav-bar",
}
</script>