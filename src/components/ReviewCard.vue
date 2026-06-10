<template>
  <div class="review-card">
    <!-- Étoiles -->
    <div class="flex gap-0.5 mb-3">
      <span v-for="s in 5" :key="s" class="text-base" :class="s <= review.stars ? 'text-yellow-400' : 'text-brun-200'">★</span>
    </div>

    <!-- Citation -->
    <p class="review-text">
      <span class="review-quote">"</span>{{ review.text }}<span class="review-quote">"</span>
    </p>

    <!-- Auteur -->
    <div class="flex items-center gap-3 mt-4 pt-4 border-t border-brun-100">
      <div
        class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        :style="{ backgroundColor: review.color }"
      >
        {{ review.name[0] }}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-brun-900 text-sm truncate">{{ review.name }}</p>
        <p class="text-xs text-brun-400">{{ review.date }}</p>
      </div>
      <!-- Logo Google mini -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4 flex-shrink-0 opacity-60">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.review-card {
  width: 300px;
  flex-shrink: 0;
  background: white;
  border: 1px solid #E0E2E8;
  border-radius: 16px;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.review-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.review-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #6A7080;
  font-style: italic;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-quote {
  color: #D4831A;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0;
  vertical-align: -3px;
}
</style>
