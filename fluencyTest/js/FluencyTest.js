const FluencyTest = class {
	constructor(lines) {
		this._lines = lines;
		this._wrongWords = [];
		this._mode = "notStarted";
		this._lastWord = -1;

		this._view = new FluencyTestView(this);		
	}

	show() {
		this._view.show();
	}

	getLines() {
		return this._lines;
	}

	clearChrono(isReset = false) {
		clearInterval(this._chronoInterval);
		this._chronoInterval = null;
		if (isReset) this._view.resetChrono();
	}

	lanceChrono() {
		if (this._chronoInterval) this.clearChrono(true);

		this._time = this._remainingTime = TEST_DURATION;
		this._view.updateChrono(this._time);

		this._chronoInterval = setInterval(() => {
			this._time -= 1;
			if (this._time === 0) this.clearChrono();
			this._view.updateChrono(this._time);
		}, 1000);
	}

    start(e) {
        if (this._mode === "notStarted") {
            this._mode = "reading";
            this.lanceChrono();
        }
    }

	prepareEnd() {
		if (this._mode === "reading") {
            this.clearChrono();

			this._remainingTime = this._time;
			this._mode = "end";
		}
	}

    prepareEdit() {
		if (this._mode === "end") {
			this._mode = "reading";
			this.setLastWord(-1);
		}
	}

	reset() {
		this._mode = "notStarted";
		this._wrongWords = [];
        this.clearChrono(true);
	}

	onClickWord(e) {
		const span = e.target;
		const wordId = span.dataset.id;
		if (!wordId) return;

		if (this._mode === "reading") {
			const alreadyExists = this._wrongWords.indexOf(wordId);
			if (alreadyExists === -1) {
				this._wrongWords.push(wordId);
				this._view.showWrong(span);
			} else {
				this._wrongWords.splice(alreadyExists, 1);
				this._view.showWrong(span, false);
			}
		} else if (this._mode === "end") {
			this.setLastWord(wordId, span);
		}
	}

	setLastWord(wordId, span) {
		if (this._lastWord !== -1) {
			const lastSpan = this._view.getSpanWord(this._lastWord);
			this._view.showLastWord(lastSpan, false);
		}

		if (wordId !== -1) {
			this._lastWord = wordId;
			this._view.showLastWord(span);
			this.showEnd();
		}
	}

	showEnd() {
		const totalReadWords = parseInt(this._lastWord, 10) + 1;
		const totalWrongWords = this._wrongWords.length;
		this._view.showEnd(this._remainingTime, totalReadWords, totalWrongWords);
	}
};