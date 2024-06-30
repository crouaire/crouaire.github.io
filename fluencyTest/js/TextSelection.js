const TextSelection = class {
	constructor() {
        this._parent = document.querySelector('#textSelection');

        this._textSelector = this._parent.querySelector('.customChoice');
        this._predefinedChoice = this._parent.querySelector('.predefinedChoice');
	}

	show() {
		this.addEventListeners();
	}

	addEventListeners() {
		this._textSelector.addEventListener("change", this.onChangeTextSelector.bind(this));
		this._predefinedChoice.addEventListener("click", this.onClickPredefinedChoice.bind(this));
	}

	async onClickPredefinedChoice(e) {
		this.createFluencyTest("");
		// var xhr = new XMLHttpRequest();
		// xhr.open("GET", "/fluencyTest/leGeant.txt");
		// xhr.responseType = "blob";
		// xhr.onload = () => {
		// 	this.readFile(xhr.response);
		// };
		// xhr.send();		
	}

	async onChangeTextSelector(e) {
		if (this._textSelector.files.length > 0) {
			const file = this._textSelector.files[0];
			this.readFile(file);
		}
	}

	async readFile(file) {
		const lines = await Parser.parse(file);
		console.log(lines);
		this.createFluencyTest(lines);
	}

	createFluencyTest(lines) {
		lines = [
			"Tous",
			"les",
			"après-midi,",
			"en",
			"revenant",
			"de",
			"l'école,",
			"les",
			"enfants",
			"allaient",
			"jouer",
			"dans",
			"le",
			"jardin",
			"du",
			"Géant.",
			"C'était",
			"un",
			"grand",
			"et",
			"ravissant",
			"jardin",
			"avec",
			"une",
			"douce",
			"herbe",
			"verte.",
			"Ça",
			"et",
			"là,",
			"sur",
			"l’herbe,",
			"il",
			"y",
			"avait",
			"de",
			"belles",
			"fleurs",
			"qui",
			"ressemblaient",
			"à",
			"des",
			"étoiles,",
			"et",
			"il",
			"y",
			"avait",
			"douze",
			"pêchers",
			"qui,",
			"au",
			"printemps,",
			"s’épanouissaient",
			"en",
			"délicates",
			"floraisons",
			"couleur",
			"de",
			"rose",
			"et",
			"de",
			"perle,",
			"et,",
			"en",
			"automne,",
			"portaient",
			"des",
			"fruits",
			"magnifiques.",
			"Les",
			"oiseaux,",
			"assis",
			"sur",
			"les",
			"arbres,",
			"chantaient",
			"si",
			"joliment",
			"que",
			"les",
			"enfants",
			"s’arrêtaient",
			"de",
			"jouer",
			"pour",
			"les",
			"écouter.",
			"",
			"« Comme",
			"nous",
			"sommes",
			"heureux",
			"ici !»",
			"s'écriaient-ils.",
			"",
			"Un",
			"jour,",
			"le",
			"Géant",
			"revint.",
			"Il",
			"était",
			"allé",
			"visiter",
			"son",
			"ami,",
			"l’Ogre",
			"de",
			"Cornouailles,",
			"et",
			"était",
			"resté",
			"sept",
			"ans",
			"avec",
			"lui.",
			"Au",
			"bout",
			"de",
			"sept",
			"ans,",
			"il",
			"avait",
			"dit",
			"tout",
			"ce",
			"qu'il",
			"avait",
			"à",
			"dire,",
			"car",
			"sa",
			"conversation",
			"était",
			"limitée,",
			"et",
			"il",
			"avait",
			"décidé",
			"de",
			"retourner",
			"dans",
			"son",
			"château.",
			"Quand",
			"il",
			"arriva,",
			"il",
			"vit",
			"les",
			"enfants",
			"jouer",
			"dans",
			"le",
			"jardin.",
			"",
			"« Que",
			"faites-vous",
			"ici ?»",
			"s’écria-t-il",
			"d'une",
			"voix",
			"très",
			"rude,",
			"et",
			"les",
			"enfants",
			"s’enfuirent.",
			"",
			"« Mon",
			"jardin",
			"à",
			"moi",
			"est",
			"mon",
			"jardin",
			"à",
			"moi »,",
			"dit",
			"le",
			"Géant ;",
			"« tout",
			"le",
			"monde",
			"peut",
			"comprendre",
			"cela,",
			"et",
			"je",
			"ne",
			"laisserai",
			"personne",
			"d'autre",
			"que",
			"moi",
			"y",
			"jouer.»",
			"Et",
			"il",
			"construisit",
			"tout",
			"autour",
			"un",
			"mur",
			"très",
			"haut",
			"et",
			"mit",
			"un",
			"écriteau :",
			"",
			"DEFENSE",
			"D'ENTRER",
			"SOUS",
			"PEINE",
			"D’AMENDE.",
			"",
			"C'était",
			"un",
			"Géant",
			"très",
			"égoïste.",
			"Les",
			"pauvres",
			"enfants",
			"n'avaient",
			"plus",
			"d’endroit",
			"pour",
			"jouer.",
			"Ils",
			"essayèrent",
			"de",
			"jouer",
			"sur",
			"la",
			"route,",
			"mais",
			"la",
			"route",
			"était",
			"très",
			"poussiéreuse",
			"et",
			"pleine",
			"de",
			"gros",
			"cailloux,",
			"et",
			"ils",
			"n’aimaient",
			"pas",
			"cela.",
			"Après",
			"avoir",
			"appris",
			"leurs",
			"leçons,",
			"ils",
			"erraient",
			"autour",
			"du",
			"mur",
			"en",
			"parlant",
			"du",
			"beau",
			"jardin",
			"qui",
			"était",
			"à",
			"l’intérieur.",
			"",
			"« Comme",
			"nous",
			"y",
			"étions",
			"heureux ! »",
			"disaient-ils",
			"entre",
			"eux."
		  ];
		const fluencyTest = new FluencyTest(lines);
		fluencyTest.show();
        this._parent.classList.add('hidden');
	}
};