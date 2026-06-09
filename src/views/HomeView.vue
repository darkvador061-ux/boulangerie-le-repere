<template>
  <!-- ===== HERO ===== -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay loop muted playsinline
      poster="/images/facade.jpg"
    >
      <source src="/videos/bread-oven.mp4" type="video/mp4" />
      <source src="/videos/bakery-hero.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-brun-900/65" />

    <div class="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center text-center">

      <!-- Accroche -->
      <p class="text-rose-300 font-sans text-xs font-medium tracking-[0.35em] uppercase mb-8">
        Boulangerie Artisanale &nbsp;·&nbsp; Isle-en-Dodon
      </p>

      <!-- Ligne décorative -->
      <div class="flex items-center gap-4 mb-8 w-52">
        <span class="flex-1 h-px bg-dore-400/50" />
        <span class="text-rose-400 text-base">✦</span>
        <span class="flex-1 h-px bg-dore-400/50" />
      </div>

      <!-- Titre -->
      <h1 class="font-serif font-bold text-white leading-none mb-1"
          style="font-size: clamp(3.5rem, 10vw, 7rem); letter-spacing: -0.01em;">
        Le
      </h1>
      <h1 class="font-serif font-bold leading-none mb-8"
          style="font-size: clamp(5rem, 15vw, 11rem); letter-spacing: -0.02em; color: #D4831A; text-shadow: 0 4px 40px rgba(212,131,26,0.35);">
        Repère
      </h1>

      <!-- Ligne décorative basse -->
      <div class="flex items-center gap-4 mb-8 w-52">
        <span class="flex-1 h-px bg-dore-400/50" />
        <span class="text-rose-400 text-base">✦</span>
        <span class="flex-1 h-px bg-dore-400/50" />
      </div>

      <p class="text-brun-200 text-lg leading-relaxed mb-10 max-w-lg">
        Pâtisseries, pains et repas rapides façonnés chaque matin avec passion.
        Savourez l'artisanat dans toute sa modernité.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <RouterLink to="/pain-patisseries" class="btn-primary">
          Découvrir nos produits
        </RouterLink>
        <RouterLink to="/contact" class="btn-outline border-white text-white hover:bg-white hover:text-brun-900">
          Nous trouver
        </RouterLink>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs">
      <span class="tracking-widest uppercase">Défiler</span>
      <span class="w-0.5 h-8 bg-white/30 animate-pulse" />
    </div>
  </section>

  <!-- ===== BANDEAU INFOS ===== -->
  <section class="bg-dore-500 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium">
        <span class="flex items-center gap-2">🕐 Lun–Mar / Jeu–Sam : 6h30–19h30</span>
        <span class="flex items-center gap-2">☀️ Dimanche : 6h30–19h30</span>
        <span class="flex items-center gap-2">❌ Fermé le mercredi</span>
        <a href="tel:0561896070" class="flex items-center gap-2 hover:underline">📞 05 61 89 60 70</a>
      </div>
    </div>
  </section>

  <!-- ===== À PROPOS ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-rose-500 font-medium text-sm tracking-widest uppercase mb-3">Notre histoire</p>
          <h2 class="section-title">Tradition &amp; Créativité,<br />au cœur de votre village</h2>
          <p class="text-brun-600 leading-relaxed mb-6">
            Au Repère, nous allions le charme de l'artisanat traditionnel à une approche
            contemporaine. Chaque produit est façonné avec soin, du fournil jusqu'à votre table.
          </p>
          <p class="text-brun-600 leading-relaxed mb-8">
            Pains, pâtisseries, snacking savoureux… et même la livraison à domicile
            dans 7 communes autour de l'Isle-en-Dodon.
          </p>
          <RouterLink to="/contact" class="btn-primary">Nous rendre visite</RouterLink>
        </div>
        <div class="relative">
          <img
            src="/images/facade-nuit.jpg"
            alt="Devanture de la Boulangerie Le Repère de nuit"
            class="rounded-2xl shadow-xl w-full object-cover h-96"
          />
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5 max-w-xs hidden md:block">
            <p class="font-serif text-brun-900 font-semibold text-lg">Livraison à domicile</p>
            <p class="text-brun-500 text-sm mt-1">
              Isle-en-Dodon · Couielles · Riolas · Cazac · Labastide · Fabas · Saint-Frajou
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== OFFRES ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-rose-500 font-medium text-sm tracking-widest uppercase mb-3">Ce que nous proposons</p>
      <h2 class="section-title">Nos Spécialités</h2>
      <p class="section-subtitle">Du pain frais du matin aux formules midi, tout est fait maison.</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in specialites" :key="item.title" class="card p-6 text-left group">
          <div class="w-14 h-14 rounded-2xl bg-brun-50 flex items-center justify-center mb-5 group-hover:bg-dore-500 transition-colors">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>
          <h3 class="font-serif text-lg font-semibold text-brun-900 mb-2">{{ item.title }}</h3>
          <p class="text-brun-500 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALERIE PRODUITS ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-rose-500 font-medium text-sm tracking-widest uppercase mb-3">Coup d'œil</p>
        <h2 class="section-title">Nos créations du moment</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(img, i) in galerie"
          :key="i"
          class="overflow-hidden rounded-2xl"
          :class="i === 0 ? 'row-span-2' : ''"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            :class="i === 0 ? 'h-full min-h-64' : 'h-52'"
          />
        </div>
      </div>
      <div class="text-center mt-10">
        <RouterLink to="/pain-patisseries" class="btn-primary">Voir tous nos produits</RouterLink>
      </div>
    </div>
  </section>


  <!-- ===== LIVRAISON ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop"
            alt="Livraison de pain à domicile"
            class="rounded-2xl shadow-xl w-full h-80 object-cover"
          />
        </div>
        <div>
          <p class="text-rose-500 font-medium text-sm tracking-widest uppercase mb-3">Service exclusif</p>
          <h2 class="section-title">Livraison de pain<br />à domicile</h2>
          <p class="text-brun-600 leading-relaxed mb-6">
            Recevez votre pain frais directement chez vous ! Nous livrons dans un rayon d'1 km
            autour de l'Isle-en-Dodon, dans les communes suivantes :
          </p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="commune in communes"
              :key="commune"
              class="bg-brun-50 text-brun-700 text-sm font-medium px-3 py-1.5 rounded-full border border-brun-200"
            >
              📍 {{ commune }}
            </span>
          </div>
          <a href="tel:0561896070" class="btn-primary">Appeler pour commander</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const specialites = [
  {
    icon: '🥖',
    title: 'Pains Artisanaux',
    desc: 'Baguettes, pains de campagne, aux céréales, complet… cuits frais chaque matin.',
  },
  {
    icon: '🎂',
    title: 'Pâtisseries',
    desc: 'Entremets, pièces montées et gâteaux personnalisables sur commande.',
  },
  {
    icon: '🥗',
    title: 'Snacking & Repas',
    desc: 'Pizzas, sandwiches, salades et formules midi complètes à emporter ou sur place.',
  },
  {
    icon: '🚚',
    title: 'Livraison',
    desc: 'Service de livraison de pain à domicile dans 7 communes autour du village.',
  },
]

const galerie = [
  { src: '/images/petites-patisseries.jpg', alt: 'Plateau de petites pâtisseries' },
  { src: '/images/eclairs-chocolat.jpg',    alt: 'Éclairs au chocolat maison' },
  { src: '/images/snacking-vitrine.jpg',    alt: 'Vitrine snacking de la boulangerie' },
  { src: '/images/sandwiches.jpg',          alt: 'Sandwichs gourmands' },
  { src: '/images/piece-montee.webp',       alt: 'Pièce montée de mariage' },
]

const communes = ['Isle-en-Dodon', 'Couielles', 'Riolas', 'Cazac', 'Labastide', 'Fabas', 'Saint-Frajou']
</script>
