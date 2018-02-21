/*var members = document.getElementsByClassName("member");
console.log(members);

for (var i = 0; i < members.length; i++) {
	var member = new Member();
	member.setAttribute("index", i);
	members[i].addEventListener("click", function(evt) {
		showFull(evt.target.src);
		console.log(evt.target.src);
	});
}

function Member() {
	this.memberName
}

Member.prototype = {
	collections: {
		name: ["Маша", "Гриша", "Оля", "Михаил"],
		description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.", 
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Привет-привет."]
	}
}

function showFull(evtSrc) {
	full.innerHTML = " ";
	full.classList.remove("none");
	full.childNodes[0].src = evtSrc;
	createMember(evt.target);
}*/

var closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
	full.classList.add("none";)
})
/*
function createMember(evt) {
	evt.getAttribute("index");
	var name = document.createElement("h3");
	full.appendChild(name);
	var info = document.createElement("p");
	full.appendChild(info);
}*/