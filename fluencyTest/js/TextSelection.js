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
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/fluencyTest/leGeant.txt");
		xhr.responseType = "blob";
		xhr.onload = () => {
			this.readFile(xhr.response);
		};
		xhr.send();		
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
		const fluencyTest = new FluencyTest(lines);
		fluencyTest.show();
        this._parent.classList.add('hidden');
	}
};