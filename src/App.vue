<script >
import axios from 'axios'
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
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
        <SiteMain v-for="character in characters" :poster="character.img" :name="character.name"
          :isAlive="character.status" />
      </div>
    </div>
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>

</style>
