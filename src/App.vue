<script >
import axios from 'axios'
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
  },
  data() {
    return {
      store,
    }
  }, methods: {
    callApi(url) {
      axios.get(url)
        .then(resp => {
          console.log(resp);
          this.store.characters = resp.data
          this.store.loading = true

        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  }, mounted() {
    this.callApi(this.store.API_URL)
  }
}
</script>

<template>
  <header id="siter_header">
    <SiteHeader />
  </header>
  <!-- /#siter_header -->
  <main id="site_main">
    <SiteMain />
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>

</style>
