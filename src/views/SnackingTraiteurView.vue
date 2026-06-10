<template>
  <!-- Hero page -->
  <section class="relative pt-32 pb-20 bg-brun-900 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-30"
      style="background-image: url('/images/snacking-vitrine.jpg')"
    />
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <p class="text-dore-400 text-sm font-medium tracking-widest uppercase mb-3">Sur place ou à emporter</p>
      <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">Snacking &amp; Traiteur</h1>
      <p class="text-brun-200 text-lg max-w-xl mx-auto">
        Bien plus qu'une boulangerie : formules midi, pizzas artisanales, sandwichs généreux et salades fraîches.
      </p>
    </div>
  </section>

  <!-- ===== FORMULES ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Repas du midi</p>
        <h2 class="section-title">Repas et formules<br />pour toutes vos occasions</h2>
        <p class="section-subtitle">Déjeuner savoureux et équilibré, sur place ou à emporter.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="formule in formules" :key="formule.titre" class="card p-6">
          <div class="text-4xl mb-4">{{ formule.icon }}</div>
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
        <div>
          <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Nos spécialités</p>
          <h2 class="section-title">Pizzas artisanales</h2>
          <p class="text-brun-600 leading-relaxed mb-6">
            Nos pizzas sont préparées avec une pâte maison et des ingrédients soigneusement sélectionnés.
            Un délice à déguster sur place ou à emporter !
          </p>
          <RouterLink to="/contact" class="btn-primary">Réserver votre repas</RouterLink>
        </div>
        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/pizza-artisanale.jpg"
            alt="Pizza artisanale de la boulangerie Le Repère"
            class="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALERIE SNACKING ===== -->
  <section class="py-24 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Coup d'œil</p>
        <h2 class="section-title">Quelques snackings<br />pour éveiller vos envies</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, i) in galerieSnacking" :key="i" class="overflow-hidden rounded-2xl">
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TÉMOIGNAGE ===== -->
  <section class="py-24 bg-brun-900 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Facile &amp; rapide</p>
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
const formules = [
  {
    icon: '🥪',
    titre: 'Formule Sandwich',
    desc: 'Sandwich garni + boisson + dessert pour un déjeuner complet.',
    items: ['Sandwich au choix', 'Boisson (chaude ou froide)', 'Pâtisserie du jour'],
  },
  {
    icon: '🥗',
    titre: 'Formule Salade',
    desc: 'Salade fraîche préparée le matin + accompagnement.',
    items: ['Salade composée', 'Pain maison', 'Boisson incluse'],
  },
  {
    icon: '🍕',
    titre: 'Formule Pizza',
    desc: 'Part de pizza artisanale + salade + boisson.',
    items: ['Pizza au choix', 'Salade verte', 'Boisson fraîche ou chaude'],
  },
  {
    icon: '☕',
    titre: 'Pause Gourmande',
    desc: 'Viennoiserie + boisson chaude pour commencer la journée.',
    items: ['Croissant ou pain au chocolat', 'Café ou thé', 'Jus de fruits'],
  },
  {
    icon: '🎉',
    titre: 'Formule Traiteur',
    desc: 'Plateaux repas et buffets pour vos événements d\'entreprise ou privés.',
    items: ['Sandwichs variés', 'Mini-viennoiseries', 'Desserts individuels'],
  },
  {
    icon: '🥐',
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
