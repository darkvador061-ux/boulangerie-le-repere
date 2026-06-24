<template>
  <!-- Popup pleine -->
  <Transition name="fade">
    <div v-if="visible" class="overlay" @click.self="reduire">
      <div class="popup">
        <button class="popup-close" @click="reduire" aria-label="Réduire">×</button>

        <!-- Vue principale -->
          <div v-if="!detail">
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
                <button class="btn-primary" @click="detail = true">
                  {{ PROMO.cta }}
                </button>
                <button class="btn-secondary" @click="reduire">Réduire</button>
              </div>
            </div>
          </div>

          <!-- Vue détail -->
          <div v-else class="popup-detail">
            <div class="detail-header">
              <button class="detail-back" @click="detail = false" aria-label="Retour">
                ← Retour
              </button>
              <span class="popup-badge detail-badge">{{ PROMO.badge }}</span>
            </div>

            <div class="detail-body">
              <h3 class="detail-titre">{{ PROMO.titre }}</h3>
              <p class="detail-dates">{{ PROMO.dates }}</p>

              <div class="detail-section">
                <p class="detail-section-title">Comment participer</p>
                <p class="detail-text">{{ PROMO.detail.comment }}</p>
              </div>

              <div class="detail-section">
                <p class="detail-section-title">Lots à gagner</p>
                <ul class="detail-lots">
                  <li v-for="lot in PROMO.detail.lots" :key="lot.label" class="detail-lot">
                    <span class="lot-emoji">{{ lot.emoji }}</span>
                    <span class="lot-info">
                      <strong>{{ lot.label }}</strong>
                      <span>{{ lot.description }}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <p class="detail-conditions">{{ PROMO.detail.conditions }}</p>

              <button class="btn-primary btn-full" @click="reduire">
                Fermer
              </button>
            </div>
          </div>
      </div>
    </div>
  </Transition>

  <!-- Badge flottant quand réduit -->
  <Transition name="slide-badge">
    <button v-if="reduit" class="floating-badge" @click="rouvrir" :aria-label="PROMO.titre">
      <span class="floating-badge-icon">🎟️</span>
      <span class="floating-badge-label">{{ PROMO.titre }}</span>
    </button>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { PROMO } from '../data/config.js'

const base = import.meta.env.BASE_URL

function estActif() {
  if (!PROMO.active) return false
  const now = new Date()
  const fin = new Date(PROMO.dateFin)
  fin.setHours(23, 59, 59)
  return now >= new Date(PROMO.dateDebut) && now <= fin
}

const actif   = estActif()
const visible = ref(actif)
const reduit  = ref(false)
const detail  = ref(false)

function reduire() {
  visible.value = false
  reduit.value  = true
  detail.value  = false
}

function rouvrir() {
  reduit.value  = false
  visible.value = true
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

/* Vue principale */
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
.btn-full { width: 100%; margin-top: 1.25rem; flex: none; min-width: unset; }

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

/* Vue détail */
.popup-detail { font-family: Georgia, serif; }

.detail-header {
  position: relative;
  background: #1a1a1a;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail-back {
  background: transparent;
  color: rgba(255,255,255,0.75);
  border: none;
  font-size: 0.82rem;
  font-family: sans-serif;
  cursor: pointer;
  padding: 0.25rem 0;
  transition: color 0.2s;
  letter-spacing: 0.04em;
}
.detail-back:hover { color: white; }
.detail-badge {
  position: static;
  font-size: 0.62rem;
}

.detail-body {
  padding: 1.5rem 1.75rem 1.75rem;
}
.detail-titre {
  font-size: 1.35rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.35rem;
  line-height: 1.2;
}
.detail-dates {
  color: #c8922a;
  font-size: 0.75rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-family: sans-serif;
  margin-bottom: 1.5rem;
}

.detail-section { margin-bottom: 1.5rem; }
.detail-section-title {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #999;
  font-family: sans-serif;
  margin-bottom: 0.6rem;
  font-style: normal;
}
.detail-text {
  color: #444;
  font-size: 0.92rem;
  font-style: italic;
  line-height: 1.6;
}

.detail-lots {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.detail-lot {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #faf8f4;
  border-left: 3px solid #c8922a;
  border-radius: 0 2px 2px 0;
}
.lot-emoji { font-size: 1.2rem; line-height: 1; flex-shrink: 0; margin-top: 0.1rem; }
.lot-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.lot-info strong {
  font-size: 0.82rem;
  color: #c8922a;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: sans-serif;
}
.lot-info span {
  font-size: 0.9rem;
  color: #333;
  font-style: italic;
}

.detail-conditions {
  font-size: 0.74rem;
  color: #aaa;
  font-family: sans-serif;
  font-style: normal;
  line-height: 1.5;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 0.25rem;
}

/* Badge flottant */
.floating-badge {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 150;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #c8922a;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.65rem 1.1rem 0.65rem 0.85rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  cursor: pointer;
  font-family: Georgia, serif;
  font-size: 0.82rem;
  max-width: 220px;
  transition: background 0.2s, transform 0.2s;
}
.floating-badge:hover {
  background: #a87220;
  transform: translateY(-2px);
}
.floating-badge-icon { font-size: 1.1rem; flex-shrink: 0; }
.floating-badge-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-badge-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.slide-badge-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.slide-badge-enter-from, .slide-badge-leave-to { opacity: 0; transform: translateY(1rem); }

/* Responsive mobile */
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
  .detail-body { padding: 1.25rem 1.25rem 1.5rem; }
}
</style>
