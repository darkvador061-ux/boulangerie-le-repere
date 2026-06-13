<template>
  <!-- Hero -->
  <section class="pt-32 pb-16 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Venez nous voir</p>
        <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
        <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
      </div>
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
        <div class="space-y-8 reveal-left">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
              <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
              <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">À votre écoute</p>
            </div>
            <h2 class="font-serif text-3xl font-semibold text-brun-900">Informations pratiques</h2>
          </div>

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
                    :href="socialLinks.facebook"
                    target="_blank" rel="noopener"
                    class="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                  <a
                    :href="socialLinks.instagram"
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
        <div class="rounded-3xl overflow-hidden shadow-xl h-full min-h-96 reveal-right">
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

  <!-- ===== FORMULAIRE ===== -->
  <section class="py-20 bg-brun-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Écrivez-nous</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Envoyer un message</h2>
        <p class="section-subtitle">Pour une commande spéciale, une question ou une demande de livraison.</p>
      </div>

      <!-- Message succès -->
      <div v-if="formState === 'success'" class="text-center py-16 px-8 bg-white rounded-3xl shadow-sm">
        <div class="text-5xl mb-4">✅</div>
        <h3 class="font-serif text-2xl font-semibold text-brun-900 mb-2">Message envoyé !</h3>
        <p class="text-brun-500 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
        <button @click="formState = 'idle'" class="btn-primary">Envoyer un autre message</button>
      </div>

      <!-- Formulaire -->
      <form v-else @submit.prevent="submitForm" class="space-y-6 bg-white rounded-3xl p-8 md:p-10 shadow-sm">
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label for="contact-nom" class="block text-sm font-medium text-brun-700 mb-2">Nom *</label>
            <input id="contact-nom" v-model="form.nom" type="text" required placeholder="Votre nom" autocomplete="name"
              class="w-full px-4 py-3 rounded-xl border border-brun-200 focus:outline-none focus:ring-2 focus:ring-dore-400 focus:border-transparent transition text-brun-900" />
          </div>
          <div>
            <label for="contact-email" class="block text-sm font-medium text-brun-700 mb-2">Email *</label>
            <input id="contact-email" v-model="form.email" type="email" required placeholder="votre@email.fr" autocomplete="email"
              class="w-full px-4 py-3 rounded-xl border border-brun-200 focus:outline-none focus:ring-2 focus:ring-dore-400 focus:border-transparent transition text-brun-900" />
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label for="contact-tel" class="block text-sm font-medium text-brun-700 mb-2">Téléphone</label>
            <input id="contact-tel" v-model="form.telephone" type="tel" placeholder="06 XX XX XX XX" autocomplete="tel"
              class="w-full px-4 py-3 rounded-xl border border-brun-200 focus:outline-none focus:ring-2 focus:ring-dore-400 focus:border-transparent transition text-brun-900" />
          </div>
          <div>
            <label for="contact-type" class="block text-sm font-medium text-brun-700 mb-2">Type de demande *</label>
            <select id="contact-type" v-model="form.type" required
              class="w-full px-4 py-3 rounded-xl border border-brun-200 focus:outline-none focus:ring-2 focus:ring-dore-400 focus:border-transparent transition text-brun-900 bg-white">
              <option value="" disabled>Choisir…</option>
              <option>Commande spéciale</option>
              <option>Pièce montée / Mariage</option>
              <option>Livraison à domicile</option>
              <option>Question générale</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div>
          <label for="contact-message" class="block text-sm font-medium text-brun-700 mb-2">Message *</label>
          <textarea id="contact-message" v-model="form.message" required rows="5" placeholder="Décrivez votre demande…"
            class="w-full px-4 py-3 rounded-xl border border-brun-200 focus:outline-none focus:ring-2 focus:ring-dore-400 focus:border-transparent transition text-brun-900 resize-none" />
        </div>

        <div v-if="formState === 'error'" class="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl border border-red-200">
          Une erreur est survenue. Réessayez ou appelez-nous directement au 05 61 89 60 70.
        </div>

        <div class="flex flex-col sm:flex-row gap-4 items-center">
          <button type="submit" :disabled="formState === 'sending'"
            class="btn-primary w-full sm:w-auto px-10 disabled:opacity-60 disabled:cursor-not-allowed">
            {{ formState === 'sending' ? 'Envoi en cours…' : 'Envoyer le message' }}
          </button>
          <p class="text-xs text-brun-400">* Champs obligatoires</p>
        </div>
      </form>
    </div>
  </section>

  <!-- ===== LIVRAISON ===== -->
  <section class="py-20 bg-brun-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="h-px w-8 bg-gradient-to-r from-transparent to-dore-400/70" />
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <p class="text-rose-500 font-medium text-xs tracking-[0.25em] uppercase">Nous venons chez vous</p>
          <span class="text-dore-400 text-sm" aria-hidden="true">✦</span>
          <span class="h-px w-8 bg-gradient-to-l from-transparent to-dore-400/70" />
        </div>
        <h2 class="section-title">Zone de livraison</h2>
        <p class="section-subtitle">Livraison de pain à domicile dans un rayon d'1 km autour de l'Isle-en-Dodon.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="(commune, i) in communes"
          :key="commune"
          class="flex items-center gap-2 bg-white text-brun-700 font-medium px-5 py-3 rounded-full shadow-sm border border-brun-100 reveal-scale transition-all duration-300 hover:border-dore-300 hover:shadow-md hover:-translate-y-0.5"
          :data-delay="i * 0.06"
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
import { ref } from 'vue'
import { COMMUNES, HORAIRES, SOCIAL_LINKS } from '../data/config.js'
import { useReveal } from '../composables/useReveal.js'

useReveal()

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_FORMSPREE'

const communes    = COMMUNES
const horaires    = HORAIRES
const socialLinks = SOCIAL_LINKS

const formState = ref('idle') // idle | sending | success | error
const form = ref({ nom: '', email: '', telephone: '', type: '', message: '' })

async function submitForm() {
  formState.value = 'sending'
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value),
    })
    formState.value = res.ok ? 'success' : 'error'
    if (res.ok) form.value = { nom: '', email: '', telephone: '', type: '', message: '' }
  } catch {
    formState.value = 'error'
  }
}
</script>
