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
    meta: { title: 'Politique de confidentialité – Le Repère', description: '' },
  },
  {
    path: '/conditions-generales',
    component: () => import('./views/CGVView.vue'),
    meta: { title: 'Conditions générales de vente – Le Repère', description: '' },
  },
  {
    path: '/rgpd',
    component: () => import('./views/RGPDView.vue'),
    meta: { title: 'Mentions RGPD – Le Repère', description: '' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Le Repère – Boulangerie Artisanale à l\'Isle-en-Dodon'

  if (to.meta.description) {
    let tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', to.meta.description)
  }
})

createApp(App).use(router).mount('#app')
