<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img
            :src="logoUrl"
            alt="Logo Boulangerie Le Repère"
            class="h-16 w-auto object-contain flex-shrink-0 drop-shadow"
          />
          <div class="leading-tight">
            <p class="font-serif font-bold text-2xl leading-none"
               :class="scrolled ? 'text-brun-900 group-hover:text-rose-500' : 'text-white group-hover:text-rose-300'"
               style="transition: color 0.3s">Le Repère</p>
            <p class="text-xs font-sans tracking-[0.2em] uppercase mt-0.5"
               :class="scrolled ? 'text-brun-400' : 'text-white/70'">Boulangerie Artisanale</p>
          </div>
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="font-sans font-medium text-sm transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full"
            :class="scrolled
              ? 'text-brun-700 hover:text-rose-500 after:bg-rose-500'
              : 'text-white/90 hover:text-rose-300 after:bg-rose-300'"
            active-class="!text-rose-500 after:!w-full"
          >
            {{ link.label }}
          </RouterLink>
          <a href="tel:0561896070" class="btn-primary text-sm">
            📞 Nous appeler
          </a>
        </nav>

        <!-- Mobile burger -->
        <button
          class="md:hidden p-2 rounded-lg"
          :class="scrolled ? 'text-brun-900' : 'text-white'"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span class="block w-6 h-0.5 bg-current mb-1.5 transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
          <span class="block w-6 h-0.5 bg-current mb-1.5 transition-all" :class="menuOpen ? 'opacity-0' : ''" />
          <span class="block w-6 h-0.5 bg-current transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="menuOpen" class="md:hidden bg-white border-t border-brun-100 px-4 pb-6 pt-2">
        <nav class="flex flex-col gap-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="font-medium text-brun-800 hover:text-rose-500 py-2 border-b border-brun-100"
            active-class="text-rose-500"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <a href="tel:0561896070" class="btn-primary text-center mt-2">
            📞 05 61 89 60 70
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled  = ref(false)
const menuOpen  = ref(false)
const logoUrl   = ref('/images/logo.avif')

const navLinks = [
  { to: '/',                  label: 'Accueil' },
  { to: '/pain-patisseries',  label: 'Pain & Pâtisseries' },
  { to: '/snacking-traiteur', label: 'Snacking & Traiteur' },
  { to: '/contact',           label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function removeLogoBg() {
  const img = new Image()
  img.onload = () => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width  = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2]
        const avg  = (r + g + b) / 3
        const span = Math.max(r, g, b) - Math.min(r, g, b)
        // Cible : fond ovale gris-bleu foncé (#4A4F5E ≈ 74,79,94)
        // Exclure : texte rose (r >> g), épis blancs (avg > 150)
        if (avg < 135 && span < 55 && !(r > g + 35)) {
          d[i + 3] = 0
        }
      }
      ctx.putImageData(imageData, 0, 0)
      logoUrl.value = canvas.toDataURL('image/png')
    } catch (_) { /* conserve l'original si canvas bloqué */ }
  }
  img.src = '/images/logo.avif'
}

onMounted(() => {
  removeLogoBg()
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
