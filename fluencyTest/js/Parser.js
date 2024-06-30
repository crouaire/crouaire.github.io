const Parser = class {
	static parse(file) {
		return new Promise((accept, reject) => {
			const reader = new FileReader();
	        reader.onload = (e) => {
	            let contents = reader.result;
	            contents = contents.replace(/\r/g, '');

	            let lines = contents.split('\n');
	       		accept(lines);
	        };
	        reader.readAsText(file);
		});
	}
};