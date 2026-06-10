import { ref, onMounted } from 'vue'

export function useLogoCanvas() {
  const logoUrl = ref('/images/logo.avif')

  onMounted(() => {
    const img = new Image()
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width  = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const d = imageData.data
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2]
          const avg  = (r + g + b) / 3
          const span = Math.max(r, g, b) - Math.min(r, g, b)
          const fondSombre = avg < 135 && span < 55 && !(r > g + 35)
          const fondBlanc  = avg > 220 && span < 30
          if (fondSombre || fondBlanc) {
            d[i + 3] = 0
          }
        }
        ctx.putImageData(imageData, 0, 0)
        logoUrl.value = canvas.toDataURL('image/png')
      } catch (_) {}
    }
    img.src = '/images/logo.avif'
  })

  return { logoUrl }
}
