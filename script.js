function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const tl = gsap.timeline();


tl.from("#desktop-nav .nav-links li", {
  y: -45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.10,
})

gsap.from("#socials", {
  x: 70,
  opacity: 0,
  duration : 1.5,
  stagger: 0.3
})



gsap.from("#about .section__text__p1 , #about .title", {
  x: -100,
  duration: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about .section__text__p1",
    scroller: "body"
  },
})

gsap.from("#about .section__pic-container", {
  scale: 0,
  opacity: 0,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#about .section__pic-container",
    scroller: "body"
  },
})


gsap.from("#about .details-container , #about .text-container", {
  y: 100,
  opacity: 0,
  delay: 0.2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about .details-container",
    scroller: "body"
  },
})



gsap.from("#experience .details-container", {
  y: 50,
  delay: 0.2,
  duration: 0.8,
  opacity: 0,
  stagger: 0.7,
  scrollTrigger: {
    trigger: "#experience .details-container",
    scroller: "body"
  },
})

gsap.from("#projects .details-container", {
  y: 100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#projects .details-container",
    scroller: "body"
  },
})




gsap.from("#contact .contact-info-upper-container", {
  y: 50,
  duration: 1,
  opacity: 0,
  // stagger: 0.3,
  scrollTrigger: {
    trigger: "#contact .contact-info-upper-container",
    scroller: "body"
  },
})

gsap.from("footer li", {

  duration: 0.5,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "footer li",
    scroller: "body"
  },
})
