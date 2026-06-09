<template>
  <section class="py-24 bg-brun-50">
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

      <!-- Slider d'avis -->
      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${current * (100 / visibleCount)}%)` }"
        >
          <div
            v-for="(review, i) in reviews"
            :key="i"
            class="flex-shrink-0 px-3"
            :style="{ width: `${100 / visibleCount}%` }"
          >
            <div class="bg-white rounded-2xl shadow-sm border border-brun-100 p-6 h-full flex flex-col">
              <!-- Étoiles -->
              <div class="flex gap-0.5 mb-3">
                <span v-for="s in 5" :key="s" class="text-lg" :class="s <= review.stars ? 'text-yellow-400' : 'text-brun-200'">★</span>
              </div>
              <!-- Texte -->
              <p class="text-brun-600 text-sm leading-relaxed flex-1 italic">"{{ review.text }}"</p>
              <!-- Photo client -->
              <div v-if="review.photo" class="mt-4">
                <img :src="review.photo" :alt="'Photo de ' + review.name" class="w-full h-28 object-cover rounded-xl" />
              </div>
              <!-- Auteur -->
              <div class="flex items-center gap-3 mt-5 pt-4 border-t border-brun-100">
                <div class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                     :style="{ backgroundColor: review.color }">
                  {{ review.name[0] }}
                </div>
                <div>
                  <p class="font-semibold text-brun-900 text-sm">{{ review.name }}</p>
                  <p class="text-xs text-brun-400">{{ review.date }}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5 h-5 ml-auto flex-shrink-0">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation dots + flèches -->
      <div class="flex items-center justify-center gap-4 mt-10">
        <button
          @click="prev"
          class="w-10 h-10 rounded-full bg-white border border-brun-200 flex items-center justify-center hover:bg-dore-500 hover:border-dore-500 hover:text-white transition-colors text-brun-700"
          aria-label="Précédent"
        >
          ‹
        </button>
        <div class="flex gap-2">
          <button
            v-for="(_, i) in dots"
            :key="i"
            @click="goTo(i)"
            class="w-2.5 h-2.5 rounded-full transition-all"
            :class="i === activeDot ? 'bg-dore-500 w-6' : 'bg-brun-300'"
            :aria-label="`Avis ${i + 1}`"
          />
        </div>
        <button
          @click="next"
          class="w-10 h-10 rounded-full bg-white border border-brun-200 flex items-center justify-center hover:bg-dore-500 hover:border-dore-500 hover:text-white transition-colors text-brun-700"
          aria-label="Suivant"
        >
          ›
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const googleRating = 4.7
const googleCount  = 89

const reviews = [
  {
    name: 'Nathalie B.',
    stars: 5,
    date: 'il y a 1 semaine',
    color: '#D4831A',
    photo: '/images/petits-gateaux.jpg',
    text: 'Boulangerie exceptionnelle ! Les viennoiseries sont fondantes, les pains toujours bien cuits. Le personnel est adorable et souriant. On ne va nulle part ailleurs.',
  },
  {
    name: 'Christophe V.',
    stars: 5,
    date: 'il y a 2 semaines',
    color: '#2A5082',
    photo: null,
    text: 'Le meilleur pain de campagne de tout le secteur. J\'apprécie aussi beaucoup la livraison à domicile le matin, très pratique pour commencer la journée avec du pain frais.',
  },
  {
    name: 'Aurélie M.',
    stars: 5,
    date: 'il y a 3 semaines',
    color: '#34A853',
    photo: '/images/piece-montee.webp',
    text: 'Nous avons commandé notre pièce montée de mariage ici. Un travail absolument magnifique, nos invités n\'en revenaient pas. Merci à toute l\'équipe pour ce moment magique !',
  },
  {
    name: 'Denis R.',
    stars: 4,
    date: 'il y a 1 mois',
    color: '#EA4335',
    photo: null,
    text: 'Très bonne boulangerie artisanale. Large choix de pains spéciaux et pâtisseries faits maison. Les sandwichs du midi sont copieux et délicieux. Un peu d\'attente parfois le samedi.',
  },
  {
    name: 'Isabelle C.',
    stars: 5,
    date: 'il y a 1 mois',
    color: '#9C27B0',
    photo: '/images/eclairs.jpg',
    text: 'Les éclairs au chocolat sont à tomber par terre ! Toujours frais, toujours bons. J\'y vais chaque semaine et je ne suis jamais déçue. Une boulangerie comme on en trouve plus beaucoup.',
  },
  {
    name: 'Sylvain F.',
    stars: 5,
    date: 'il y a 2 mois',
    color: '#FF6D00',
    photo: null,
    text: 'Accueil chaleureux, produits de qualité, tarifs raisonnables. La formule midi est vraiment complète et faite maison. On sent que c\'est fait avec passion. Bravo !',
  },
  {
    name: 'Martine G.',
    stars: 5,
    date: 'il y a 2 mois',
    color: '#0097A7',
    photo: '/images/sandwiches.jpg',
    text: 'Que ce soit pour le pain quotidien ou pour les occasions spéciales, le Repère ne déçoit jamais. Les pizzas du vendredi sont un régal. Toute la famille est fan !',
  },
  {
    name: 'Laurent P.',
    stars: 4,
    date: 'il y a 3 mois',
    color: '#388E3C',
    photo: null,
    text: 'Boulangerie de village qui a tout d\'une grande. Bon pain, bonnes pâtisseries, équipe sympa. Le service de livraison dans les communes voisines est vraiment appréciable.',
  },
]

const current      = ref(0)
const visibleCount = ref(3)

function updateVisibleCount() {
  visibleCount.value = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
}

const maxIndex = computed(() => reviews.length - visibleCount.value)
const activeDot = computed(() => current.value)
const dots = computed(() => Array.from({ length: maxIndex.value + 1 }))

function next() {
  current.value = current.value >= maxIndex.value ? 0 : current.value + 1
}
function prev() {
  current.value = current.value <= 0 ? maxIndex.value : current.value - 1
}
function goTo(i) {
  current.value = i
}

let timer = null
function startAutoplay() {
  timer = setInterval(next, 4500)
}
function stopAutoplay() {
  clearInterval(timer)
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
  startAutoplay()
})
onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
  stopAutoplay()
})
</script>
