gsap.registerPlugin(ScrollTrigger); // ScrollTrigger

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // //IDO vs LBP Section

  gsap.to(".fourth", {
    scrollTrigger: {
      trigger: ".fourth",
      scrub: true,
      pin: true,
      start: "center center",
      end: "800%",
      toggleClass: "active",
      ease: "power2",
      markers: true,
      toggleActions: "play reverse",
      invalidateOnRefresh: true,
    },
  });
});
