Generator.MainApp = class {
	constructor() {
		this._UIOptions = new Generator.UIOptions();
		this._UIList = new Generator.UIList();
		this._UIOptions.setAddToListCallback(this._UIList.add.bind(this._UIList));
	}

	static showActive(element, isActive) {
		if (isActive) element.classList.add('active');
		else element.classList.remove('active');
	}

	static getPool(options, initPool) {
		for (let j in options) {
			if (options[j].isEmpty()) return 'WRONG PARAM';
		}

		const filteredPool = [];
		for (let i = 0; i < initPool.length; i++) {
			let isValid = true;
			for (let j in options) {
				if (!options[j].isValid(initPool[i])) {
					isValid = false;
					break;
				}
			}
			if (isValid) filteredPool.push(initPool[i]);
		}

		if (filteredPool.length === 0) return 'EMPTY';
		return filteredPool;
	}

	static getRandom(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
};

document.onreadystatechange = () => {
	if (document.readyState == 'complete') {
		new Generator.MainApp();
	}
};