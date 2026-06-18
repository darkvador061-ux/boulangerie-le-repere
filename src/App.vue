<template>
  <PromoPopup />
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
import PromoPopup    from './components/PromoPopup.vue'
</script>
