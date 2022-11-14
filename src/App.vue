<script >
import axios from 'axios'
import SiteHeader from './components/SiteHeader.vue';
export default {
  name: 'App',
  components: {
    SiteHeader,
  },
  data() {
    return {
      API_URL: 'https://www.breakingbadapi.com/api/characters',
      characters: null,
      info: null,
      error: null
    }
  }, methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          console.log(resp);
          this.characters = resp.data
          this.info = resp.data
          console.log(this.characters);

        })
    }
  }, mounted() {
    this.callApi(this.API_URL)
  }
}
</script>

<template>
  <header id="siter_header">
    <SiteHeader />
  </header>
  <!-- /#siter_header -->
  <main id="site_main">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div class="card" v-for="character in characters">
          <div class="col">
            <img :src="character.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>
img {
  width: 240px;
  aspect-ratio: 1/1;
  object-fit: contain;
}
</style>
