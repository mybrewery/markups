var element = document.getElementsByClassName("navigation")[0];
var nav = document.getElementsByClassName("navigation-bar")[0];
var navButtons = document.getElementsByClassName("button-wrap");
var position = element.offsetHeight + jslider.offsetHeight - 70;
var slider = document.getElementById("jslider");
var xhr = new XMLHttpRequest;
var gallery = document.getElementsByClassName("gallery")[0];

navButtons[0].addEventListener("animationend", function() {
	navButtons[0].style.opacity = 1;
})

navButtons[1].addEventListener("animationend", function() {
	navButtons[1].style.opacity = 1;
})

slider.addEventListener("animationend", function(el) {
	if(el.animationName == "onload-appear") {
		slider.style.opacity = 1;		
	}
})

window.onscroll = function() {
	var distance = window.pageYOffset;
	if (distance > position) {
		nav.classList.remove("none");
		nav.style.animation = "viezd .14s ease-in-out, appear .14s ease-in-out";
	} else {
		nav.style.animation = "zaezd .14s ease-in-out, rev-appear .14s ease-in-out";
	}
}

nav.addEventListener("animationend", function(el){
	if (el.animationName == "zaezd") {
		nav.classList.add("none");
	}
})

xhr.open("get", "https://api.instagram.com/v1/users/4574390830/media/recent/?access_token=4574390830.1677ed0.d7010b7c63174f4ab7197f8d89b96b7b", false);
xhr.send();
var data = JSON.parse(xhr.responseText);


function createGallery(element) {
	var imageBox = document.createElement("div");
	imageBox.classList.add("image-box");
	gallery.appendChild(imageBox);
	var link = document.createElement("a");
	link.setAttribute("target", "_blank");
	link.setAttribute("href", element.link);
	var image = document.createElement("img");
	image.src = element.images.standard_resolution.url;
	link.appendChild(image);
	imageBox.appendChild(link);
}

for (var i = 0; i < 7; i++) {
	createGallery(data.data[i]);	
}

var mobNav = document.getElementById("full-nav");
var menuTopLine = document.getElementsByClassName("top")[0];
var menuBottomLine = document.getElementsByClassName("bottom")[0];
var menuLines = document.getElementsByClassName("menu-line");
var closeButton = document.getElementsByClassName("close");
var closeLeft = document.getElementsByClassName("left")[0];
var closeRight = document.getElementsByClassName("right")[0];


function showMenu() {
	mobNav.classList.remove("hidden");
	menuTopLine.classList.add("menu-animate-top");
	menuBottomLine.classList.add("menu-animate-bottom");
	for (var i = 0; i < menuLines.length; i++) {
		menuLines[i].classList.add("hidden");
	}
	for (var i = 0; i < closeButton.length; i++) {
		closeButton[i].classList.remove("hidden");
	}
	closeLeft.classList.add("close-animate-one");
	closeRight.classList.add("close-animate-two");
}

function closeMenu() {
	for (var i = 0; i < menuLines.length; i++) {
		menuLines[i].classList.remove("hidden");
	}
	for (var i = 0; i < closeButton.length; i++) {
		closeButton[i].classList.add("hidden");
	}
	mobNav.classList.add("hidden");
	menuTopLine.classList.remove("menu-animate-top");
	menuBottomLine.classList.remove("menu-animate-bottom");
	closeLeft.classList.remove("close-animate-one");
	closeRight.classList.remove("close-animate-two");


}
