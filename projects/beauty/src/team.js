var members = document.getElementsByClassName("member");

var closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
	full.classList.add("hidden");
})
/*
function Member(name, description, imageSrc) {
	this.name = name;
	this.des = description;
	this.image = imageSrc;
}*/

Member = {
	name: ["Маша", "Гриша", "Оля", "Михаил"],

	description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.", 
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет."]
}

function createInfo(index) {
	var name = document.querySelectorAll("#full h3")[0];
	var info = document.querySelectorAll("#full p")[0];

	name.innerText = Member.name[index];
	info.innerText = Member.description[index];
	console.log(name, info);
} 

for (var i = 0; i < members.length; i++) {
	members[i].setAttribute("index", i);
	members[i].addEventListener("click", showFull);
}

function showFull(evtSrc) {
	var fullImage = document.getElementById("full-image");
	var fullWindow = document.getElementById("full");
	fullImage.src = evtSrc.target.src;
	var index = evtSrc.target.getAttribute("index");
	createInfo(index);
	fullWindow.classList.remove("hidden");
}

