<template>
  <!-- Hero page -->
  <section class="relative pt-32 pb-20 bg-brun-900 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('/images/snacking-vitrine.jpg')"
    />
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
        <span class="text-dore-400 text-sm">✦</span>
        <p class="text-rose-400 font-medium text-xs tracking-[0.25em] uppercase">Sur place ou à emporter</p>
        <span class="text-dore-400 text-sm">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
      </div>
      <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Snacking &amp; Traiteur</h1>
      <p class="text-brun-200 text-lg max-w-xl mx-auto">
        Bien plus qu'une boulangerie : formules midi, pizzas artisanales, sandwichs généreux et salades fraîches.
      </p>
    </div>
  </section>

  <!-- ===== FORMULES ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Repas du midi</p>
          <span class="text-dore-400 text-sm">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Repas et formules<br />pour toutes vos occasions</h2>
        <p class="section-subtitle">Déjeuner savoureux et équilibré, sur place ou à emporter.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(formule, i) in formules" :key="formule.titre" class="card group p-6 reveal-scale" :data-delay="(i % 3) * 0.1">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-dore-50 to-brun-50 text-dore-500 transition-all duration-500 group-hover:from-dore-500 group-hover:to-dore-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-dore-500/30 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" v-html="formule.svg" />
          </div>
          <h3 class="font-serif text-xl font-semibold text-brun-900 mb-3">{{ formule.titre }}</h3>
          <p class="text-brun-500 text-sm leading-relaxed mb-4">{{ formule.desc }}</p>
          <ul class="space-y-1">
            <li v-for="item in formule.items" :key="item" class="flex items-center gap-2 text-brun-600 text-sm">
              <span class="w-1.5 h-1.5 bg-dore-500 rounded-full shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PIZZAS ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <div class="flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
            <span class="text-dore-400 text-sm">✦</span>
            <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Nos spécialités</p>
          </div>
          <h2 class="section-title">Pizzas artisanales</h2>
          <p class="text-brun-600 leading-relaxed mb-6">
            Nos pizzas sont préparées avec une pâte maison et des ingrédients soigneusement sélectionnés.
            Un délice à déguster sur place ou à emporter !
          </p>
          <RouterLink to="/contact" class="btn-primary">Réserver votre repas</RouterLink>
        </div>
        <div class="overflow-hidden rounded-2xl shadow-xl reveal-right">
          <img
            src="/images/pizza-artisanale.jpg"
            alt="Pizza artisanale de la boulangerie Le Repère"
            class="w-full h-80 object-cover transition-transform ease-out duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALERIE SNACKING ===== -->
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
        <h2 class="section-title">Quelques snackings<br />pour éveiller vos envies</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, i) in galerieSnacking" :key="i" class="group relative overflow-hidden rounded-2xl reveal-scale" :data-delay="i * 0.08">
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-48 object-cover transition-transform ease-out duration-[1200ms] group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brun-900/85 via-brun-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="flex items-center gap-2 text-white font-medium text-sm leading-snug">
              <span class="w-1.5 h-1.5 rounded-full bg-dore-400 shrink-0" />
              {{ img.alt }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TÉMOIGNAGE ===== -->
  <section class="py-24 bg-brun-900 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <p class="text-dore-400 text-4xl mb-6">"</p>
      <blockquote class="font-serif text-2xl md:text-3xl italic leading-relaxed text-brun-100 mb-8">
        Des repas savoureux, rapides et faits maison. La variété des pâtisseries
        et la qualité des ingrédients sont un véritable régal.
      </blockquote>
      <div class="flex items-center justify-center gap-3">
        <div class="w-10 h-10 rounded-full bg-dore-500 flex items-center justify-center font-bold text-white">L</div>
        <div class="text-left">
          <p class="font-semibold">Laure Castex</p>
          <div class="text-dore-400 text-sm">★★★★★ Client fidèle</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== RÉSERVATION ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
        <span class="text-dore-400 text-sm">✦</span>
        <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Facile &amp; rapide</p>
        <span class="text-dore-400 text-sm">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
      </div>
      <h2 class="section-title">Réservez votre repas</h2>
      <p class="text-brun-600 leading-relaxed mb-8">
        Appelez-nous pour réserver votre commande ou votre table. Nous serons ravis de vous accueillir !
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:0561896070" class="btn-primary text-lg px-8 py-4">📞 05 61 89 60 70</a>
        <RouterLink to="/contact" class="btn-outline text-lg px-8 py-4">Voir le plan d'accès</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'

useReveal()

const formules = [
  {
    svg: '<rect x="3" y="7" width="18" height="3.2" rx="1.6"/><rect x="3" y="13.8" width="18" height="3.2" rx="1.6"/><path d="M5 12h14"/>',
    titre: 'Formule Sandwich',
    desc: 'Sandwich garni + boisson + dessert pour un déjeuner complet.',
    items: ['Sandwich au choix', 'Boisson (chaude ou froide)', 'Pâtisserie du jour'],
  },
  {
    svg: '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M12 11c-1.2-2-3-3-4.5-3"/><path d="M12 11c1-2.6 3-3.6 4.8-3.6"/><path d="M12 11V6.5"/>',
    titre: 'Formule Salade',
    desc: 'Salade fraîche préparée le matin + accompagnement.',
    items: ['Salade composée', 'Pain maison', 'Boisson incluse'],
  },
  {
    svg: '<path d="M3 7c5-3 13-3 18 0l-9 14Z"/><circle cx="9" cy="8.6" r="1"/><circle cx="13.5" cy="9" r="1"/><circle cx="11" cy="12.5" r="1"/>',
    titre: 'Formule Pizza',
    desc: 'Part de pizza artisanale + salade + boisson.',
    items: ['Pizza au choix', 'Salade verte', 'Boisson fraîche ou chaude'],
  },
  {
    svg: '<path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z"/><path d="M16 9h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2"/><path d="M11.5 3v2"/>',
    titre: 'Pause Gourmande',
    desc: 'Viennoiserie + boisson chaude pour commencer la journée.',
    items: ['Croissant ou pain au chocolat', 'Café ou thé', 'Jus de fruits'],
  },
  {
    svg: '<path d="M4 17.5h16"/><path d="M5 17.5a7 7 0 0 1 14 0Z"/><path d="M12 7.2V5.4"/><circle cx="12" cy="4.4" r="1"/>',
    titre: 'Formule Traiteur',
    desc: 'Plateaux repas et buffets pour vos événements d\'entreprise ou privés.',
    items: ['Sandwichs variés', 'Mini-viennoiseries', 'Desserts individuels'],
  },
  {
    svg: '<path d="M3 18h18"/><path d="M5.5 18a6.5 6.5 0 0 1 13 0"/><path d="M12 5.5V3.5"/><path d="M5 8 3.6 6.6"/><path d="M19 8l1.4-1.4"/><path d="M2 13.5h2"/><path d="M20 13.5h2"/>',
    titre: 'Brunch du Dimanche',
    desc: 'Un brunch gourmand pour bien démarrer le week-end.',
    items: ['Viennoiseries assorties', 'Charcuterie & fromages', 'Pains spéciaux', 'Boissons'],
  },
]

const base = import.meta.env.BASE_URL
const galerieSnacking = [
  { src: base + 'images/sandwiches.jpg',          alt: 'Sandwichs gourmands du Repère' },
  { src: base + 'images/snacking-vitrine.jpg',    alt: 'Vitrine snacking de la boulangerie' },
  { src: base + 'images/petites-patisseries.jpg', alt: 'Pâtisseries maison du Repère' },
  { src: base + 'images/photo-interieur.avif',    alt: 'Intérieur de la boulangerie Le Repère' },
]
</script>
