gsap.registerPlugin(ScrollTrigger);

var winH = window.outerHeight;

gsap.to('.square_one', {
    x: 500,
    rotate: 180,
    scrollTrigger: {
        trigger: '.square_one',
        start: "top top",
        end: winH,
        markers: true,
        scrub: true,
        pin: true
    }
})
