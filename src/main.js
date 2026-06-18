import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Le Repère – Boulangerie Artisanale à l\'Isle-en-Dodon',
      description: 'Boulangerie Le Repère à l\'Isle-en-Dodon – Pains au levain, viennoiseries maison et pâtisseries artisanales préparées chaque jour avec passion. Livraison à domicile disponible.',
    },
  },
  {
    path: '/pain-patisseries',
    component: () => import('./views/PainPatisseriesView.vue'),
    meta: {
      title: 'Pain & Pâtisseries – Le Repère Boulangerie à l\'Isle-en-Dodon',
      description: 'Découvrez nos pains au levain, baguettes tradition, viennoiseries et pâtisseries artisanales. Boulangerie Le Repère à l\'Isle-en-Dodon, ouvert 6 jours sur 7.',
    },
  },
  {
    path: '/snacking-traiteur',
    component: () => import('./views/SnackingTraiteurView.vue'),
    meta: {
      title: 'Snacking & Traiteur – Le Repère Boulangerie à l\'Isle-en-Dodon',
      description: 'Sandwichs maison, salades et formules traiteur pour votre déjeuner. Boulangerie Le Repère à l\'Isle-en-Dodon, préparés chaque matin avec des produits frais.',
    },
  },
  {
    path: '/contact',
    component: () => import('./views/ContactView.vue'),
    meta: {
      title: 'Contact & Horaires – Boulangerie Le Repère à l\'Isle-en-Dodon',
      description: 'Contactez la boulangerie Le Repère à l\'Isle-en-Dodon. Horaires d\'ouverture, adresse, formulaire de contact et informations sur la livraison à domicile.',
    },
  },
  {
    path: '/politique-confidentialite',
    component: () => import('./views/PolitiqueView.vue'),
    meta: { title: 'Politique de confidentialité – Le Repère', description: 'Politique de confidentialité et protection de vos données personnelles – Boulangerie Le Repère à l\'Isle-en-Dodon.' },
  },
  {
    path: '/conditions-generales',
    component: () => import('./views/CGVView.vue'),
    meta: { title: 'Conditions générales de vente – Le Repère', description: 'Conditions générales de vente de la Boulangerie Le Repère : commandes spéciales, livraison, prix et modalités de paiement.' },
  },
  {
    path: '/rgpd',
    component: () => import('./views/RGPDView.vue'),
    meta: { title: 'RGPD – Le Repère', description: 'Informations relatives au traitement de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).' },
  },
  {
    path: '/mentions-legales',
    component: () => import('./views/MentionsLegalesView.vue'),
    meta: { title: 'Mentions légales – Le Repère', description: 'Mentions légales de la Boulangerie Le Repère : éditeur, directeurs de publication, hébergeur et informations légales obligatoires.' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

function setMeta(name, content, attr = 'name') {
  const tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (tag && content) tag.setAttribute('content', content)
}

router.afterEach((to) => {
  const title = to.meta.title || 'Le Repère – Boulangerie Artisanale à l\'Isle-en-Dodon'
  const description = to.meta.description || 'Boulangerie Le Repère à l\'Isle-en-Dodon – Pains au levain, viennoiseries maison et pâtisseries artisanales préparées chaque jour avec passion.'
  const image = to.meta.ogImage || 'https://boulangerielerepere.fr/images/facade-nuit.jpg'
  const url = `https://boulangerielerepere.fr${to.path === '/' ? '' : to.path}`

  document.title = title

  setMeta('description', description)
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:url', url, 'property')
  setMeta('og:image', image, 'property')
  setMeta('twitter:title', title)
  setMeta('twitter:description', description)
  setMeta('twitter:image', image)

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', url)
})

createApp(App).use(router).mount('#app')
