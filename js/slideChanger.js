class SlideChanger {

	constructor (slideLifetime) { 
		this._slideList = [];
		this._lastSelectedID = 0;

		slideLifetime = Number(slideLifetime) || 1000;
		slideLifetime < 0 ? 1000 : slideLifetime;
		
		this._lifeTime = slideLifetime;

		this._isTransitionActivated = false;

		let wrapper = document.getElementsByClassName("wrapper")[0];
		this._transitionTime = parseFloat(window.getComputedStyle(wrapper, null)["transition-duration"])*1000;
	}

	get lifeTime () {
		return this._lifeTime;
	}

	set lifeTime (value) {
		value = Number(value) || 1000;
		value < 0 ? 1000 : value;
		this._lifeTime = value;
	}

	_activateTransition () {
		if (this._isTransitionActivated) return false;

		changer._isTransitionActivated = true;

		setTimeout(function(changer){
			changer._isTransitionActivated = false;
		}, this._transitionTime, this);
	}

	setTimer ()	{
		clearTimeout(this._timer);
		this._timer = setInterval(function(changer){
			changer.select(1);
		}, this.lifeTime, this);
	}	

	addSlide (slide) {
		if ((typeof slide) === "object"){
			if (slide.constructor.name !== "Slide")	return false;
		}
		else{	
			return false;
		}

		this._slideList.push(slide);

		if (this._slideList.length == 1){
			this.select(1);
			this.setTimer();
		}
	}

	select (bias) {
		if (this._isTransitionActivated) return false;

		bias = Math.round(Number(bias)||0);
		bias = bias/Math.abs(bias);
		this._lastSelectedID += bias;

		let maxIndex = this._slideList.length-1;
		if (this._lastSelectedID > maxIndex) this._lastSelectedID = 0;
		if (this._lastSelectedID < 0) this._lastSelectedID = maxIndex;

		for (let i = 0; i<(maxIndex+1); i++){
			if (this._lastSelectedID === i) this._slideList[i].apply();
			this._slideList[i].dot.activate(this._lastSelectedID === i ? true: false);
		}

		this._activateTransition();
  	}

}

let changer = new SlideChanger(3000);

document.addEventListener("onSlideCreated", function(event) { 
	changer.addSlide(event.detail.slide);
});