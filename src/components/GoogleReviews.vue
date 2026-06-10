<template>
  <section class="py-24 bg-brun-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- En-tête avec note Google -->
      <div class="text-center mb-14">
        <p class="text-rose-500 text-sm font-medium tracking-widest uppercase mb-3">Avis clients</p>
        <h2 class="section-title">Ce que nos clients disent de nous</h2>

        <!-- Badge note Google -->
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

    <!-- Rangée 1 : défile vers la gauche -->
    <div class="marquee-wrapper" @mouseenter="pause" @mouseleave="resume">
      <div class="marquee-track" :class="{ paused: isPaused }" style="--duration: 40s;">
        <ReviewCard v-for="(r, i) in row1" :key="'r1-' + i" :review="r" />
      </div>
    </div>

    <!-- Rangée 2 : défile vers la droite -->
    <div class="marquee-wrapper mt-4" @mouseenter="pause" @mouseleave="resume">
      <div class="marquee-track marquee-reverse" :class="{ paused: isPaused }" style="--duration: 50s;">
        <ReviewCard v-for="(r, i) in row2" :key="'r2-' + i" :review="r" />
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ReviewCard from './ReviewCard.vue'

const googleRating = 4.7
const googleCount  = 89

const isPaused = ref(false)
function pause()  { isPaused.value = true }
function resume() { isPaused.value = false }

const reviews = [
  {
    name: 'Nathalie B.',
    stars: 5,
    date: 'il y a 1 semaine',
    color: '#D4831A',
    text: 'Boulangerie exceptionnelle ! Les viennoiseries sont fondantes, les pains toujours bien cuits. Le personnel est adorable et souriant.',
  },
  {
    name: 'Christophe V.',
    stars: 5,
    date: 'il y a 2 semaines',
    color: '#2A5082',
    text: 'Le meilleur pain de campagne de tout le secteur. La livraison à domicile le matin est très pratique pour commencer la journée.',
  },
  {
    name: 'Aurélie M.',
    stars: 5,
    date: 'il y a 3 semaines',
    color: '#34A853',
    text: 'Nous avons commandé notre pièce montée de mariage ici. Un travail absolument magnifique, nos invités n\'en revenaient pas !',
  },
  {
    name: 'Denis R.',
    stars: 4,
    date: 'il y a 1 mois',
    color: '#EA4335',
    text: 'Très bonne boulangerie artisanale. Large choix de pains spéciaux et pâtisseries faits maison. Les sandwichs du midi sont copieux.',
  },
  {
    name: 'Isabelle C.',
    stars: 5,
    date: 'il y a 1 mois',
    color: '#9C27B0',
    text: 'Les éclairs au chocolat sont à tomber par terre ! Toujours frais, toujours bons. J\'y vais chaque semaine sans jamais être déçue.',
  },
  {
    name: 'Sylvain F.',
    stars: 5,
    date: 'il y a 2 mois',
    color: '#FF6D00',
    text: 'Accueil chaleureux, produits de qualité, tarifs raisonnables. La formule midi est vraiment complète et faite maison.',
  },
  {
    name: 'Martine G.',
    stars: 5,
    date: 'il y a 2 mois',
    color: '#0097A7',
    text: 'Que ce soit pour le pain quotidien ou les occasions spéciales, le Repère ne déçoit jamais. Les pizzas du vendredi sont un régal !',
  },
  {
    name: 'Laurent P.',
    stars: 4,
    date: 'il y a 3 mois',
    color: '#388E3C',
    text: 'Boulangerie de village qui a tout d\'une grande. Bon pain, bonnes pâtisseries, équipe sympa. Le service de livraison est appréciable.',
  },
]

// Répartir en 2 groupes et doubler pour l'infini
const mid  = Math.ceil(reviews.length / 2)
const row1 = computed(() => [...reviews.slice(0, mid), ...reviews.slice(0, mid)])
const row2 = computed(() => [...reviews.slice(mid),    ...reviews.slice(mid)])
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
