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
      error: null
    }
  }, methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          console.log(resp);
          this.characters = resp.data

        })
        .catch(err => {
          console.error(err.message);
          this.error = err.message
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
    <SiteMain :characters="characters" />
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>

</style>
