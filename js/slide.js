class Slide {

	constructor (image, text) { 
		this._bg = document.getElementsByClassName('wrapper')[0];
		this._memo = document.getElementsByClassName('annotation-memo')[0]; 

	    this.dot = new Dot();
	    //this._image = "url(data:image/jpg;base64,"+(image || "")+")";
	    this._image = "url(css/img/"+image+".jpg)";
	    this._text = text || "";

	    document.dispatchEvent(new CustomEvent("onSlideCreated", { detail: { slide: this } }));
	}

	apply() {
		this._bg.style["background-image"] = this._image;
		this._memo.innerHTML = this._text;
		this.dot.activate(true);
  	}

}

new Slide ("01"," asdfasdf ");
new Slide ("02"," asdf adsf asdf dddd ");
new Slide ("03"," aqwer adsf qe rfawer s ");


