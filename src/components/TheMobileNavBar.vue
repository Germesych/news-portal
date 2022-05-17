<template>
  <div class="mobile-navbar">
    <button class="btn burger-menu" @click="openMenu">
      &#9776;
    </button>
    <div class="mobile-nav" v-if="statusMenu">
      <button class="btn close" @click="closeMenu">&#10006;</button>
      <ul class="mobile-nav__list reset-ul">
        <li class="mobile-nav__items">
          <router-link to="/">Home</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="mobile-nav__items">
          <router-link to="/blog/tech">tech</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="mobile-nav__items">
          <router-link to="/blog/business">BUSINESS</router-link>
        </li>
        <!-- /.nav-items-->
        <li class="mobile-nav__items">
          <router-link to="/blog/politics">POLITICS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="mobile-nav__items">
          <router-link to="/blog/life-style">LIFE STYLE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="mobile-nav__items">
          <router-link to="/blog/foods">FOODS</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="mobile-nav__items">
          <router-link to="/blog/culture">CULTURE</router-link>
        </li>
        <!-- /.nav-items -->
        <li class="mobile-nav__items">
          <router-link to="/blog/sport">SPORT</router-link>
        </li>
        <!-- /.nav-items -->
      </ul>
    </div>
    <!-- /.mobile-nav -->
    <div class="logo">1<span>NEWS</span></div>
  </div>
  <!-- /.mobile-navbar -->
</template>

<script>
export default {
  name: "TheMobileNavBar",
  data(){
    return {
      statusMenu: false
    }
  },
  methods: {
    closeMenu(){
      this.statusMenu = false
    },
    openMenu(){
      this.statusMenu = true
    }
  }
}
</script>
