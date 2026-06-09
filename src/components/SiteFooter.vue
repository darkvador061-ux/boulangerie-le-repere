<template>
  <footer class="bg-brun-900 text-brun-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Identité -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img :src="logoUrl" alt="Logo Boulangerie Le Repère" class="h-16 w-auto object-contain flex-shrink-0 drop-shadow" />
            <div>
              <p class="font-serif font-bold text-2xl text-white leading-none">Le Repère</p>
              <p class="text-xs text-brun-300 tracking-[0.2em] uppercase mt-0.5">Boulangerie Artisanale</p>
            </div>
          </div>
          <p class="text-brun-300 text-sm leading-relaxed">
            Alliant le charme de l'artisanat traditionnel à une approche contemporaine,
            nous vous accueillons chaque jour avec des produits frais et savoureux.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener"
               class="w-9 h-9 rounded-full bg-brun-800 hover:bg-dore-500 flex items-center justify-center transition-colors"
               aria-label="Facebook">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/boulangerielerepere" target="_blank" rel="noopener"
               class="w-9 h-9 rounded-full bg-brun-800 hover:bg-dore-500 flex items-center justify-center transition-colors"
               aria-label="Instagram">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-serif text-white font-semibold text-lg mb-5">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-brun-300 hover:text-dore-400 text-sm transition-colors">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif text-white font-semibold text-lg mb-5">Nous trouver</h4>
          <ul class="space-y-4 text-sm text-brun-300">
            <li class="flex gap-3">
              <span class="mt-0.5">📍</span>
              <span>3 le Pont Neuf<br />31230 l'Isle-en-Dodon</span>
            </li>
            <li class="flex gap-3">
              <span>📞</span>
              <a href="tel:0561896070" class="hover:text-dore-400 transition-colors">05 61 89 60 70</a>
            </li>
            <li class="flex gap-3">
              <span>🕐</span>
              <div>
                <p>Lun – Mar, Jeu – Sam</p>
                <p>6h30 – 19h30</p>
                <p class="mt-1">Dimanche 6h30 – 19h30</p>
                <p class="text-brun-500 mt-1">Fermé le mercredi</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-brun-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brun-500">
        <p>© {{ new Date().getFullYear() }} Boulangerie Le Repère. Tous droits réservés.</p>
        <div class="flex gap-6">
          <RouterLink to="/politique-confidentialite" class="hover:text-brun-300 transition-colors">Confidentialité</RouterLink>
          <RouterLink to="/conditions-generales"     class="hover:text-brun-300 transition-colors">CGV</RouterLink>
          <RouterLink to="/rgpd"                     class="hover:text-brun-300 transition-colors">RGPD</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const logoUrl = ref('/images/logo.avif')

onMounted(() => {
  const img = new Image()
  img.onload = () => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2]
        const avg  = (r + g + b) / 3
        const span = Math.max(r, g, b) - Math.min(r, g, b)
        if (avg < 135 && span < 55 && !(r > g + 35)) {
          d[i + 3] = 0
        }
      }
      ctx.putImageData(imageData, 0, 0)
      logoUrl.value = canvas.toDataURL('image/png')
    } catch (_) {}
  }
  img.src = '/images/logo.avif'
})

const footerLinks = [
  { to: '/',                  label: 'Accueil' },
  { to: '/pain-patisseries',  label: 'Pain & Pâtisseries' },
  { to: '/snacking-traiteur', label: 'Snacking & Traiteur' },
  { to: '/contact',           label: 'Contact' },
]
</script>
