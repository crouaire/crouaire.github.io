Odyssey.class.Map = class {
	constructor(id) {
		this._track = L.polyline(Odyssey.coordsForStep, { color: '#0f4d57', dashArray: '10, 10' });
		const trackBounds = this._track.getBounds();

      	this._map = L.map('map', {
		    center: trackBounds.getCenter(),
		    zoom: 6,
		    maxBounds: trackBounds.pad(0.25)
			}
		);
		this.createTileLayer();

		this._track.addTo(this._map);
		this.createMarkers();

        L.control.scale().addTo(this._map);
  	}	

  	createTileLayer() {
  		L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
        	minZoom: 5,
        	maxZoom: 8,
        	subdomains: 'abcd',
        	attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
      	}).addTo(this._map);
  	}

  	createMarkers() {
  		for (let i = 0; i < Odyssey.steps.length; i++) {
      		let paramsIcon;
	      	if (Odyssey.steps[i].markerOrientation == 'left') {
	      		paramsIcon = {
	      			className: 'numberIconRight',
					iconSize: [50, 40], iconAnchor: [0, 2]
				};
	      	} else if (Odyssey.steps[i].markerOrientation == 'right') {
				paramsIcon = {
				    className: 'numberIconLeft',
				    iconSize: [50, 40], iconAnchor: [47, 2]     
				};
	      	} else if (Odyssey.steps[i].markerOrientation == 'bottom') {
	      		paramsIcon = {
			      	className: 'numberIconBottom',
			      	iconSize: [30, 46], iconAnchor: [15, 0] 
				};
	      	} else {
	      		paramsIcon = {
				    className: 'numberIconTop',
				    iconSize: [30, 46], iconAnchor: [15, 42]       
				};
	      	}
	      	paramsIcon.html = `${i + 1}`;
					 
			const marker = new L.marker(Odyssey.coordsForStep[i], { icon: L.divIcon(paramsIcon) });
			marker.on('click', () => Odyssey.pageWrapper.showPage(i));
			marker.addTo(this._map);
	    }
  	}			
}