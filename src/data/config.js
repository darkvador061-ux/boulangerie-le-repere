export const TELEPHONE      = '05 61 89 60 70'
export const TELEPHONE_HREF = 'tel:0561896070'
export const ADRESSE_LIGNE1 = '3 le Pont Neuf'
export const ADRESSE_LIGNE2 = "31230 l'Isle-en-Dodon"

export const SOCIAL_LINKS = {
  facebook:  'https://www.facebook.com/boulangerielerepere',
  instagram: 'https://www.instagram.com/boulangerielerepere',
}

export const COMMUNES = [
  'Isle-en-Dodon', 'Coueilles', 'Riolas', 'Cazac', 'Labastide', 'Fabas', 'Saint-Frajou',
]

export const HORAIRES = [
  { jour: 'Lundi',     heure: '6h30 – 19h30' },
  { jour: 'Mardi',     heure: '6h30 – 19h30' },
  { jour: 'Mercredi',  heure: 'Fermé', ferme: true },
  { jour: 'Jeudi',     heure: '6h30 – 19h30' },
  { jour: 'Vendredi',  heure: '6h30 – 19h30' },
  { jour: 'Samedi',    heure: '6h30 – 19h30' },
  { jour: 'Dimanche',  heure: '6h30 – 14h30' },
]

export const PROMO = {
  active:    false,          // ← mettre true pour activer
  dateDebut: '2025-12-18',
  dateFin:   '2025-12-24',
  badge:     'Offre spéciale',
  titre:     'Bûches de Noël artisanales',
  sous:      'Chocolat, fruits rouges ou praliné — sur commande',
  dates:     'Disponibles du 18 au 24 décembre',
  cta:       'Nous contacter',
  ctaLien:   '/contact',
  image:     '/images/mignardises-vitrine.jpg', // ← remplacer par la vraie photo promo
}

export const NAV_LINKS = [
  { to: '/',                  label: 'Accueil' },
  { to: '/pain-patisseries',  label: 'Pain & Pâtisseries' },
  { to: '/snacking-traiteur', label: 'Snacking & Traiteur' },
  { to: '/contact',           label: 'Contact' },
]
