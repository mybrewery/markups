function createSlider(slider, delay){

    var clickButton = slider.getElementsByClassName("slide-point");

 /*  prevButton.onclick = function(num){
        nextSlide(-1);
    }
*/  for (var i = 0; i < clickButton.length; i++) {
        clickButton[i].onclick = function(dot){
            findSlide(dot);
        }
    }
    
    var index = 1;
    slideShow(index);
    var sliding;

    function nextSlide(num) {
        slideShow(index += num);
    }

    function carousel() { 
        sliding = setInterval(function() {
            nextSlide(1);
        }, delay);

        return 
    }

    carousel();

    slider.onmouseover = stop;
    slider.onmouseout = start;

    function stop() {
        clearInterval(sliding);
    }

    function start() {
        carousel();
    }

    function slideShow(num) {   
        var slides = slider.getElementsByClassName("slide-box");
    
        if (num > slides.length) { 
            index = 1; 
        }
        if (num < 1) { 
            index = slides.length; 
        }

        for (var i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";
            clickButton[i].classList.remove("active-point"); 
        }

        slides[index - 1].style.display = "flex";  
        clickButton[index - 1].className += " active-point";
    } 
}