<template>
  <!-- Hero page -->
  <section class="relative pt-32 pb-20 bg-brun-900 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-35"
      :style="{ backgroundImage: `url(${base}images/plateau-traiteur-assortiment.jpg)` }"
    />
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <p class="text-rose-400 font-medium text-xs tracking-[0.25em] uppercase">Sur mesure · À emporter</p>
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
      </div>
      <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Snacking &amp; Traiteur</h1>
      <p class="text-brun-200 text-lg max-w-xl mx-auto">
        Plateaux salés artisanaux pour vos réceptions, anniversaires, mariages et événements d'entreprise.
      </p>
    </div>
  </section>

  <!-- ===== CARTE SALÉE TRAITEUR ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Carte Traiteur Salée</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Nos créations salées<br />pour tous vos événements</h2>
        <p class="section-subtitle">Tout est préparé artisanalement sur commande.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(cat, i) in categoriesSalees" :key="cat.titre" class="card group p-6 reveal-scale" :data-delay="(i % 3) * 0.1">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-dore-50 to-brun-50 text-dore-500 transition-all duration-500 group-hover:from-dore-500 group-hover:to-dore-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-dore-500/30 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" v-html="cat.svg" />
          </div>
          <h3 class="font-serif text-xl font-semibold text-brun-900 mb-2">{{ cat.titre }}</h3>
          <p class="text-brun-500 text-sm leading-relaxed mb-4">{{ cat.desc }}</p>
          <ul class="space-y-1">
            <li v-for="item in cat.items" :key="item" class="flex items-center gap-2 text-brun-600 text-sm">
              <span class="w-1.5 h-1.5 bg-dore-500 rounded-full shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALERIE PLATEAUX ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Nos réalisations</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Des plateaux qui<br />font leur effet</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div v-for="(img, i) in galeriePlateau" :key="i" class="group relative overflow-hidden rounded-2xl reveal-scale" :data-delay="i * 0.1">
          <img
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
            width="800"
            height="600"
            class="w-full h-64 object-cover transition-transform ease-out duration-[1200ms] group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brun-900/85 via-brun-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="flex items-center gap-2 text-white font-medium text-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-dore-400 shrink-0" />
              {{ img.alt }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== RÉSERVATION ===== -->
  <section class="py-24 bg-brun-900 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <div class="flex items-center justify-center gap-3 mb-6">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/60" />
        <span class="text-dore-400 text-base" aria-hidden="true">✦</span>
        <p class="text-rose-300 font-medium text-xs tracking-[0.3em] uppercase">Commande sur mesure</p>
        <span class="text-dore-400 text-base" aria-hidden="true">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/60" />
      </div>
      <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Votre événement,<br />nos créations</h2>
      <p class="text-brun-300 leading-relaxed mb-10 text-lg">
        Réceptions, anniversaires, mariages, réunions d'entreprise… Le Repère vous accompagne
        avec des créations salées artisanales pensées pour vous.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:0561896070" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-brun-900 bg-dore-400 hover:bg-dore-500 transition-colors duration-300 shadow-lg shadow-dore-500/30">
          📞 05 61 89 60 70
        </a>
        <RouterLink to="/contact" class="btn-outline border-white text-white hover:bg-white hover:text-brun-900 px-8 py-4 text-center">
          Nous contacter
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'

useReveal()

const base = import.meta.env.BASE_URL

const categoriesSalees = [
  {
    svg: '<path d="M3 7c5-3 13-3 18 0l-9 14Z"/><circle cx="9" cy="8.6" r="1"/><circle cx="13.5" cy="9" r="1"/><circle cx="11" cy="12.5" r="1"/>',
    titre: 'Plaques',
    desc: 'Grandes plaques à partager, idéales pour les buffets.',
    items: ['Plaque pizza au choix', 'Plaque quiche au choix'],
  },
  {
    svg: '<rect x="3" y="7" width="18" height="3.2" rx="1.6"/><rect x="3" y="13.8" width="18" height="3.2" rx="1.6"/><path d="M5 12h14"/>',
    titre: 'Navettes',
    desc: 'Mini pains garnis, élégants et savoureux.',
    items: ['Saumon fumé', 'Jambon de pays'],
  },
  {
    svg: '<path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z"/><path d="M16 9h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2"/><path d="M11.5 3v2"/>',
    titre: 'Mini Burgers',
    desc: 'Petits burgers maison pour épater vos invités.',
    items: ['Steak haché', 'Foie gras & figue'],
  },
  {
    svg: '<path d="M12 22V8"/><path d="M12 8c0-2.3 1.9-4.2 4.4-4.2 0 2.3-2 4.2-4.4 4.2Z"/><path d="M12 8c0-2.3-1.9-4.2-4.4-4.2 0 2.3 2 4.2 4.4 4.2Z"/>',
    titre: 'Feuilletés',
    desc: 'Feuilletés croustillants et dorés, chauds à souhait.',
    items: ['Feuilleté saucisse', 'Feuilleté fromage'],
  },
  {
    svg: '<path d="M4 17.5h16"/><path d="M5 17.5a7 7 0 0 1 14 0Z"/><path d="M12 7.2V5.4"/><circle cx="12" cy="4.4" r="1"/>',
    titre: 'Pain Surprise',
    desc: 'Un pain garni de canapés à l\'intérieur — effet garanti !',
    items: ['Format petit', 'Format moyen', 'Format grand'],
  },
  {
    svg: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>',
    titre: 'Canapés & Choux Salés',
    desc: 'Bouchées raffinées pour vos cocktails et réceptions.',
    items: ['Chorizo & beurre', 'Magret, persil & beurre', 'Saumon & Boursin', 'Thon, mayo & olive', 'Jambon de pays & beurre', 'Choux saumon-fromage'],
  },
]

const galeriePlateau = [
  { src: base + 'images/plateau-choux-sales.jpg',       alt: 'Plateau de choux salés (saumon, jambon, saucisson)' },
  { src: base + 'images/buffet-traiteur-complet.jpg',   alt: 'Buffet traiteur complet en extérieur' },
  { src: base + 'images/buffet-sandwichs-quiche.jpg',   alt: 'Buffet sandwichs et quiches en extérieur' },
  { src: base + 'images/buffet-pizza-sliders.jpg',      alt: 'Buffet pizzas et sliders en extérieur' },
]
</script>
