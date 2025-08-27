document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap === "undefined") {
    console.error("GSAP não foi carregado. Verifique o CDN.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // animações hero
  gsap.from(".hero-text h2", { duration: 1, y: -50, opacity: 0 });
  gsap.from(".hero-text p", { duration: 1, y: 20, opacity: 0, delay: 0.4 });
  gsap.from(".cta", { duration: 0.8, scale: 0, delay: 0.9 });

  // animações das features no scroll
  gsap.utils.toArray(".feature").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
      delay: i * 0.12
    });
  });
});
