const FluencyTestView = class {
	constructor(fluencyTest) {
		this._fluencyTest = fluencyTest;
		this._lines = fluencyTest.getLines();

        this._parent = document.querySelector('#fluencyTest');
		this.create();
	}

	show() {
        this._parent.classList.remove('hidden');
		this.addEventListeners();
	}

	addEventListeners() {
		this._textDiv.addEventListener("click", this._fluencyTest.onClickWord.bind(this._fluencyTest));
        this._startButton.addEventListener("click",  this.onClickStart.bind(this));
		this._endButton.addEventListener("click", this.onClickEnd.bind(this));
        this._editButton.addEventListener("click", this.onClickEdit.bind(this));
		this._resetButton.addEventListener("click", this.onClickReset.bind(this));
	}

    onClickStart() {
        this.showButton(this._endButton, "Cliquez sur les mots mal prononcés pour les compter en tant qu'erreur. Ils s'afficheront en rouge.<br/>Cliquez sur le bouton pour terminer le test.");
        this._fluencyTest.start();
    }

    onClickReset() {
        const endElement = this._textDiv.querySelector(".end");
		if (endElement) endElement.classList.remove("end");
		this._textDiv.querySelectorAll(".wrong").forEach((element) => {
            this.showWrong(element, false);
		});
        this.showButton(this._startButton, "Cliquez sur le bouton pour démarrer le test.");

        this._fluencyTest.reset();
    }

    onClickEnd() {
        this.showButton(this._editButton, "Cliquez sur le dernier mot lu. Il apparaîtra souligné et le résultat de l'élève s'affichera.<br/>Cliquez sur le bouton si vous souhaitez éditer les erreurs.");
        this._fluencyTest.prepareEnd();
    }

    onClickEdit() {
        this.showButton(this._endButton, "Cliquez sur les mots mal prononcés pour les compter en tant qu'erreur. Ils s'afficheront en rouge.<br/>Cliquez sur le bouton pour terminer le test.");
        this._fluencyTest.prepareEdit();
    }

    showButton(button, rules) {
        button.classList.remove('hidden');
        for (let otherButton of this._buttons) {
            if (otherButton != button) {
                otherButton.classList.add('hidden');
            }
        }
        this._rulesDiv.innerHTML = rules;
    }

	create() {
		this._chronoDiv = this._parent.querySelector('#chronoContainer');
        this._chronoText = this._chronoDiv.querySelector('#chronoText');
        this._chronoText.innerHTML = TEST_DURATION;
        this._chronoPercent = this._chronoDiv.querySelector('#chronoPercent');
        
        this._textDiv = this._parent.querySelector('#textContainer');
		this._textDiv.appendChild(this.createText());

        this._startButton = this._parent.querySelector('#startButton');
		this._endButton = this._parent.querySelector('#endButton');
        this._editButton = this._parent.querySelector('#editButton');
		this._resetButton = this._parent.querySelector('#resetButton');
		this._resultContainer = this._parent.querySelector('#resultContainer');
        this._buttons = [ this._startButton, this._endButton, this._editButton ];
        this._rulesDiv = this._parent.querySelector("#rules");
	}

	createText() {
		const fragment = new DocumentFragment();
		let idWord = 0;
		for (let i = 0; i < this._lines.length; i++) {
			const content = this._lines[i];
			let element;
			if (content.length === 0) {
				element = document.createElement("br");
			} else {
				element = document.createElement("span");
				element.innerHTML = content;
				element.dataset.id = idWord++;
			}
			
			fragment.appendChild(element);
		}
		return fragment;
	}

	updateChrono(time) {
		this._chronoText.innerHTML = time;
		const percent = 100 - (100 * time / TEST_DURATION);
		this._chronoPercent.style.width = `${percent}%`;
	}

	resetChrono() {
        this.updateChrono(TEST_DURATION);
	}

	getSpanWord(idWord) {
		return this._textDiv.querySelector(`span[data-id="${idWord}"]`);
	}

	showWrong(span, isWrong = true) {
		if (isWrong) span.classList.add("wrong");
		else span.classList.remove("wrong");
	}

	showLastWord(span, isLast = true) {
		if (isLast) span.classList.add("end");
		else span.classList.remove("end"); 
	}

	showEnd(remainingTime, totalReadWords, totalWrongWords) {
		this._resultContainer.innerHTML = `
            <p>Temps : ${TEST_DURATION - remainingTime} secondes</p>
            <p>Nombre de mots lus : ${totalReadWords}</p>
            <p>Erreurs : ${totalWrongWords}</p>
            <p class="bold">Score de fluence : ${totalReadWords - totalWrongWords}</p>
        `;
	}
};