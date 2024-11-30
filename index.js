let tl = gsap.timeline()

tl.from("body", {
    y: -200,
    duration: 0.5,
    ease: "back.out"
})
tl.from(".nav", {
    y: -20,
    opacity: 0,
    duration: 0.5,
})
tl.from(".nav li", {
    y: -50,
    opacity: 0,
    ease: "power1.out",
    duration: 0.2,
    stagger: -0.2,
})

tl.from(".main-head", {
    y: -50,
    opacity: 0,
    stagger: 0.3,
    duration: 0.4,
    ease: "power.out"
})

tl.from(".category p", {
    y: -40,
    opacity: 0,
    stagger: -0.1,
    duration: 0.4,
})

tl.from(".showcase .image, .showcase .text", {
    y: -1100,
    overflowX: "hidden",
    duration: 1.1,
    // opacity:0,
    ease: "power1.out"
})

// tl.from(".showcase .image", {
//     x: 800,
//     duration: 0.3,
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
    repeat: true,
    getspeed: true,
    // multiplier : 5
    // lerp : 0.05
});

const scrollhead = new LocomotiveScroll({
    el: document.querySelector(".category p"),
    lerp: 1,
})