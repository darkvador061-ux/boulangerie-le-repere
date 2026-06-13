<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isDark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-sm'"
  >
    <!-- Barre de progression du scroll -->
    <div
      class="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-dore-400 via-rose-400 to-dore-500 pointer-events-none z-10"
      :style="{ width: scrollProgress + '%', transition: 'width 0.08s linear' }"
    />
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img
            :src="logoUrl"
            alt="Logo Boulangerie Le Repère"
            width="1154"
            height="846"
            class="h-16 w-auto object-contain flex-shrink-0 drop-shadow"
          />
          <div class="leading-tight">
            <p class="font-serif font-bold text-2xl leading-none"
               :class="isDark ? 'text-white group-hover:text-rose-300' : 'text-brun-900 group-hover:text-rose-500'"
               style="transition: color 0.3s">Le Repère</p>
            <p class="text-xs font-sans tracking-[0.2em] uppercase mt-0.5"
               :class="isDark ? 'text-white/70' : 'text-brun-400'">Boulangerie Artisanale</p>
          </div>
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="font-sans font-medium text-sm transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full"
            :class="isDark
              ? 'text-white/90 hover:text-rose-300 after:bg-rose-300'
              : 'text-brun-700 hover:text-rose-500 after:bg-rose-500'"
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
          :class="isDark ? 'text-white' : 'text-brun-900'"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLogoCanvas } from '../composables/useLogoCanvas.js'
import { NAV_LINKS } from '../data/config.js'

const scrolled       = ref(false)
const scrollProgress = ref(0)
const menuOpen       = ref(false)
const route     = useRoute()
const { logoUrl } = useLogoCanvas()

const navLinks = NAV_LINKS

const isDark = computed(() => route.path === '/' && !scrolled.value)

function onScroll() {
  scrolled.value = window.scrollY > 40
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
