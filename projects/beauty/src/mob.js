var mobNav = document.getElementById("full-nav");
var menuTopLine = document.getElementsByClassName("top")[0];
var menuBottomLine = document.getElementsByClassName("bottom")[0];
var menuLines = document.getElementsByClassName("menu-line");
var closeWrap = document.getElementsByClassName("close-wrap")[0];
var closeButton = document.getElementsByClassName("close");
var closeLeft = document.getElementsByClassName("left")[0];
var closeRight = document.getElementsByClassName("right")[0];

function showMenu() {
	closeWrap.classList.remove("hidden");
	mobNav.classList.remove("none");
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
	document.body.classList.add("no-scroll");
}

function closeMenu() {
	for (var i = 0; i < menuLines.length; i++) {
		menuLines[i].classList.remove("hidden");
	}
	for (var i = 0; i < closeButton.length; i++) {
		closeButton[i].classList.add("hidden");
	}
	mobNav.classList.add("none");
	menuTopLine.classList.remove("menu-animate-top");
	menuBottomLine.classList.remove("menu-animate-bottom");
	closeWrap.classList.add("hidden");
	closeLeft.classList.remove("close-animate-one");
	closeRight.classList.remove("close-animate-two");
	document.body.classList.remove("no-scroll");
}