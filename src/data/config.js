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
  active:    true,
  dateDebut: '2026-01-01',
  dateFin:   '2026-12-31',
  badge:     '🎟️ Tombola',
  titre:     'Grande Tombola de Printemps',
  sous:      'Tentez votre chance ! Un ticket offert pour tout achat en boutique.',
  dates:     'Du 1er juillet au 10 juillet — tirage le 11 juillet',
  cta:       'En savoir plus',
  image:     '/images promo/1.webp',
  detail: {
    comment: 'Pour chaque achat en boutique, recevez un ticket numéroté. Conservez-le précieusement — plus vous achetez, plus vous multipliez vos chances !',
    lots: [
      { emoji: '🥇', label: '1er prix', description: 'Panier gourmand maison (valeur 80 €)' },
      { emoji: '🥈', label: '2e prix',  description: 'Abonnement pain artisanal 1 mois' },
      { emoji: '🥉', label: '3e prix',  description: 'Box pâtisseries & viennoiseries maison' },
    ],
    conditions: "Jeu sans obligation d'achat. Règlement complet disponible en boutique. Tirage au sort le 30 avril 2026.",
  },
}

export const NAV_LINKS = [
  { to: '/',                  label: 'Accueil' },
  { to: '/pain-patisseries',  label: 'Pain & Pâtisseries' },
  { to: '/snacking-traiteur', label: 'Snacking & Traiteur' },
  { to: '/contact',           label: 'Contact' },
]
