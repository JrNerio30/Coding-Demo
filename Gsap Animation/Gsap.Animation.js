// box
gsap.fromTo(".box", {
  y: 300,
},{
  y: 0,
  duration: 3,
});  
// box 2
gsap.fromTo(".box2", {
  y: -400,
}, {
  y: 0,
  duration: 3,
});
// box 3
let box3 = document.querySelector(".box3");

gsap.fromTo(box3, {
  y: 300,
},{
  y: 0,
  duration: 3,
})
// box 4
gsap.fromTo("main > .box4", {
  y: -300
}, {
  y: 0,
  duration: 3
})
// text
gsap.fromTo(".text", {
  x:-2000,
},{
  x:0,
  duration: 1.9
})