<template>
  <!-- ===== HERO ===== -->
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Image de fond avec parallax léger -->
    <div class="hero-bg absolute inset-0">
      <img src="/images/facade.jpg" alt="" fetchpriority="high" decoding="async"
        class="w-full h-full object-cover object-center" aria-hidden="true" />
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
          <span class="sr-only"> – Boulangerie Artisanale à l'Isle-en-Dodon</span>
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
        <span class="flex items-center gap-2 text-white/80 text-sm bg-white/[0.07] px-5 py-2.5 rounded-full border border-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-dore-400/50 hover:text-white">
          ⏰ Ouvert dès 6h30
        </span>
        <span class="flex items-center gap-2 text-white/80 text-sm bg-white/[0.07] px-5 py-2.5 rounded-full border border-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-dore-400/50 hover:text-white">
          🚚 Livraison à domicile
        </span>
        <span class="flex items-center gap-2 text-white/80 text-sm bg-white/[0.07] px-5 py-2.5 rounded-full border border-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-dore-400/50 hover:text-white">
          🎂 Commandes sur mesure
        </span>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs">
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

  <!-- Vague : bandeau doré → À Propos -->
  <div class="bg-dore-500 overflow-hidden leading-[0]">
    <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 md:h-16 block">
      <path d="M0,48 C400,8 800,64 1200,28 C1320,16 1400,40 1440,48 L1440,64 L0,64 Z" style="fill: #F3F4F6;" />
    </svg>
  </div>

  <!-- ===== À PROPOS ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <div class="flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
            <span class="text-dore-400 text-sm">✦</span>
            <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Notre histoire</p>
          </div>
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
        <div class="relative reveal-right">
          <img
            src="/images/facade-nuit.jpg"
            alt="Devanture de la Boulangerie Le Repère de nuit"
            loading="lazy"
            class="rounded-2xl shadow-xl w-full object-cover h-96"
          />
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_20px_45px_-12px_rgba(24,27,40,0.28)] border border-brun-100 p-6 max-w-xs hidden md:block">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-11 h-11 rounded-xl bg-gradient-to-br from-dore-400 to-dore-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-dore-500/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
                </svg>
              </span>
              <p class="font-serif text-brun-900 font-bold text-lg leading-tight">Livraison<br />à domicile</p>
            </div>
            <p class="text-brun-500 text-sm leading-relaxed">
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
      <div class="reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Ce que nous proposons</p>
          <span class="text-dore-400 text-sm">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Nos Spécialités</h2>
        <p class="section-subtitle">Du pain frais du matin aux formules midi, tout est fait maison.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, i) in specialites"
          :key="item.title"
          class="group relative bg-white rounded-3xl p-7 text-left overflow-hidden reveal-scale border border-brun-100/70 transition-all duration-500 hover:-translate-y-2 hover:border-dore-200 hover:shadow-[0_28px_56px_-16px_rgba(212,131,26,0.28)]"
          :data-delay="i * 0.1"
        >
          <!-- Numéro en filigrane -->
          <span class="absolute -top-4 right-1 font-serif text-8xl font-bold text-brun-50 select-none pointer-events-none transition-colors duration-500 group-hover:text-dore-100">
            0{{ i + 1 }}
          </span>
          <!-- Icône -->
          <div class="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-dore-50 to-brun-50 transition-all duration-500 group-hover:from-dore-500 group-hover:to-dore-600 group-hover:shadow-lg group-hover:shadow-dore-500/30 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-dore-500 transition-all duration-500 group-hover:text-white group-hover:scale-110" v-html="item.svg" />
          </div>
          <h3 class="relative font-serif text-xl font-bold text-brun-900 mb-2.5">{{ item.title }}</h3>
          <p class="relative text-brun-500 text-sm leading-relaxed mb-5">{{ item.desc }}</p>
          <!-- Ligne d'accent animée -->
          <span class="block h-[3px] w-9 bg-dore-400 rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-dore-500" />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALERIE PRODUITS ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Coup d'œil</p>
          <span class="text-dore-400 text-sm">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Nos créations du moment</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(img, i) in galerie"
          :key="i"
          class="group relative overflow-hidden rounded-2xl reveal-scale"
          :class="i === 0 ? 'row-span-2' : ''"
          :data-delay="i * 0.1"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
            class="w-full h-full object-cover transition-transform ease-out duration-[1200ms] group-hover:scale-110"
            :class="i === 0 ? 'h-full min-h-64' : 'h-52'"
          />
          <!-- Voile dégradé -->
          <div class="absolute inset-0 bg-gradient-to-t from-brun-900/85 via-brun-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <!-- Légende -->
          <div class="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="flex items-center gap-2.5 text-white font-medium text-sm leading-snug">
              <span class="w-1.5 h-1.5 rounded-full bg-dore-400 shrink-0" />
              {{ img.alt }}
            </span>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <RouterLink to="/pain-patisseries" class="btn-primary">Voir tous nos produits</RouterLink>
      </div>
    </div>
  </section>

  <!-- Vague : galerie brun-50 → livraison blanc -->
  <div class="bg-brun-50 overflow-hidden leading-[0]">
    <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 md:h-16 block">
      <path d="M0,24 C400,64 800,0 1200,44 C1320,56 1400,28 1440,20 L1440,64 L0,64 Z" style="fill: #FFFFFF;" />
    </svg>
  </div>

  <!-- ===== LIVRAISON ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <DeliveryMap />
        </div>
        <div class="reveal-right">
          <div class="flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
            <span class="text-dore-400 text-sm">✦</span>
            <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Service exclusif</p>
          </div>
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
import { useReveal } from '../composables/useReveal.js'

useReveal()

const specialites = [
  {
    svg: '<path d="M12 22V8"/><path d="M12 8c0-2.3 1.9-4.2 4.4-4.2 0 2.3-2 4.2-4.4 4.2Z"/><path d="M12 8c0-2.3-1.9-4.2-4.4-4.2 0 2.3 2 4.2 4.4 4.2Z"/><path d="M12 13c0-2.3 1.9-4.2 4.4-4.2 0 2.3-2 4.2-4.4 4.2Z"/><path d="M12 13c0-2.3-1.9-4.2-4.4-4.2 0 2.3 2 4.2 4.4 4.2Z"/><path d="M12 18c0-2.3 1.9-4.2 4.4-4.2 0 2.3-2 4.2-4.4 4.2Z"/><path d="M12 18c0-2.3-1.9-4.2-4.4-4.2 0 2.3 2 4.2 4.4 4.2Z"/>',
    title: 'Pains Artisanaux',
    desc: 'Baguettes, pains de campagne, aux céréales, complet… cuits frais chaque matin.',
  },
  {
    svg: '<path d="M5 11a7 7 0 0 1 14 0Z"/><circle cx="12" cy="4.4" r="1.3"/><path d="M6.5 11h11l-1 7.6a1.6 1.6 0 0 1-1.6 1.4H9.1a1.6 1.6 0 0 1-1.6-1.4Z"/><path d="M9.6 11.4 9 19"/><path d="M12 11.5v7.8"/><path d="M14.4 11.4 15 19"/>',
    title: 'Pâtisseries',
    desc: 'Entremets, pièces montées et gâteaux personnalisables sur commande.',
  },
  {
    svg: '<path d="M7 2v4a2 2 0 0 0 4 0V2"/><path d="M9 8v14"/><path d="M9 2v4"/><path d="M16 2c2.2 0 3.2 3 3.2 6 0 2-1 3-3.2 3"/><path d="M16 2v20"/>',
    title: 'Snacking & Repas',
    desc: 'Pizzas, sandwiches, salades et formules midi complètes à emporter ou sur place.',
  },
  {
    svg: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    title: 'Livraison',
    desc: 'Service de livraison de pain à domicile dans 7 communes autour du village.',
  },
]

const base = import.meta.env.BASE_URL
const galerie = [
  { src: base + 'images/petites-patisseries.jpg', alt: 'Plateau de petites pâtisseries' },
  { src: base + 'images/eclairs-chocolat.jpg',    alt: 'Éclairs au chocolat maison' },
  { src: base + 'images/snacking-vitrine.jpg',    alt: 'Vitrine snacking de la boulangerie' },
  { src: base + 'images/sandwiches.jpg',          alt: 'Sandwichs gourmands' },
  { src: base + 'images/piece-montee.webp',       alt: 'Pièce montée de mariage' },
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
