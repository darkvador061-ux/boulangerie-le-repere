/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ardoise bleu-gris du logo Le Repère (fond ovale)
        brun: {
          50:  '#F3F4F6',
          100: '#E0E2E8',
          200: '#BEC3CC',
          300: '#939AA8',
          400: '#6A7080',
          500: '#4A4F5E',  // couleur exacte du fond ovale du logo
          600: '#3C4050',
          700: '#2E3142',
          800: '#222535',
          900: '#181B28',
        },
        // Rose poudré du logo (texte "Le Repère")
        rose: {
          300: '#E8A8C4',
          400: '#D98BB0',
          500: '#C4769A',  // couleur exacte du texte du logo
          600: '#A85F80',
          700: '#8A4A66',
        },
        // Ambre chaud de l'enseigne extérieure
        dore: {
          50:  '#FDF6EC',
          100: '#FAE9CE',
          200: '#F4D29C',
          300: '#F2BC64',
          400: '#F0A832',
          500: '#D4831A',
          600: '#B06810',
          700: '#8A5210',
          800: '#5E380B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
