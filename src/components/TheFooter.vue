<template>
  <div class="footer">
    <div class="container">
      <div class="flex-block">
        <div class="card">
          <div class="logo">
            1<span>NEWS</span>
          </div>
          <p>
            {{ aboutUs }}
          </p>
        </div>
        <!-- /.card -->
        <div class="card">
          <h2 class="title">{{ categoryTitle }}</h2>
          <div class="category-block">
            <a :href="item.link" class="category-link" v-for="item in category"
               :key="item.id">{{ item.nameCategory }}</a>
          </div>
          <!-- /.category-block -->
        </div>
        <!-- /.card -->
        <div class="card">
          <h2 class="title">{{ gretLatestNewsTitle }}</h2>
          <p>
            {{ gretLatestNewsText }}
          </p>
          <form class="subscribe">
            <input type="text">
            <button class="btn-red" type="submit">{{gretLatestNewsBtnText}}</button>
          </form>
          <!-- /.subscribe -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.flex-block -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: "The-footer",
  data() {
    return {
      categoryTitle: 'categories',
      category: [
        {
          id: 1,
          nameCategory: 'home',
          link: '#!'
        },
        {
          id: 2,
          nameCategory: 'business',
          link: '#!'
        },
        {
          id: 3,
          nameCategory: 'politics',
          link: '#!'
        },
        {
          id: 4,
          nameCategory: 'life style',
          link: '#!'
        },
        {
          id: 5,
          nameCategory: 'culture',
          link: '#!'
        },
        {
          id: 6,
          nameCategory: 'tech',
          link: '#!'
        },
        {
          id: 7,
          nameCategory: 'sport',
          link: '#!'
        },
        {
          id: 8,
          nameCategory: 'foods',
          link: '#!'
        }
      ],
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat ornare pharetra at nisl, urna dictum blandit et rhoncus. Scelerisque lorem aliquet sit egestas diam in.',
      gretLatestNewsTitle: 'get latest news!',
      gretLatestNewsText: 'We will send you breaking news right to your inbox',
      gretLatestNewsBtnText: "subscribe"
    }
  }
}
</script>
