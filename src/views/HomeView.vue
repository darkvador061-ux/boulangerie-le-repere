<template>
  <!-- ===== HERO ===== -->
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Image de fond avec parallax léger -->
    <div class="hero-bg absolute inset-0"
      style="background-image: url('/images/facade.jpg'); background-size: cover; background-position: center;">
    </div>

    <!-- Superposition dégradée chaude -->
    <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(42,22,8,0.82) 0%, rgba(90,40,5,0.70) 50%, rgba(42,22,8,0.88) 100%);" />

    <!-- Halo doré décoratif -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full hero-glow" />

    <!-- Grains de blé flottants -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <span v-for="n in 8" :key="n" class="grain" :style="grainStyle(n)">🌾</span>
    </div>

    <!-- Contenu -->
    <div class="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col items-center text-center hero-content">

      <!-- Badge artisan -->
      <div class="hero-badge flex items-center gap-3 mb-10 px-5 py-2 rounded-full border border-dore-400/40 bg-white/5 backdrop-blur-sm">
        <span class="text-dore-400 text-sm">✦</span>
        <p class="text-dore-300 font-sans text-xs font-semibold tracking-[0.3em] uppercase">
          Boulangerie Artisanale &nbsp;·&nbsp; Isle-en-Dodon
        </p>
        <span class="text-dore-400 text-sm">✦</span>
      </div>

      <!-- Titre principal -->
      <div class="hero-title mb-6">
        <p class="font-serif font-light text-white/80 leading-none mb-0"
           style="font-size: clamp(2rem, 6vw, 4.5rem); letter-spacing: 0.12em;">
          LA BOULANGERIE
        </p>
        <h1 class="font-serif font-bold leading-none"
            style="font-size: clamp(6rem, 18vw, 13rem); letter-spacing: -0.02em; color: #D4831A; text-shadow: 0 0 80px rgba(212,131,26,0.5), 0 4px 40px rgba(212,131,26,0.3);">
          Le Repère
        </h1>
        <p class="font-serif italic text-white/60 mt-1"
           style="font-size: clamp(1rem, 2.5vw, 1.5rem); letter-spacing: 0.05em;">
          — Façonné avec passion, chaque matin —
        </p>
      </div>

      <!-- Séparateur doré -->
      <div class="flex items-center gap-5 mb-8 w-64 hero-divider">
        <span class="flex-1 h-px bg-gradient-to-r from-transparent to-dore-400/60" />
        <span class="text-dore-400 text-lg">✦</span>
        <span class="flex-1 h-px bg-gradient-to-l from-transparent to-dore-400/60" />
      </div>

      <!-- Accroche -->
      <p class="hero-desc text-white/75 text-lg leading-relaxed mb-12 max-w-xl font-light">
        Pains croustillants, pâtisseries généreuses et snacking savoureux —
        <strong class="text-dore-300 font-medium">tout fait maison</strong>, servi chaud dès 6h30.
      </p>

      <!-- CTA -->
      <div class="hero-cta flex flex-wrap gap-5 justify-center mb-12">
        <RouterLink to="/pain-patisseries"
          class="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
          style="background: linear-gradient(135deg, #D4831A, #E8A040); box-shadow: 0 8px 32px rgba(212,131,26,0.45);">
          <span class="relative z-10 flex items-center gap-2">
            🥖 Découvrir nos produits
          </span>
          <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </RouterLink>
        <RouterLink to="/contact"
          class="group px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
          📍 Nous trouver
        </RouterLink>
      </div>

      <!-- Badges de confiance -->
      <div class="flex flex-wrap justify-center gap-4 hero-trust">
        <span class="flex items-center gap-2 text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
          ⏰ Ouvert dès 6h30
        </span>
        <span class="flex items-center gap-2 text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
          🚚 Livraison à domicile
        </span>
        <span class="flex items-center gap-2 text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
          🎂 Commandes sur mesure
        </span>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
      <span class="tracking-widest uppercase text-xs">Défiler</span>
      <span class="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
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
          <DeliveryMap />
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
          <RouterLink to="/contact" class="btn-primary">Appeler pour commander</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { COMMUNES } from '../data/config.js'
import DeliveryMap from '../components/DeliveryMap.vue'

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

const communes = COMMUNES

function grainStyle(n) {
  const positions = [
    { left: '8%',  top: '20%', delay: '0s',    duration: '6s',  size: '1.4rem', opacity: 0.12 },
    { left: '88%', top: '15%', delay: '1.2s',  duration: '8s',  size: '1rem',   opacity: 0.10 },
    { left: '75%', top: '70%', delay: '2.4s',  duration: '7s',  size: '1.6rem', opacity: 0.08 },
    { left: '15%', top: '75%', delay: '0.8s',  duration: '9s',  size: '1.2rem', opacity: 0.11 },
    { left: '50%', top: '8%',  delay: '3s',    duration: '6.5s',size: '0.9rem', opacity: 0.09 },
    { left: '92%', top: '50%', delay: '1.8s',  duration: '7.5s',size: '1.3rem', opacity: 0.10 },
    { left: '5%',  top: '50%', delay: '4s',    duration: '8.5s',size: '1.1rem', opacity: 0.08 },
    { left: '60%', top: '88%', delay: '2s',    duration: '6s',  size: '1.5rem', opacity: 0.09 },
  ]
  const p = positions[(n - 1) % positions.length]
  return {
    left: p.left, top: p.top,
    fontSize: p.size, opacity: p.opacity,
    animationDelay: p.delay, animationDuration: p.duration,
  }
}
</script>

<style scoped>
.hero-bg {
  transform-origin: center;
  animation: slowZoom 20s ease-in-out infinite alternate;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
}

.hero-glow {
  background: radial-gradient(circle, rgba(212,131,26,0.18) 0%, transparent 70%);
  animation: pulse-glow 4s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  from { opacity: 0.6; transform: translate(-50%, -50%) scale(0.95); }
  to   { opacity: 1;   transform: translate(-50%, -50%) scale(1.05); }
}

.grain {
  position: absolute;
  animation: float linear infinite;
  user-select: none;
}

@keyframes float {
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-18px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

.hero-content > * {
  animation: fadeUp 0.8s ease both;
}
.hero-badge   { animation-delay: 0.1s; }
.hero-title   { animation-delay: 0.25s; }
.hero-divider { animation-delay: 0.45s; }
.hero-desc    { animation-delay: 0.55s; }
.hero-cta     { animation-delay: 0.70s; }
.hero-trust   { animation-delay: 0.85s; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
