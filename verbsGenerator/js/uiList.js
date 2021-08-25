Generator.UIList = class {
	constructor() {
		this._container = document.querySelector('#verbsList');
		this._isFullPage = false;
	}
	
	add(subject, verb) {
		const div = this.createEntryDiv(subject, verb);
		div.querySelector('.buttonDelete').addEventListener('click', (event) => {
			div.remove();
		});
		this._container.appendChild(div);
	}

	getDifficultyHtml(difficulty) {
		let html = '';
		for (let i = 0; i < difficulty; i++) {
			html += '*';
		}
		return html;
	}

	createEntryDiv(subject, verb) {
		const div = document.createElement('div');
		div.classList.add('entry');

		let html = '';
		if (subject) html += `<p>${subject.text} - `;
		html += `${verb.text} (${this.getDifficultyHtml(verb.difficulty)})</p>`;
		html += '<p class="buttonDelete">X</p>';
		div.innerHTML = html;

		return div;
	}

	setFullPage() {
		this._container.classList.toggle('fullPage');
		this._isFullPage = !this._isFullPage;
	}
};