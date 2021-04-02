export const CATEGORIES = ['Électricité',
    'Agriculture',
    'Industrie',
    'BTP',
    'Services',
    'Transport-logistique',
    'Transport / Logistique',
    'Santé',
    'Hôtellerie / Restauration',
    'Mécanique',
    'Industrie agroalimentaire',
    'Machines, véhicules',
    'Actions sociales, soins à domicile',
    'Chimie/Parachimie',
    'Ingénierie',
    'Médical',
    'Bâtiment - BTP',
    'CVC',
    'Commercial',
    'Tertiaire',
    'Hôtellerie-restauration',
    'Technologies / SI',
    'Nucléaire',
    'Chimie Pharmaceutique',
    'Autres services personnels',
    'Informatique/ Électronique',
    'Distribution / commerce de gros',
    'Bâtiment',
    'Aéronautique'
]

export const TYPES = [
    'Fixe',
    'Temporaire (Indéterminé)',
    'CDD',
    'Job étudiant',
    'Stage/Alternance',
    'Temporaire',
    'Apprenti',
    'CDI',
    'Interim',
]


export const ORDERS = [
    {label: 'Recommandation décroissante', sortBy: 'scoring', orderBy: 'desc'},
    {label: 'Recommandation croissante', sortBy: 'scoring', orderBy: 'asc'},
    {label: 'Recherche décroissante', sortBy: 'searching', orderBy: 'desc'},
    {label: 'Recherche croissante', sortBy: 'searching', orderBy: 'asc'},
    {label: 'Date décroissante', sortBy: 'created_at', orderBy: 'desc'},
    {label: 'Date croissante', sortBy: 'created_at', orderBy: 'asc'},
];


export const  DATESOPTIONS = [
    { label: '1 semaine', value: '1w' },
    { label: '2 semaines', value: '2w' },
    { label: '3 semaines', value: '3w' },
    { label: '1 mois', value: '1m' },
    { label: '2 mois', value: '2m' },
    { label: '3 mois', value: '3m' },
    { label: '4 mois', value: '4m' },
    { label: '5 mois', value: '5m' },
    { label: '6 mois', value: '6m' },
    { label: '1 année', value: '1y' },
    { label: '2 années', value: '2y' },
    { label: '3 années +', value: '3y' },
  ];
  