import { ref } from 'vue'

export function useLogoCanvas() {
  const logoUrl = ref('/images/logo-temp.svg')
  return { logoUrl }
}
