import { ref } from 'vue'

export function useLogoCanvas() {
  const logoUrl = ref(import.meta.env.BASE_URL + 'images/logo.png')
  return { logoUrl }
}
