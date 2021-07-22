Odyssey.class.Story = class {
	constructor(data, storyNumber) {
		const storyData = data;
		this._title = storyData.title;
		this._text = storyData.text;

		const div = document.createElement('div');
		div.classList.add('story');
		div.dataset.id = storyNumber;
		div.innerHTML = `<p>${this._title}</p>`;
		
		this._div = div;
	}

	getDiv() {
		return this._div;
	}

	getTitle() {
		return this._title;
	}

	show(parent) {
		const div = document.createElement('div');
		div.classList.add('storyContent');
		
		this._contentDiv = div;
		parent.appendChild(this._contentDiv);

       	div.innerHTML = `<button class="reversedBtn backBtn"><</button>`;
        div.innerHTML += `<div class="storyTitle"><h2>${this._title}</h2></div>`;
        div.innerHTML += `<div class="storyText"><p>${this._text}</p></div>`;
	}

	hide() {
		this._contentDiv.classList.add('hideToRight');
		window.setTimeout(() => this._contentDiv.remove(), 990);
	}
};