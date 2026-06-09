<template>
  <!-- Hero -->
  <section class="pt-32 pb-16 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Venez nous voir</p>
      <h1 class="font-serif text-5xl md:text-6xl font-bold text-brun-900 mb-4">Contact</h1>
      <p class="text-brun-500 text-lg max-w-xl mx-auto">
        Nous sommes à votre disposition pour toute question, commande ou réservation.
      </p>
    </div>
  </section>

  <!-- ===== INFOS + MAP ===== -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16">

        <!-- Infos pratiques -->
        <div class="space-y-8">
          <h2 class="font-serif text-3xl font-semibold text-brun-900">Informations pratiques</h2>

          <div class="space-y-6">
            <!-- Adresse -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-dore-500 rounded-2xl flex items-center justify-center shrink-0 text-xl">📍</div>
              <div>
                <h3 class="font-semibold text-brun-900 mb-1">Adresse</h3>
                <p class="text-brun-600">3 le Pont Neuf<br />31230 l'Isle-en-Dodon</p>
              </div>
            </div>

            <!-- Téléphone -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-dore-500 rounded-2xl flex items-center justify-center shrink-0 text-xl">📞</div>
              <div>
                <h3 class="font-semibold text-brun-900 mb-1">Téléphone</h3>
                <a href="tel:0561896070" class="text-dore-500 hover:text-dore-600 font-medium text-lg transition-colors">
                  05 61 89 60 70
                </a>
              </div>
            </div>

            <!-- Horaires -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-dore-500 rounded-2xl flex items-center justify-center shrink-0 text-xl">🕐</div>
              <div>
                <h3 class="font-semibold text-brun-900 mb-3">Horaires d'ouverture</h3>
                <div class="space-y-2 text-sm">
                  <div v-for="h in horaires" :key="h.jour" class="flex justify-between gap-8">
                    <span class="text-brun-700 font-medium">{{ h.jour }}</span>
                    <span :class="h.ferme ? 'text-red-500 font-medium' : 'text-brun-600'">{{ h.heure }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-dore-500 rounded-2xl flex items-center justify-center shrink-0 text-xl">📲</div>
              <div>
                <h3 class="font-semibold text-brun-900 mb-3">Réseaux sociaux</h3>
                <div class="flex gap-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank" rel="noopener"
                    class="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/boulangerielerepere"
                    target="_blank" rel="noopener"
                    class="flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte Google Maps intégrée -->
        <div class="rounded-3xl overflow-hidden shadow-xl h-full min-h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.6!2d0.8548!3d43.3873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aec5b1234567%3A0x1!2s3%20le%20Pont%20Neuf%2C%2031230%20L%27Isle-en-Dodon!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style="border:0; min-height: 400px;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localisation de la boulangerie Le Repère"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== LIVRAISON ===== -->
  <section class="py-20 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-dore-500 text-sm font-medium tracking-widest uppercase mb-3">Nous venons chez vous</p>
        <h2 class="section-title">Zone de livraison</h2>
        <p class="section-subtitle">Livraison de pain à domicile dans un rayon d'1 km autour de l'Isle-en-Dodon.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="commune in communes"
          :key="commune"
          class="flex items-center gap-2 bg-white text-brun-700 font-medium px-5 py-3 rounded-full shadow-sm border border-brun-100"
        >
          <span class="text-dore-500">📍</span>
          {{ commune }}
        </div>
      </div>
      <div class="text-center mt-10">
        <p class="text-brun-500 mb-4">Pour toute demande de livraison, appelez-nous directement.</p>
        <a href="tel:0561896070" class="btn-primary">📞 05 61 89 60 70</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const horaires = [
  { jour: 'Lundi',    heure: '6h30 – 19h30' },
  { jour: 'Mardi',   heure: '6h30 – 19h30' },
  { jour: 'Mercredi',heure: 'Fermé', ferme: true },
  { jour: 'Jeudi',   heure: '6h30 – 19h30' },
  { jour: 'Vendredi',heure: '6h30 – 19h30' },
  { jour: 'Samedi',  heure: '6h30 – 19h30' },
  { jour: 'Dimanche',heure: '6h30 – 19h30' },
]

const communes = ['Isle-en-Dodon', 'Couielles', 'Riolas', 'Cazac', 'Labastide', 'Fabas', 'Saint-Frajou']
</script>
