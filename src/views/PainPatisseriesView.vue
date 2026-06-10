<template>
  <!-- Hero page -->
  <section class="relative pt-32 pb-20 bg-brun-900 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('/images/photo-interieur.avif')"
    />
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <p class="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">Notre gamme</p>
      <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Pain &amp; Pâtisseries</h1>
      <p class="text-brun-200 text-lg max-w-xl mx-auto">
        Du pain cuit au four chaque matin aux entremets sur-mesure, découvrez toute notre sélection artisanale.
      </p>
    </div>
  </section>

  <!-- ===== PÂTISSERIES ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-rose-500 text-sm font-medium tracking-widest uppercase mb-3">Fait maison</p>
        <h2 class="section-title">Nos Pâtisseries Artisanales</h2>
        <p class="section-subtitle">Entremets, gâteaux de vitrine et pièces montées sur commande.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="gateau in gateaux" :key="gateau.nom" class="card group">
          <div class="overflow-hidden h-44">
            <img
              :src="gateau.img"
              :alt="gateau.nom"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-5">
            <h3 class="font-serif text-lg font-semibold text-brun-900 mb-2">{{ gateau.nom }}</h3>
            <p class="text-brun-500 text-sm leading-relaxed">{{ gateau.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Commande sur mesure -->
      <div class="mt-14 rounded-3xl bg-brun-900 text-white overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-72 lg:w-80 flex-shrink-0">
            <img
              src="/images/piece-montee.webp"
              alt="Pièce montée de mariage"
              class="w-full h-56 md:h-full object-cover"
            />
          </div>
          <div class="p-8 md:p-10 flex flex-col justify-center gap-6 flex-1">
            <div>
              <p class="text-dore-400 text-xs font-medium tracking-widest uppercase mb-3">Événements spéciaux</p>
              <h3 class="font-serif text-2xl font-semibold mb-3">Pièces montées &amp; commandes sur-mesure</h3>
              <p class="text-brun-300 leading-relaxed">
                Mariages, anniversaires, baptêmes… Nous créons votre pièce montée ou gâteau personnalisé selon vos envies et votre budget.
              </p>
            </div>
            <RouterLink to="/contact" class="btn-primary self-start whitespace-nowrap">
              📞 Nous contacter
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PAINS ===== -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-rose-500 text-sm font-medium tracking-widest uppercase mb-3">Cuit chaque matin</p>
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
        <div class="grid grid-cols-2 gap-4">
          <img
            src="/images/photo-interieur.avif"
            alt="Le fournil de la boulangerie Le Repère"
            class="rounded-2xl h-52 w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/photo-vitrine.avif"
            alt="Vitrine de la boulangerie Le Repère"
            class="rounded-2xl h-52 w-full object-cover mt-6"
            loading="lazy"
          />
          <img
            src="/images/facade.jpg"
            alt="Devanture de la boulangerie Le Repère"
            class="rounded-2xl h-52 w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/facade-nuit.jpg"
            alt="La boulangerie Le Repère de nuit"
            class="rounded-2xl h-52 w-full object-cover mt-6"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const base = import.meta.env.BASE_URL
const gateaux = [
  {
    nom: 'Éclairs au Chocolat',
    desc: 'Éclairs maison, glaçage chocolat, éclats de feuillantine dorée.',
    img: base + 'images/eclairs.jpg',
  },
  {
    nom: 'Petits Gâteaux & Choux',
    desc: 'Plateau gourmand : choux, religieuses, mignardises aux fruits rouges.',
    img: base + 'images/petits-gateaux.jpg',
  },
  {
    nom: 'Casse-Noisette',
    desc: 'Feuilleté praliné, bavarois chocolat et praliné, génoise chocolat.',
    img: base + 'images/petites-patisseries.jpg',
  },
  {
    nom: 'Carapoire',
    desc: 'Bavarois poire et caramel, génoise.',
    img: base + 'images/eclairs-chocolat.jpg',
  },
  {
    nom: 'Feuilletine Framboise',
    desc: 'Feuilleté praliné, bavarois chocolat blanc et framboise, génoise.',
    img: base + 'images/entremets-framboise.jpg',
  },
  {
    nom: 'Forêt Noire',
    desc: 'Ganache chocolat, chantilly, cerise griotte, génoise chocolat.',
    img: base + 'images/gateau-chocolat.jpg',
  },
  {
    nom: 'Trois Chocolats',
    desc: 'Bavarois chocolat blanc, lait et noir, génoise chocolat.',
    img: base + 'images/trois-chocolats.jpg',
  },
  {
    nom: 'Tropiko',
    desc: 'Bavarois passion, biscuit coco, miroir mangue.',
    img: base + 'images/entremet-tropical.jpg',
  },
  {
    nom: 'Fragola',
    desc: 'Bavarois fraise, génoise pistache.',
    img: base + 'images/tarte-fraises.jpg',
  },
  {
    nom: 'Fraisoffee',
    desc: 'Mousse mascarpone chantilly, fraises ou framboises, spéculos.',
    img: base + 'images/petites-patisseries.jpg',
  },
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
