import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/',                          component: HomeView,                                                              meta: { title: 'Accueil' } },
  { path: '/pain-patisseries',          component: () => import('./views/PainPatisseriesView.vue'),                      meta: { title: 'Pain & Pâtisseries' } },
  { path: '/snacking-traiteur',         component: () => import('./views/SnackingTraiteurView.vue'),                     meta: { title: 'Snacking & Traiteur' } },
  { path: '/contact',                   component: () => import('./views/ContactView.vue'),                              meta: { title: 'Contact' } },
  { path: '/politique-confidentialite', component: () => import('./views/PolitiqueView.vue'),                            meta: { title: 'Politique de confidentialité' } },
  { path: '/conditions-generales',      component: () => import('./views/CGVView.vue'),                                  meta: { title: 'Conditions générales' } },
  { path: '/rgpd',                      component: () => import('./views/RGPDView.vue'),                                 meta: { title: 'RGPD' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} – Le Repère`
})

createApp(App).use(router).mount('#app')
