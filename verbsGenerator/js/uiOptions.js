Generator.UIOptions = class {
	constructor() {
		this._container = document.querySelector('#addVerb');

		this._verbsOptions = {};
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

		document.querySelector('#generationButton').addEventListener('click', this.onClickGeneration.bind(this));
		document.querySelector('#customAddButton').addEventListener('click', this.onClickCustomAdd.bind(this));
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

	onClickGeneration() {
		const verbsPool = Generator.MainApp.getPool(this._verbsOptions, Generator.VERBS);		
		const randomVerb = Generator.MainApp.getRandom(verbsPool);

		let randomSubject = null;
		const useSubject = !this._subjectsOptions.type.isEmpty();
		if (useSubject) {
			const subjectsPool = Generator.MainApp.getPool(this._subjectsOptions, Generator.SUBJECTS);
			randomSubject = Generator.MainApp.getRandom(subjectsPool);
		}

		this._addToListCallback(randomSubject, randomVerb);
	}

	onClickCustomAdd(event) {
		const parent = event.target.parentNode;
		const inputs = parent.querySelectorAll('input');

		let subject = { text: inputs[0].value };
		if (subject.text.length === 0) subject = null;

		let difficulty = inputs[2].value;
		difficulty = (difficulty.length > 0 ? parseInt(difficulty, 10) : 1);

		const verb = { text: inputs[1].value, difficulty };
		if (verb.text.length === 0) return 'WRONG PARAM';

		this._addToListCallback(subject, verb);

		// Clear inputs
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
	}

	toggleVisibility() {
		this._container.classList.toggle('hide');
	}
};
