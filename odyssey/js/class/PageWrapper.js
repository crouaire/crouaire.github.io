Odyssey.class.PageWrapper = class {
	constructor(id) {
		this._div = document.querySelector(id);
		this._pages = [];
		this._currentPage = null;
	}

	onStoryMouseOver(storyDiv) {
		storyDiv.innerHTML = `<p>Lire l'histoire</p>`;
	}

	onStoryMouseOut(storyDiv) {
		const storyNumber = parseInt(storyDiv.dataset.id, 10);
		storyDiv.innerHTML = this._currentPage.getStoryTitle(storyNumber);
	}

	onStoryClicked(storyDiv) {
		const storyNumber = parseInt(storyDiv.dataset.id, 10);
		const story = this._currentPage.getStory(storyNumber);
		story.show(this._div);
		this._currentStory = story;
	}

	showPrevPage() {
		if (!this._currentPage) return;
		this.showPage(this._currentPage.getStepNumber() - 1);
	}

	showNextPage() {
		if (!this._currentPage) return;
		this.showPage(this._currentPage.getStepNumber() + 1);
	}

	showPage(stepNumber) {
		if (this._currentPage) this._currentPage.hide();
		else this._div.classList.remove('hidden');

		this._currentPage = new Odyssey.class.Page(stepNumber, this._div);
	}

	hideStory() {
		if (!this._currentStory) return;
		this._currentStory.hide();
		this._currentStory = null;
	}

	hide() {
		this.hideStory();
		if (this._currentPage) {
			this._currentPage.hide();
			this._currentPage = null;
		}
		window.setTimeout(() => {
			this._div.querySelector('#backgroundWrapper').classList.add('downOpacity');
			window.setTimeout(() => {
				this._div.classList.add('hidden');
				this._div.querySelector('#backgroundWrapper').classList.remove('downOpacity');
			}, 500);
		}, 490);
	}
}