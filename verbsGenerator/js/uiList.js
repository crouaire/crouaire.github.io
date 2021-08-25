Generator.UIList = class {
	constructor() {
	}
	
	add(subject, verb) {
		const div = document.querySelector('#verbsList');

		const newDiv = document.createElement('div');
		if (subject) {
			newDiv.innerHTML += `${subject.text} - `;
		}
		newDiv.innerHTML += `${verb.text}`;
		div.appendChild(newDiv);
	}
};