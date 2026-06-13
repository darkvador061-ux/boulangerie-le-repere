<template>
  <div class="delivery-map-wrapper rounded-2xl overflow-hidden shadow-xl w-full relative" style="height: 420px;">

    <!-- Overlay info -->
    <div class="map-legend">
      <p class="map-legend-title">🥖 Boulangerie Le Repère</p>
      <p class="map-legend-sub">Livraison dans {{ deliveryCommunes.length + 1 }} communes</p>
      <div class="map-legend-items">
        <span v-for="c in [{ name: 'Isle-en-Dodon' }, ...deliveryCommunes]" :key="c.name" class="map-legend-chip">
          {{ c.name }}
        </span>
      </div>
    </div>

    <l-map
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      :options="mapOptions"
      style="height: 100%; width: 100%; z-index: 0;"
    >
      <!-- Tuiles CartoDB Voyager — plus lisibles que OSM -->
      <l-tile-layer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="CartoDB Voyager"
        attribution="© <a href='https://carto.com/attributions'>CARTO</a> © <a href='https://www.openstreetmap.org/copyright'>OSM</a>"
      />

      <!-- Remplissage zone de livraison -->
      <l-circle
        :lat-lng="center"
        :radius="8200"
        color="#D4831A"
        fill-color="#F0A832"
        :fill-opacity="0.09"
        :weight="2"
        :dash-array="'10, 7'"
      />

      <!-- Lignes boulangerie → communes -->
      <l-polyline
        v-for="c in deliveryCommunes"
        :key="'line-' + c.name"
        :lat-lngs="[center, c.coords]"
        color="#D4831A"
        :weight="2"
        :opacity="0.5"
        :dash-array="'5, 8'"
      />

      <!-- Marqueur boulangerie -->
      <l-marker :lat-lng="center" :icon="bakeryDivIcon">
        <l-tooltip :options="{ permanent: true, direction: 'right', offset: [10, -28], className: 'label-bakery' }">
          Isle-en-Dodon
        </l-tooltip>
      </l-marker>

      <!-- Communes de livraison -->
      <l-marker
        v-for="(c, i) in deliveryCommunes"
        :key="c.name"
        :lat-lng="c.coords"
        :icon="communeDivIcon(i)"
      >
        <l-tooltip :options="{ permanent: true, direction: 'top', offset: [0, -10], className: 'label-commune' }">
          {{ c.name }}
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LCircle, LPolyline, LTooltip } from '@vue-leaflet/vue-leaflet'

// Empêche Leaflet de chercher ses images par défaut (path cassé sous Vite)
delete L.Icon.Default.prototype._getIconUrl

const center = [43.387, 0.855]
const zoom   = 12

const mapOptions = {
  scrollWheelZoom: false,
  zoomControl: true,
}

const bakeryDivIcon = L.divIcon({
  html: `<div class="pin-bakery"><div class="pin-pulse pin-pulse--gold"></div><div class="pin-core pin-core--gold">🥖</div></div>`,
  iconSize:    [56, 56],
  iconAnchor:  [28, 56],
  popupAnchor: [0, -56],
  className:   'map-icon-clean',
})

function communeDivIcon(i) {
  return L.divIcon({
    html: `<div class="pin-commune" style="animation-delay:${i * 0.2}s"><div class="pin-pulse pin-pulse--amber" style="animation-delay:${i * 0.2}s"></div><div class="pin-core pin-core--amber">🚐</div></div>`,
    iconSize:    [40, 40],
    iconAnchor:  [20, 40],
    popupAnchor: [0, -40],
    className:   'map-icon-clean',
  })
}

const deliveryCommunes = [
  { name: 'Coueilles',    coords: [43.376, 0.821] },
  { name: 'Riolas',       coords: [43.362, 0.877] },
  { name: 'Cazac',        coords: [43.402, 0.884] },
  { name: 'Labastide',    coords: [43.427, 0.840] },
  { name: 'Fabas',        coords: [43.410, 0.797] },
  { name: 'Saint-Frajou', coords: [43.353, 0.824] },
]
</script>

<style>
/* ======= TUILES : filtre chaud pour coller à la palette dorée ======= */
.delivery-map-wrapper .leaflet-tile-pane {
  filter: sepia(15%) saturate(0.9) brightness(1.03);
}

/* ======= OVERLAY LÉGENDE ======= */
.map-legend {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 800;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  padding: 12px 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.14);
  max-width: 220px;
  border-left: 4px solid #D4831A;
}
.map-legend-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 13px;
  color: #1a1200;
  margin: 0 0 2px;
}
.map-legend-sub {
  font-size: 11px;
  color: #D4831A;
  font-weight: 600;
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.map-legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.map-legend-chip {
  font-size: 10px;
  background: #FEF3E2;
  color: #8a4f00;
  padding: 2px 7px;
  border-radius: 20px;
  font-weight: 500;
  border: 1px solid #F0C070;
}

/* ======= ICONES MARQUEURS ======= */
.map-icon-clean {
  background: transparent !important;
  border: none !important;
}

.pin-bakery,
.pin-commune {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pin-bakery { width: 56px; height: 56px; }
.pin-commune { width: 40px; height: 40px; animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }

.pin-core {
  position: relative;
  z-index: 2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
}
.pin-core--gold {
  width: 50px; height: 50px;
  background: linear-gradient(135deg, #E8940A, #D4831A);
  font-size: 24px;
  box-shadow: 0 4px 16px rgba(212,131,26,0.55);
}
.pin-core--amber {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #F5B830, #E8940A);
  font-size: 17px;
  box-shadow: 0 3px 10px rgba(240,168,50,0.5);
}

.pin-pulse {
  position: absolute;
  inset: -7px;
  border-radius: 50%;
  z-index: 1;
}
.pin-pulse--gold  { background: rgba(212,131,26,0.22); animation: pulse-ring 2.2s ease-out infinite; }
.pin-pulse--amber { background: rgba(240,168,50,0.20); animation: pulse-ring 2.6s ease-out infinite; }

/* ======= TOOLTIPS NOMS DES VILLAGES ======= */
.label-bakery,
.label-commune {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
.label-bakery::before,
.label-commune::before { display: none !important; }

.label-bakery .leaflet-tooltip-content,
.label-commune .leaflet-tooltip-content {
  /* Leaflet wraps content in this element */
}

.label-bakery {
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
  font-size: 13px !important;
  color: #1a1200 !important;
  background: rgba(255,255,255,0.9) !important;
  border: 1.5px solid #D4831A !important;
  border-radius: 8px !important;
  padding: 3px 9px !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
  white-space: nowrap !important;
}

.label-commune {
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  font-size: 11px !important;
  color: #5a3300 !important;
  background: rgba(255,255,255,0.92) !important;
  border: 1px solid #F0C070 !important;
  border-radius: 6px !important;
  padding: 2px 8px !important;
  box-shadow: 0 1px 6px rgba(0,0,0,0.12) !important;
  white-space: nowrap !important;
}

/* ======= ANIMATIONS ======= */
@keyframes pulse-ring {
  0%   { transform: scale(0.8);  opacity: 0.8; }
  70%  { transform: scale(1.8);  opacity: 0; }
  100% { transform: scale(1.8);  opacity: 0; }
}

@keyframes pop-in {
  0%   { transform: scale(0) translateY(10px); opacity: 0; }
  75%  { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
