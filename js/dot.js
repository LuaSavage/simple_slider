class Dot {
	
	constructor () { 
		let container = document.getElementsByClassName('dot-container')[0];

		this._image = {
			def: "url(css/img/dot.svg)", 
			hover: "url(css/img/dot_active.svg)"
		};

		this._element = document.createElement('div');
		this._element.className = "dot";
	    container.appendChild(this._element);
	}

	activate(state) {
		this._element.style["background-image"] = state ? this._image.hover : this._image.def;
  	}

}