Generator.Option = class {
	constructor(name, type) {
		this._name = name;
		this._type = type || 'multiple';

		this._value = Option.DEFAULT_VALUES[name] ?? [];
	}

	update(newValue) {
		if (!isNaN(newValue)) newValue = parseInt(newValue, 10);

		if (this._type === 'multiple') {
			const index = this._value.indexOf(newValue);
			if (index !== -1) {
				this._value.splice(index, 1);
				return false;
			}
			this._value.push(newValue);
			return true;
		} else if (this._type === 'bool') {
			this._value = !this._value;
			return this._value;
		}
	}

	isEmpty() {
		if (this._type === 'multiple') return this._value.length === 0;
		return false;
	}

	isValid(poolItem) {
		if (this._name in poolItem) {
			if (this._type === 'multiple') {
				return this._value.indexOf(poolItem[this._name]) !== -1;
			} else if (this._type === 'bool') {
				return poolItem[this._name] === this._value;
			}
		}
		return true;
	}
};

Option.DEFAULT_VALUES = {
	group: [ 1 ],
	difficulty: [ 1 ],
	pronominal: false
};