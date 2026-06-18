<template>
  <section class="py-24 bg-brun-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- En-tête -->
      <div class="text-center mb-14">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-700 font-medium text-xs tracking-[0.25em] uppercase">Avis clients</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Ce que nos clients disent de nous</h2>

        <div class="inline-flex items-center gap-4 mt-6 bg-white rounded-2xl shadow-md px-6 py-4 border border-brun-100">
          <div class="flex flex-col items-center">
            <span class="text-4xl font-bold text-brun-900">{{ googleRating }}</span>
            <div class="flex gap-0.5 mt-1">
              <span v-for="s in 5" :key="s" class="text-xl" :class="s <= Math.round(googleRating) ? 'text-yellow-400' : 'text-brun-200'">★</span>
            </div>
            <span class="text-xs text-brun-400 mt-1">{{ googleCount }} avis Google</span>
          </div>
          <div class="w-px h-12 bg-brun-200" />
          <div class="flex flex-col items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-8 h-8">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span class="text-xs font-medium text-brun-600">Google</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MOBILE / TABLETTE : marquee ===== -->
    <div class="lg:hidden">
      <div class="marquee-wrapper w-full" @mouseenter="pauseMarquee" @mouseleave="resumeMarquee">
        <div class="marquee-track" :class="{ paused: marqueePaused }" style="--duration: 40s;">
          <ReviewCard v-for="(r, i) in row1" :key="'r1-' + i" :review="r" />
        </div>
      </div>
      <div class="marquee-wrapper mt-4 w-full" @mouseenter="pauseMarquee" @mouseleave="resumeMarquee">
        <div class="marquee-track marquee-reverse" :class="{ paused: marqueePaused }" style="--duration: 50s;">
          <ReviewCard v-for="(r, i) in row2" :key="'r2-' + i" :review="r" />
        </div>
      </div>
    </div>

    <!-- ===== DESKTOP : stagger ===== -->
    <div
      class="relative w-full overflow-hidden hidden lg:block"
      style="height: 580px;"
      @mouseenter="pauseAuto"
      @mouseleave="resumeAuto"
    >
      <div
        v-for="(review, index) in reviewsList"
        :key="review.tempId"
        class="absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out"
        :style="getCardStyle(index)"
        @click="handleMove(getPosition(index))"
        @mouseenter="pauseAuto"
        @mouseleave="resumeAuto"
      >
        <!-- Ligne diagonale sur le coin coupé -->
        <span
          class="absolute block origin-top-right rotate-45"
          :style="{
            right: '-2px',
            top: '48px',
            width: SQRT_5000 + 'px',
            height: '2px',
            backgroundColor: getPosition(index) === 0 ? '#D4831A' : '#E0E2E8',
          }"
        />

        <!-- Étoiles -->
        <div class="flex gap-0.5 mb-4">
          <span
            v-for="s in 5"
            :key="s"
            class="text-base"
            :class="s <= review.stars ? 'text-yellow-400' : 'text-brun-200'"
          >★</span>
        </div>

        <!-- Texte -->
        <p
          class="text-sm sm:text-base font-medium leading-relaxed italic"
          :class="getPosition(index) === 0 ? 'text-white/85' : 'text-brun-500'"
        >
          "{{ review.text }}"
        </p>

        <!-- Auteur -->
        <div class="absolute bottom-8 left-8 right-8 flex items-center gap-3">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            :style="{ backgroundColor: review.color }"
          >
            {{ review.name[0] }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-sm truncate" :class="getPosition(index) === 0 ? 'text-white' : 'text-brun-900'">{{ review.name }}</p>
            <p class="text-xs" :class="getPosition(index) === 0 ? 'text-white/60' : 'text-brun-400'">{{ review.date }}</p>
          </div>
        </div>
      </div>

      <!-- Boutons navigation -->
      <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          @click="handleMove(-1)"
          class="flex h-14 w-14 items-center justify-center border-2 border-brun-100 bg-white text-brun-900 hover:bg-brun-900 hover:text-white hover:border-brun-900 transition-colors duration-200 text-xl"
          aria-label="Avis précédent"
        >←</button>
        <button
          @click="handleMove(1)"
          class="flex h-14 w-14 items-center justify-center border-2 border-brun-100 bg-white text-brun-900 hover:bg-brun-900 hover:text-white hover:border-brun-900 transition-colors duration-200 text-xl"
          aria-label="Avis suivant"
        >→</button>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ReviewCard from './ReviewCard.vue'

const SQRT_5000 = Math.sqrt(5000)

const googleRating = 4.7
const googleCount  = 89

const reviews = [
  { id: 0, name: 'Nathalie B.',   stars: 5, date: 'il y a 1 semaine', color: '#D4831A', text: 'Boulangerie exceptionnelle ! Les viennoiseries sont fondantes, les pains toujours bien cuits. Le personnel est adorable et souriant.' },
  { id: 1, name: 'Christophe V.', stars: 5, date: 'il y a 2 semaines', color: '#2A5082', text: 'Le meilleur pain de campagne de tout le secteur. La livraison à domicile le matin est très pratique pour commencer la journée.' },
  { id: 2, name: 'Aurélie M.',    stars: 5, date: 'il y a 3 semaines', color: '#34A853', text: "Nous avons commandé notre pièce montée de mariage ici. Un travail absolument magnifique, nos invités n'en revenaient pas !" },
  { id: 3, name: 'Denis R.',      stars: 4, date: 'il y a 1 mois',     color: '#EA4335', text: 'Très bonne boulangerie artisanale. Large choix de pains spéciaux et pâtisseries faits maison. Les sandwichs du midi sont copieux.' },
  { id: 4, name: 'Isabelle C.',   stars: 5, date: 'il y a 1 mois',     color: '#9C27B0', text: "Les éclairs au chocolat sont à tomber par terre ! Toujours frais, toujours bons. J'y vais chaque semaine sans jamais être déçue." },
  { id: 5, name: 'Sylvain F.',    stars: 5, date: 'il y a 2 mois',     color: '#FF6D00', text: 'Accueil chaleureux, produits de qualité, tarifs raisonnables. La formule midi est vraiment complète et faite maison.' },
  { id: 6, name: 'Martine G.',    stars: 5, date: 'il y a 2 mois',     color: '#0097A7', text: 'Que ce soit pour le pain quotidien ou les occasions spéciales, le Repère ne déçoit jamais. Les pizzas du vendredi sont un régal !' },
  { id: 7, name: 'Laurent P.',    stars: 4, date: 'il y a 3 mois',     color: '#388E3C', text: "Boulangerie de village qui a tout d'une grande. Bon pain, bonnes pâtisseries, équipe sympa. Le service de livraison est appréciable." },
]

// ── Stagger (desktop) ──────────────────────────────────────────
const reviewsList = ref(reviews.map((r, i) => ({ ...r, tempId: i })))

function getPosition(index) {
  const len = reviewsList.value.length
  return len % 2 ? index - (len + 1) / 2 : index - len / 2
}

function getCardStyle(index) {
  const pos    = getPosition(index)
  const center = pos === 0
  const size   = 340

  return {
    width:    size + 'px',
    height:   size + 'px',
    clipPath: 'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
    transform: `translate(-50%, -50%) translateX(${(size / 1.5) * pos}px) translateY(${center ? -65 : pos % 2 ? 15 : -15}px) rotate(${center ? 0 : pos % 2 ? 2.5 : -2.5}deg)`,
    zIndex:          center ? 10 : Math.max(1, 6 - Math.abs(pos)),
    backgroundColor: center ? '#181B28' : '#FFFFFF',
    borderColor:     center ? '#D4831A' : '#E0E2E8',
    boxShadow:       center ? '0px 8px 0px 4px #E0E2E8' : 'none',
  }
}

function handleMove(steps) {
  const newList = [...reviewsList.value]
  if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      const item = newList.shift()
      if (!item) return
      newList.push({ ...item, tempId: Math.random() })
    }
  } else {
    for (let i = 0; i > steps; i--) {
      const item = newList.pop()
      if (!item) return
      newList.unshift({ ...item, tempId: Math.random() })
    }
  }
  reviewsList.value = newList
}

let autoTimer  = null
let autoPaused = false

function startAuto() {
  autoTimer = setInterval(() => { if (!autoPaused) handleMove(1) }, 3200)
}
function pauseAuto()  { autoPaused = true }
function resumeAuto() { autoPaused = false }

// ── Marquee (mobile / tablette) ────────────────────────────────
const marqueePaused = ref(false)
function pauseMarquee()  { marqueePaused.value = true }
function resumeMarquee() { marqueePaused.value = false }

const mid  = Math.ceil(reviews.length / 2)
const row1 = computed(() => [...reviews.slice(0, mid), ...reviews.slice(0, mid)])
const row2 = computed(() => [...reviews.slice(mid),    ...reviews.slice(mid)])

// ── Lifecycle ─────────────────────────────────────────────────
onMounted(() => startAuto())
onUnmounted(() => clearInterval(autoTimer))
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.marquee-track {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: scroll-left var(--duration, 40s) linear infinite;
}

.marquee-track.marquee-reverse {
  animation-name: scroll-right;
}

.marquee-track.paused {
  animation-play-state: paused;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
</style>
