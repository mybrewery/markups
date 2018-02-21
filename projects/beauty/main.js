var element = document.getElementsByTagName("header")[0];
var nav = document.getElementsByClassName("navigation-bar")[0];
var position = element.offsetHeight + jslider.offsetHeight - 70;

window.onscroll = function() {
	var distance = window.pageYOffset;
	console.log(position);
	console.log(distance);
	if (distance > position) {
		nav.classList.remove("none");
	} else {
		nav.classList.add("none");
	}
}

var textItem = document.getElementsByClassName("text");
console.log(textItem);

function showText() {

}

