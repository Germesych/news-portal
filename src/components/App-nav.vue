<template>
  <div class="nav-top container">
    <nav class="nav">
      <ul class="nav-list reset-ul">
        <li class="nav-items nav-active">
          <router-link to="/" class="nav-active">Home</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="nav-items">
          <router-link to="/blog">blog</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/article">article</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/search">search</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/business">BUSINESS</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="nav-items">
          <router-link to="/politics">POLITICS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/life_style">LIFE STYLE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/food">FOODS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/culture">CULTURE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/tech">TECH</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="nav-items">
          <router-link to="/sport">SPORT</router-link>
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
  name: "App-nav"
}
</script>