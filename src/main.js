import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView            from './views/HomeView.vue'
import PainPatisseriesView from './views/PainPatisseriesView.vue'
import SnackingTraiteurView from './views/SnackingTraiteurView.vue'
import ContactView         from './views/ContactView.vue'
import PolitiqueView       from './views/PolitiqueView.vue'
import CGVView             from './views/CGVView.vue'
import RGPDView            from './views/RGPDView.vue'

const routes = [
  { path: '/',                        component: HomeView,             meta: { title: 'Accueil' } },
  { path: '/pain-patisseries',        component: PainPatisseriesView,  meta: { title: 'Pain & Pâtisseries' } },
  { path: '/snacking-traiteur',       component: SnackingTraiteurView, meta: { title: 'Snacking & Traiteur' } },
  { path: '/contact',                 component: ContactView,          meta: { title: 'Contact' } },
  { path: '/politique-confidentialite', component: PolitiqueView,      meta: { title: 'Politique de confidentialité' } },
  { path: '/conditions-generales',    component: CGVView,              meta: { title: 'Conditions générales' } },
  { path: '/rgpd',                    component: RGPDView,             meta: { title: 'RGPD' } },
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
