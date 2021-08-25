Generator.UIOptions = class {
	constructor() {
		this._verbsOptions = {};

		this._useSubject = false;
		this._subjectsOptions = {};

		const optionContainers = document.querySelectorAll('.optionContainer');
		optionContainers.forEach(this.initOption.bind(this));

		this.createListeners();
	}

	setAddToListCallback(callback) {
		this._addToListCallback = callback;
	}

	initOption(container) {
		const optionName = container.getAttribute('data-option-name');
		const optionType = container.getAttribute('data-option-type');
		const optionPool = container.getAttribute('data-option-pool');

		const option = new Generator.Option(optionName, optionType);
		if (optionPool === 'verbs') this._verbsOptions[optionName] = option;
		else this._subjectsOptions[optionName] = option;
	}

	createListeners() {
		const optionChoices = document.querySelectorAll('.optionChoice');
		optionChoices.forEach(choice => {
			choice.addEventListener('click', this.onClickOption.bind(this));
		});

		document.querySelector('#subjectActivate').addEventListener('click', this.onClickSubjectActivate.bind(this));
		document.querySelector('#generationButton').addEventListener('click', this.onClickGeneration.bind(this));
	}

	onClickOption(event) {
		const target = event.currentTarget;
		const targetValue = target.getAttribute('data-value');
		const optionName = target.parentNode.getAttribute('data-option-name');
		
		let isActive;
		if (this._verbsOptions[optionName])
			isActive = this._verbsOptions[optionName].update(targetValue);
		else 
			isActive = this._subjectsOptions[optionName].update(targetValue);
		Generator.MainApp.showActive(target, isActive);
	}

	onClickSubjectActivate(event) {
		this._useSubject = !this._useSubject;

		document.querySelector('#subjectChoice').classList.toggle('hide');
		Generator.MainApp.showActive(event.target, this._useSubject);
	}

	onClickGeneration() {
		const verbsPool = Generator.MainApp.getPool(this._verbsOptions, Generator.VERBS);		
		const randomVerb = Generator.MainApp.getRandom(verbsPool); // TODO

		let randomSubject = null;
		if (this._useSubject) {
			const subjectsPool = Generator.MainApp.getPool(this._subjectsOptions, Generator.SUBJECTS);
			randomSubject = Generator.MainApp.getRandom(subjectsPool);
		}

		this._addToListCallback(randomSubject, randomVerb);
	}
};
