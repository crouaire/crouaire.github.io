Odyssey.initEvents = function () {
	window.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains('prevPageBtn')) {
			Odyssey.pageWrapper.showPrevPage();
		} else if (target.classList.contains('nextPageBtn')) {
			Odyssey.pageWrapper.showNextPage();
		} else if (target.classList.contains('exitBtn')) {
			Odyssey.pageWrapper.hide();
		} else if (target.classList.contains('backBtn')) {
			Odyssey.pageWrapper.hideStory();
		} else if (target.id == 'backgroundWrapper') {
			Odyssey.pageWrapper.hide();
		} else {
			const nearStory = target.closest('.story');
			if (nearStory) {
				Odyssey.pageWrapper.onStoryClicked(nearStory);
			}
		}
	});

	window.addEventListener('mouseover', (e) => {
		const target = e.target;
		const nearStory = target.closest('.story');
		if (nearStory) {
			Odyssey.pageWrapper.onStoryMouseOver(nearStory);
		}
	});

	window.addEventListener('mouseout', (e) => {
		const target = e.target;
		const nearStory = target.closest('.story');
		if (nearStory) {
			Odyssey.pageWrapper.onStoryMouseOut(nearStory);
		}
	});
};