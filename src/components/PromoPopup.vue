<template>
  <Transition name="fade">
    <div v-if="visible" class="overlay" @click.self="fermer">
      <div class="popup">
        <button class="popup-close" @click="fermer" aria-label="Fermer">×</button>

        <div class="popup-img-wrap">
          <img :src="base + PROMO.image" :alt="PROMO.titre" loading="eager" />
          <div class="popup-img-overlay"></div>
          <span class="popup-badge">{{ PROMO.badge }}</span>
          <h2 class="popup-titre">{{ PROMO.titre }}</h2>
        </div>

        <div class="popup-body">
          <p class="popup-sous">{{ PROMO.sous }}</p>
          <p class="popup-dates">{{ PROMO.dates }}</p>
          <div class="popup-actions">
            <RouterLink :to="PROMO.ctaLien" class="btn-primary" @click="fermer">
              {{ PROMO.cta }}
            </RouterLink>
            <button class="btn-secondary" @click="fermer">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { PROMO } from '../data/config.js'

const base = import.meta.env.BASE_URL

function estActif() {
  if (!PROMO.active) return false
  const now  = new Date()
  const fin  = new Date(PROMO.dateFin)
  fin.setHours(23, 59, 59)
  return now >= new Date(PROMO.dateDebut) && now <= fin
}

const visible = ref(estActif())

function fermer() {
  visible.value = false
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.popup {
  position: relative;
  background: white;
  max-width: 520px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  max-height: 90vh;
  overflow-y: auto;
}

.popup-img-wrap {
  position: relative;
  height: 260px;
  overflow: hidden;
}
.popup-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.popup-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%);
}
.popup-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #c8922a;
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
}
.popup-titre {
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  right: 1.25rem;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  line-height: 1.2;
  font-family: Georgia, serif;
}

.popup-body {
  padding: 1.25rem 1.5rem 1.5rem;
  text-align: center;
  font-family: Georgia, serif;
}
.popup-sous {
  color: #555;
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.popup-dates {
  color: #c8922a;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  font-family: sans-serif;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}
.popup-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: #c8922a;
  color: white;
  border: none;
  padding: 0.7rem 1.75rem;
  font-size: 0.88rem;
  font-family: Georgia, serif;
  letter-spacing: 0.06em;
  cursor: pointer;
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  flex: 1;
  min-width: 140px;
  justify-content: center;
  transition: background 0.2s;
}
.btn-primary:hover { background: #a87220; }
.btn-secondary {
  background: transparent;
  color: #888;
  border: 1px solid #ddd;
  padding: 0.7rem 1.25rem;
  font-size: 0.82rem;
  font-family: sans-serif;
  cursor: pointer;
  border-radius: 2px;
  flex: 1;
  min-width: 100px;
  transition: color 0.2s;
}
.btn-secondary:hover { color: #444; }

.popup-close {
  position: absolute;
  top: 0.6rem;
  right: 0.7rem;
  background: rgba(0,0,0,0.35);
  color: white;
  border: none;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
}
.popup-close:hover { background: rgba(0,0,0,0.65); }

/* transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* responsive mobile */
@media (max-width: 480px) {
  .overlay { align-items: flex-end; padding: 0; }
  .popup {
    border-radius: 12px 12px 0 0;
    max-height: 92vh;
  }
  .popup-img-wrap { height: 200px; }
  .popup-titre { font-size: 1.3rem; }
  .popup-body { padding: 1rem 1.25rem 1.5rem; }
  .popup-actions { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; }
}
</style>
