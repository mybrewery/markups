"use strict";
document.addEventListener("DOMContentLoaded", function() {

    var sectionsData = {
        nodes: document.querySelectorAll(".section"),
        current: 0,
        scripts: {},
        update: function(){
            if (this.current < 0) {
                this.current = 0;
                return;
            } else if (this.current > this.nodes.length - 1) {
                this.current = this.nodes.length - 1;
                return;
            }

            var scrollY = this.nodes[this.current].offsetTop;

            TweenMax.to(document.body, 0.9, {
                scrollTop: scrollY,
                ease: Back.easeOut.config(1.7)
            });
        }
    };

    Hamster(document.body).wheel(function(event, delta, deltaX, deltaY){
        event.preventDefault();

        if (deltaY > 0) {
            sectionsData.current--;
        } else {
            sectionsData.current++;
        }

        sectionsData.update();
    });
})