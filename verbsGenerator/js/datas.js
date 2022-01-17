window.Generator = {}; // Ne pas toucher

/*
group: Valeur de 1 à 3 en fonction du groupe
difficulty: Valeur de 1 à X en fonction de la difficulté
pronominal: true si le verbe est pronominal (facultatif)
*/
Generator.VERBS = [
	{ text: 'Danser', group: 1, difficulty: 1 },
	{ text: 'Chanter', group: 1, difficulty: 1 },
	{ text: 'Aimer', group: 1, difficulty: 1 },
	{ text: 'Penser', group: 1, difficulty: 1 },
	{ text: 'Écouter', group: 1, difficulty: 1 },
	{ text: 'Grandir', group: 2, difficulty: 1 },
	{ text: 'Punir', group: 2, difficulty: 1 },
	{ text: 'Bondir', group: 2, difficulty: 1 },
	{ text: 'Sortir', group: 2, difficulty: 1 },
	{ text: 'Atterrir', group: 2, difficulty: 3 },
	{ text: 'Aller', group: 3, difficulty: 2 },
	{ text: 'Coudre', group: 3, difficulty: 3 },
	{ text: 'Vouloir', group: 3, difficulty: 2 },
	{ text: 'Lire', group: 3, difficulty: 2 },
	{ text: 'Construire', group: 3, difficulty: 1 },
	{ text: 'Faire', group: 3, difficulty: 2 },
	{ text: 'Paraître', group: 3, difficulty: 2 },
	{ text: 'Être', group: 3, difficulty: 3 },
	{ text: 'Moudre', group: 3, difficulty: 3 },
	{ text: 'Se promener', group: 1, difficulty: 1, pronominal: true },
	{ text: 'Rayer', group: 1, difficulty: 3 },
	{ text: 'plaindre', group: 3, difficulty: 3 },
	{ text: 'devoir', group: 3, difficulty: 2 },
	{ text: 'Trahir', group: 2, difficulty: 2 },
	{ text: 'Jouer', group: 1, difficulty: 1 },
	{ text: 'Satisfaire', group: 3, difficulty: 2 },
	{ text: 'Agrandir', group: 2, difficulty: 1 },
	{ text: 'Résoudre', group: 3, difficulty: 3 },
	{ text: 'Soigner', group: 1, difficulty: 3 },
	{ text: 'Ennuyer', group: 1, difficulty: 3 },
	{ text: 'Interpeller', group: 1, difficulty: 3 },
	{ text: 'Mordre', group: 3, difficulty: 3 },
	{ text: 'Se mouvoir', group: 3, difficulty: 3, pronominal: true },
	{ text: 'paître', group: 3, difficulty: 3 },
	{ text: 'Valoir', group: 3, difficulty: 3 },
	{ text: 'déguster', group: 1, difficulty: 1 },
	{ text: 'finir', group: 2, difficulty: 1 },
	{ text: 'Déconstruire', group: 3, difficulty: 2 },
	{ text: 'Vêtir', group: 3, difficulty: 3 },
	{ text: 'bâtir', group: 2, difficulty: 2 },
	
	
	
];

/*
Pronom personnel => type: 'personal'
Pronom indéfini => type: 'undefined'
Groupe nominal => type: 'noun'
*/
Generator.SUBJECTS = [
	{ text: 'Je', type: 'personal' },
	{ text: 'Tu', type: 'personal' },
	{ text: 'Il', type: 'personal' },
	{ text: 'Elle', type: 'personal' },
	{ text: 'On', type: 'personal' },
	{ text: 'Nous', type: 'personal' },
	{ text: 'Vous', type: 'personal' },
	{ text: 'Ils', type: 'personal' },
	{ text: 'Elles', type: 'personal' },
	{ text: 'Tous', type: 'undefined' },
	{ text: 'Personne', type: 'undefined' },
	{ text: 'Chacun', type: 'undefined' },
	{ text: 'Quelqu\'un', type: 'undefined' },
	{ text: 'Quelque chose', type: 'undefined' },
	{ text: 'Le gros chat', type: 'noun' },
	{ text: 'Mon voisin', type: 'noun' },
	{ text: 'Sa cousine', type: 'noun' },
	{ text: 'Les voitures bleues', type: 'noun' },
	{ text: 'Les chiens du voisin', type: 'noun' },
	{ text: 'Mon chien et ma perruche', type: 'noun' },
];
