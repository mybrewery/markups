"use strict";

var Slider = function(target, options) {
	this._options = options || {
		mainDimension: "width",
		aspectRatio:   4/3
	};

	this._position = -1;
	this._amount = 0;

	this._target = target;
	this._urls = this._extractImages(target);
	this._images = [];
	this._indicators = [];
	this._setupLayout(target);
	this.addMultiple(this._urls);
	target.classList.add("ready");
	this._updateSize();

	window.addEventListener("resize", this._updateSize.bind(this));
	window.addEventListener("orientationchange", this._updateSize.bind(this));
}

Slider.prototype = {
	add: function(src) {
		this._addIndicator(this._amount);
		this._addImage(src, this._amount);
		this.setPosition(0);

		this._amount++;
	},

	addMultiple: function(images) {
		this.tools.loop(images, function(image){
			this.add(image);
		}.bind(this))
	},

	setPosition: function(value) {
		value = (this._images.length + value) % this._images.length;

		this.tools.loop(this._images, function(wrapper){
			wrapper.classList.remove("slider-current");
		}.bind(this));

		this.tools.loop(this._indicators, function(dot){
			dot.classList.remove("slider-indicator-active");
		}.bind(this));

		this._fitImageSize(this._images[value].image);
		this._images[value].classList.add("slider-current");
		this._indicators[value].classList.add("slider-indicator-active");

		this._position = value;
	},

	startSlideShow: function(num) {
		this._intervalId = setInterval(function() {
			this.setPosition(this._position + 1);
		}.bind(this), 4000)
	},

	stopSlideShow: function() {
		clearInterval(this._intervalId);
	},

	_fitImageSize: function(image) {
		var imageAspectRatio = image.naturalWidth / image.naturalHeight;
		var sliderAspectRatio = this._options.aspectRatio;

		if(imageAspectRatio > sliderAspectRatio) {
			image.style.height = "100%"
		} else {
			image.style.width = "100%"
		}
	},

	_updateSize: function() {
		var currentWidth = this._currentWidth = this._target.clientWidth;
		var currentHeight = this._currentHeight = this._target.clientHeight;

		if(this._options.mainDimension === "width") {
			this._currentHeight = currentWidth / this._options.aspectRatio;
			this._target.style.height = this._currentHeight + "px";
		} else {
			this._currentWidth = currentHeight / this._options.aspectRatio;
			this._target.style.width = this._currentWidth + "px";
		}
	},

	_extractImages: function(target) {
		var result = [];
		var images = target.querySelectorAll("img");

		for (var i = 0; i < images.length; i++) {
			result[i] = images[i].getAttribute("src");
			images[i].remove();
		}

		return result;
	},

	_wrapImage: function(image, index) {
		var wrapper = this.tools.create("div");
		wrapper.classList.add("image-wrapper");
		wrapper.setAttribute("data-index", index);
		wrapper.appendChild(image);
		wrapper.image = image;

		return wrapper;
	},

	_addIndicator: function(index) {
		var _this = this;
		var indicator = this.tools.create("div");
		indicator.classList.add("slider-indicator");
		indicator.setAttribute("data-index", index);
		this._target.control.indicators.appendChild(indicator);
		this._indicators.push(indicator);

		indicator.addEventListener("click", function(){
			_this.setPosition(index);
		});
	},

	_addImage: function(src, index) {
		var image = this.tools.create("img");
		image.setAttribute("src", src);

		var wrappedImage = this._wrapImage(image, index);
		this._images.push(wrappedImage);
		this._target.slidesWrapper.appendChild(wrappedImage);
	},

	_setupLayout: function(target) {
		var slidesWrapper = this.tools.create("div");
		slidesWrapper.classList.add("slides-wrapper");

		var control = this.tools.create("div");
		control.classList.add("slider-control");
		this._setupControl(control);

		target.appendChild(slidesWrapper);
		target.appendChild(control);

		target.control = control;
		target.slidesWrapper = slidesWrapper;

		target.onmouseover = this.stopSlideShow.bind(this);
		target.onmouseout = this.startSlideShow.bind(this);
	},

	/* control */
	_setupControl: function(control) {
		var prevButton = this.tools.create("div");
		prevButton.classList.add("slider-prev-button");
		prevButton.setAttribute("data-direction", "prev");

		var nextButton = this.tools.create("div");
		nextButton.classList.add("slider-next-button");
		nextButton.setAttribute("data-direction", "next");

		prevButton.addEventListener("click", this._onDirectionButtonClick.bind(this, prevButton));
		nextButton.addEventListener("click", this._onDirectionButtonClick.bind(this, nextButton));

		control.appendChild(prevButton);
		control.appendChild(nextButton);

		this._setupIndicators(control);
	},

	_setupIndicators: function(control) {
		var container = this.tools.create("div");
		container.classList.add("slider-indicators");
		control.indicators = container;

		control.appendChild(container);
	},

	_onDirectionButtonClick: function(button) {
		var direction = button.getAttribute("data-direction");

		switch(direction) {
			case "next": 
				this.setPosition(this._position + 1);
			break;

			case "prev": 
				this.setPosition(this._position - 1);
			break;
		}
	},

	tools: {
		create: function(tag) {
			return document.createElement(tag);
		},

		loop: function(arr, callback) {
			for (var i = 0; i < arr.length; i++) {
				callback(arr[i], i);
			}
		}
	}
}