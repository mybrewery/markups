var fullWindow = document.getElementById("full");
var members = document.getElementsByClassName("member");

var closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
	fullWindow.classList.remove("animation");
	fullWindow.classList.add("rev-animation");
})

Member = {
	name: ["Маша", "Гриша", "Оля", "Михаил"],

	description: ["1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.", 
	"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
	"3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
	"4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет."]
}

function createInfo(index) {
	var name = document.querySelectorAll("#full h3")[0];
	var info = document.querySelectorAll("#full p")[0];

	name.innerText = Member.name[index];
	info.innerText = Member.description[index];
} 

for (var i = 0; i < members.length; i++) {
	members[i].setAttribute("index", i);
	members[i].addEventListener("click", showFull);
}

function showFull(evtSrc) {
	var fullImage = document.getElementById("full-image");
	fullImage.src = evtSrc.target.src;
	var index = evtSrc.target.getAttribute("index");
	createInfo(index);
	fullWindow.classList.remove("hidden");
	fullWindow.classList.remove("rev-animation");
	fullWindow.classList.add("animation");
}


fullWindow.addEventListener("animationend", function(el) {
	if(el.animationName == "rev-appear") {
		fullWindow.classList.add("hidden");
	}
})

