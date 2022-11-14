<script >
import SiteHeader from './components/SiteHeader.vue';
export default {
  name: 'App',
  components: {
    SiteHeader,
  }
}
</script>

<template>
  <header id="siter_header">
    <SiteHeader />
  </header>
  <!-- /#siter_header -->
  <main id="site_main"></main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>

</style>
