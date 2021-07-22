Odyssey.class.Page = class {
	constructor(stepNumber, parent) {
		this._stepNumber = stepNumber;
		this._div = this.createHtml();
		parent.appendChild(this._div);
	}

	createHtml() {
		const div = document.createElement('div');
		div.classList.add('pageContent');

       	div.appendChild(this.createExitBtn());
       	div.appendChild(this.createHeader());

       	const contentDiv = document.createElement('div');
       	contentDiv.classList.add('summary');

       	contentDiv.innerHTML += this.createContent();
       	contentDiv.appendChild(this.createStories(Odyssey.steps[this._stepNumber].stories));

       	div.appendChild(contentDiv);
        div.appendChild(this.createPageNav());

        return div;
	}

	createContent() {
		return `<h3>Résumé</h3>
				${Odyssey.steps[this._stepNumber].summary}
				<h3>Histoires</h3>`;
	}

	createStories(stories) {
		const storiesWrapper = document.createElement('div');
        storiesWrapper.classList.add('stories');

        this._stories = [];
        for (let i = 0; i < stories.length; i++) {
        	if (i%2 == 0 && stories.length > 3) {
        		const lineBreak = document.createElement('div');
        		lineBreak.classList.add('lineBreak');
        		storiesWrapper.appendChild(lineBreak);
        	}
        	const story = new Odyssey.class.Story(stories[i], i);
        	this._stories[i] = story;
        	storiesWrapper.appendChild(story.getDiv());
        }

       	return storiesWrapper;
	}

	createExitBtn() {
		const exitBtn = document.createElement('button');
		exitBtn.classList.add('btn', 'exitBtn');
		exitBtn.innerText = 'X';
		return exitBtn;
	}

	createHeader() {
		const div = document.createElement('div')
		div.classList.add('pageHeader');
		div.innerHTML = `<p>- Étape ${this._stepNumber + 1} -</p><h2>${Odyssey.steps[this._stepNumber].name}</h2>`;
		return div;
	}

	createPageNav() {
		const div = document.createElement('div');
		div.classList.add('navBtnWrapper');

		if (this._stepNumber > 0) {
			const prevBtn = document.createElement('button');
			prevBtn.classList.add('btn', 'prevPageBtn');
			prevBtn.innerText = '<';
			div.appendChild(prevBtn);
		}

		const separator = document.createElement('div');
		separator.classList.add('separator');
		div.appendChild(separator);

		if (this._stepNumber < Odyssey.totalSteps - 1) {
			const nextBtn = document.createElement('button');
			nextBtn.classList.add('btn', 'nextPageBtn');
			nextBtn.innerText = '>';
			div.appendChild(nextBtn);
		}

		return div;
	}

	getStoryTitle(storyNumber) {
		return this.getStory(storyNumber).getTitle();
	}

	getStory(storyNumber) {
		return this._stories[storyNumber];
	}

	getStepNumber() {
		return this._stepNumber;
	}

	hide() {
		this._div.classList.add('hideToRight');
		window.setTimeout(() => this._div.remove(), 990);
	}

	getDiv() {
		return this._div;
	}
};