import { ref } from 'vue'

export function useLogoCanvas() {
  const logoUrl = ref(import.meta.env.BASE_URL + 'images/logo-temp.svg')
  return { logoUrl }
}
