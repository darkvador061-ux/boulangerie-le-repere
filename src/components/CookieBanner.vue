<template>
  <Transition name="slide-up">
    <div v-if="visible" role="dialog" aria-label="Gestion des cookies" class="fixed bottom-0 left-0 right-0 z-[300] bg-brun-900 text-brun-100 shadow-2xl border-t border-brun-700">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div class="flex-1 min-w-0">
            <p class="text-sm leading-relaxed">
              Ce site utilise <strong class="text-white">Google Maps</strong> et <strong class="text-white">Google Fonts</strong>,
              des services tiers susceptibles de transmettre vos données à Google.
              <RouterLink to="/politique-confidentialite" class="underline hover:text-dore-400 transition-colors whitespace-nowrap">
                En savoir plus
              </RouterLink>.
            </p>
          </div>
          <div class="flex gap-3 shrink-0">
            <button
              @click="refuse"
              class="px-5 py-2 rounded-full border border-brun-500 hover:border-brun-300 text-sm transition-colors"
            >
              Refuser
            </button>
            <button
              @click="accept"
              class="px-5 py-2 rounded-full bg-dore-500 hover:bg-dore-400 text-white text-sm font-medium transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'cookie-consent'
const visible = ref(false)

onMounted(() => {
  visible.value = !localStorage.getItem(STORAGE_KEY)
})

function accept() {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  visible.value = false
  window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: 'accepted' }))
}

function refuse() {
  localStorage.setItem(STORAGE_KEY, 'refused')
  visible.value = false
  window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: 'refused' }))
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active { transition: transform 0.35s ease; }
.slide-up-enter-from,
.slide-up-leave-to    { transform: translateY(100%); }
</style>
