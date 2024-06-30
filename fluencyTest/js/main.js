const TEST_DURATION = 60; // Durée du test en secondes

const MainApp = class {
	constructor() {}

	static initialize() {
		const textSelection = new TextSelection();
		textSelection.show();
	}
};

MainApp.initialize();