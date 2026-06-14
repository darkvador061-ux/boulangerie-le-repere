<template>
  <!-- Hero page -->
  <section class="relative pt-32 pb-20 bg-brun-900 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      :style="{ backgroundImage: `url(${base}images/mignardises-vitrine.jpg)` }"
    />
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <p class="text-rose-400 font-medium text-xs tracking-[0.25em] uppercase">Notre gamme</p>
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
      </div>
      <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Pain &amp; Pâtisseries</h1>
      <p class="text-brun-200 text-lg max-w-xl mx-auto">
        Du pain cuit au four chaque matin aux entremets sur-mesure, découvrez toute notre sélection artisanale.
      </p>
    </div>
  </section>

  <!-- ===== PÂTISSERIES ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-700 font-medium text-xs tracking-[0.25em] uppercase">Fait maison</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Nos Pâtisseries Artisanales</h2>
        <p class="section-subtitle">Entremets, gâteaux de vitrine et pièces montées sur commande.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(gateau, i) in gateaux" :key="gateau.nom" class="card group reveal-scale" :data-delay="(i % 3) * 0.08">
          <div class="overflow-hidden h-52">
            <img
              :src="gateau.img"
              :alt="`${gateau.nom} – Boulangerie artisanale Le Repère à l'Isle-en-Dodon`"
              class="w-full h-full object-cover transition-transform ease-out duration-700 group-hover:scale-110"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div class="p-5">
            <h3 class="font-serif text-lg font-semibold text-brun-900 mb-2">{{ gateau.nom }}</h3>
            <p class="text-brun-500 text-sm leading-relaxed">{{ gateau.desc }}</p>
            <span class="block h-[3px] w-8 bg-dore-400 rounded-full mt-4 transition-all duration-500 group-hover:w-14 group-hover:bg-dore-500" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== RÉALISATIONS SUR MESURE ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-700 font-medium text-xs tracking-[0.25em] uppercase">Créations uniques</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Nos Réalisations<br />sur Mesure</h2>
        <p class="section-subtitle">Pièces montées, number cakes, gâteaux personnalisés pour tous vos événements.</p>
      </div>

      <!-- Types de créations -->
      <div class="grid sm:grid-cols-3 gap-6 mb-14">
        <div v-for="type in typesSurMesure" :key="type.titre" class="text-center p-6 rounded-2xl border border-brun-100 bg-brun-50 reveal-scale">
          <div class="text-3xl mb-3">{{ type.emoji }}</div>
          <h3 class="font-serif text-lg font-semibold text-brun-900 mb-2">{{ type.titre }}</h3>
          <p class="text-brun-500 text-sm leading-relaxed">{{ type.desc }}</p>
        </div>
      </div>

      <!-- Galerie réalisations -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(img, i) in realisations"
          :key="i"
          class="group relative overflow-hidden rounded-2xl reveal-scale"
          :class="i === 0 || i === 5 ? 'row-span-2' : ''"
          :data-delay="i * 0.07"
        >
          <img
            :src="img.src"
            :alt="img.alt + ` – Boulangerie artisanale Le Repère à l'Isle-en-Dodon`"
            loading="lazy"
            width="800"
            height="600"
            class="w-full object-cover transition-transform ease-out duration-[1200ms] group-hover:scale-110"
            :class="i === 0 || i === 5 ? 'h-full min-h-[280px]' : 'h-44'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brun-900/85 via-brun-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span class="flex items-center gap-2 text-white font-medium text-xs leading-snug">
              <span class="w-1.5 h-1.5 rounded-full bg-dore-400 shrink-0" />
              {{ img.alt }}
            </span>
          </div>
        </div>
      </div>

      <!-- CTA commande -->
      <div class="mt-14 rounded-3xl bg-brun-900 text-white overflow-hidden reveal">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-72 lg:w-80 flex-shrink-0">
            <img
              :src="base + 'images/piece-montee-mariage-moderne.jpg'"
              alt="Pièce montée de mariage – Boulangerie artisanale Le Repère à l'Isle-en-Dodon"
              class="w-full h-56 md:h-full object-cover"
              loading="lazy"
              width="800"
              height="1067"
            />
          </div>
          <div class="p-8 md:p-10 flex flex-col justify-center gap-6 flex-1">
            <div>
              <p class="text-dore-400 text-xs font-medium tracking-widest uppercase mb-3">Mariages · Baptêmes · Anniversaires</p>
              <h3 class="font-serif text-2xl font-semibold mb-3">Pièces montées &amp; commandes sur-mesure</h3>
              <p class="text-brun-300 leading-relaxed">
                Choux à la crème, nougatine artisanale, décoration personnalisée selon votre thème et votre budget.
                Contactez-nous pour un devis personnalisé.
              </p>
            </div>
            <RouterLink to="/contact" class="btn-primary self-start whitespace-nowrap">
              📞 Demander un devis
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PAINS ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <div class="flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
            <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
            <p class="text-rose-700 font-medium text-xs tracking-[0.25em] uppercase">Cuit chaque matin</p>
          </div>
          <h2 class="section-title">Une grande variété<br />de pains</h2>
          <p class="text-brun-600 leading-relaxed mb-8">
            Du classique au spécial, nos pains sont pétris et cuits chaque jour dans notre fournil.
            Trouvez votre pain préféré parmi notre sélection régulièrement renouvelée.
          </p>
          <ul class="space-y-3">
            <li v-for="pain in pains" :key="pain" class="flex items-center gap-3 text-brun-700">
              <span class="w-2 h-2 bg-dore-500 rounded-full shrink-0" />
              {{ pain }}
            </li>
          </ul>
          <RouterLink to="/contact" class="btn-primary mt-8 inline-block">
            Commander par téléphone
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-4 reveal-right">
          <div class="overflow-hidden rounded-2xl">
            <img :src="base + 'images/pain-campagne.jpg'" alt="Pain de campagne – Boulangerie Le Repère"
              class="h-52 w-full object-cover transition-transform ease-out duration-700 hover:scale-110" loading="lazy" width="900" height="599" />
          </div>
          <div class="overflow-hidden rounded-2xl mt-6">
            <img :src="base + 'images/pain-cereales.jpg'" alt="Pain aux céréales – Boulangerie Le Repère"
              class="h-52 w-full object-cover transition-transform ease-out duration-700 hover:scale-110" loading="lazy" width="800" height="600" />
          </div>
          <div class="overflow-hidden rounded-2xl">
            <img :src="base + 'images/pain-complet.jpg'" alt="Pain complet – Boulangerie Le Repère"
              class="h-52 w-full object-cover transition-transform ease-out duration-700 hover:scale-110" loading="lazy" width="800" height="600" />
          </div>
          <div class="overflow-hidden rounded-2xl mt-6">
            <img :src="base + 'images/pain-artisanal-baguette.jpg'" alt="Pain artisanal tranché – Boulangerie Le Repère"
              class="h-52 w-full object-cover transition-transform ease-out duration-700 hover:scale-110" loading="lazy" width="800" height="600" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'

useReveal()

const base = import.meta.env.BASE_URL

const gateaux = [
  {
    nom: 'Tarte aux Fraises',
    desc: 'Fond de tarte croustillant, crème pâtissière maison, fraises fraîches brillantes.',
    img: base + 'images/tarte-fraises-vitrine.jpg',
  },
  {
    nom: 'Mignardises de Vitrine',
    desc: 'Éclairs, tartelettes citron meringuées, choux et petites douceurs du jour.',
    img: base + 'images/mignardises-vitrine.jpg',
  },
  {
    nom: 'Tarte Chocolat & Éclair',
    desc: 'Tarte ganache chocolat intense et éclairs chocolat noir, copeaux blancs.',
    img: base + 'images/tarte-chocolat-eclair.jpg',
  },
  {
    nom: 'Entremet Fraises Chantilly',
    desc: 'Biscuit spéculoos, chantilly maison, fraises fraîches et éclats dorés.',
    img: base + 'images/entremet-fraises-chantilly.jpg',
  },
  {
    nom: 'Entremet Cœur Fraise',
    desc: 'Mousse légère façon entremet, décor fraise et éclat velours rosé.',
    img: base + 'images/entremets-coeur-fraise.jpg',
  },
  {
    nom: 'Gâteau aux Fraises',
    desc: 'Génoise moelleuse, crème mascarpone, fraises fraîches et coulis maison.',
    img: base + 'images/gateau-fraises.jpg',
  },
]

const typesSurMesure = [
  {
    emoji: '🎂',
    titre: 'Gâteaux d\'Anniversaire',
    desc: 'Décor sur mesure, thème de votre choix, message personnalisé. Adaptés à tous les âges.',
  },
  {
    emoji: '🔢',
    titre: 'Number Cake & Letter Cake',
    desc: 'Chiffres ou lettres en pâte sablée, plusieurs parfums disponibles, décoration au choix.',
  },
  {
    emoji: '💒',
    titre: 'Pièces Montées',
    desc: 'Choux à la crème et nougatine artisanale pour mariages, baptêmes, anniversaires et communions.',
  },
]

const realisations = [
  { src: base + 'images/piece-montee-mariage.jpg',             alt: 'Pièce montée mariage' },
  { src: base + 'images/gateau-chiffre-fraises.jpg',           alt: 'Number cake chiffre 4 fraises' },
  { src: base + 'images/gateau-chiffre-rose.jpg',              alt: 'Number cake chiffre 2 rose' },
  { src: base + 'images/gateau-anniversaire-personnalise.jpg', alt: 'Gâteau anniversaire personnalisé' },
  { src: base + 'images/piece-montee-bapteme.jpg',             alt: 'Pièce montée baptême' },
  { src: base + 'images/piece-montee-anniversaire.jpg',        alt: 'Pièce montée anniversaire' },
  { src: base + 'images/gateau-chiffre-chocolat.jpg',          alt: 'Number cake chiffre 5 chocolat' },
  { src: base + 'images/gateau-coeur-duo.jpg',                 alt: 'Duo gâteaux cœur fête des pères' },
  { src: base + 'images/gateau-coeur-chocolat.jpg',            alt: 'Gâteau cœur chocolat' },
  { src: base + 'images/gateau-coeur-fraises.jpg',             alt: 'Gâteau cœur fraises' },
  { src: base + 'images/gateau-enfant-personnalise.jpg',       alt: 'Gâteau enfant personnalisé' },
  { src: base + 'images/candy-bar-bonbons.jpg',                alt: 'Candy bar et pièce en bonbons' },
]

const pains = [
  'Baguette tradition',
  'Pain de campagne',
  'Pain aux céréales',
  'Pain complet',
  'Pain de seigle',
  'Pain aux noix',
  'Pain viennois',
]
</script>
