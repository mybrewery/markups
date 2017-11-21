function createSlider(slider, delay){
    /*var boxes = document.getElementsByClassName("box");
    var buttons = document.getElementsByClassName("button");

    buttons[0].addEventListener("click", previous());
    buttons[1].addEventListener("click", next());

    function previous() {

    }

    function next(event) {
        
    }*/

    var prevButton = slider.querySelector(".prev");
    var nextButton = slider.querySelector(".next");

    prevButton.onclick = function(){
        nextSlide(-1);
    }

    nextButton.onclick = function(){
        nextSlide(1);
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

    /*
    function currentSlide(num) {
        slideShow(index = num);
    }*/

    function slideShow(num) {   
        var slides = slider.getElementsByClassName("box");

        if (num > slides.length) { 
            index = 1; 
        }
        if (num < 1) { 
            index = slides.length; 
        }

        for (var i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }

        slides[index - 1].style.display = "block";  
    } 



}