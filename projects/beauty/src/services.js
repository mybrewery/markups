var textItem = document.getElementsByClassName("text");
var description = document.getElementsByClassName("description");

for (var i = 0; i < description.length; i++) {
	description[i].setAttribute("index", i);
	textItem[i].setAttribute("index", i);
}

var des = $(".description");

des.click(function(evt) {
	evt.stopPropagation();
	var index = evt.target.getAttribute("index");

	des.eq(index).animate({
	    'height': des[index].scrollHeight + "px"
	})

	des.eq(index).removeClass("gradient");
	$(".text").eq(index).removeClass("none");
});

$(".text").click(function(evt) {
	var index = evt.target.getAttribute("index");
	des.eq(index).addClass("gradient");
	$(".text").eq(index).addClass("none");
    des.eq(index).animate({
        "height": '60px'
    })
    console.log(evt);
})
