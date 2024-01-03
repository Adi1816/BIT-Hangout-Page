var active = 8;

var minicircles = document.querySelectorAll("#minicircle");
var text = document.querySelectorAll(".sec");


gsap.to(minicircles[active-1], {
    opacity:1,
})

gsap.to(text[active-1], {
    opacity: 1,
})

minicircles.forEach(function(cir, index){
    cir.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (active-(index+1))*10,
            ease: Expo.easeInOut,
            duration:1
        })
        discolor();
        gsap.to(this, {
            opacity:1,
            duration:1
        })
        gsap.to(text[index], {
            opacity:1,
            duration:1,
            ease: Expo.easeInOut,
        })
    })
})

function discolor(){
    gsap.to("#minicircle", {
        opacity:0.3,
    })
    gsap.to(".sec", {
        opacity:0.3,
    })
}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1.25
})

