<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <GoogleReviews />
  <SiteFooter />
</template>

<script setup>
import NavBar        from './components/NavBar.vue'
import SiteFooter    from './components/SiteFooter.vue'
import GoogleReviews from './components/GoogleReviews.vue'
</script>
