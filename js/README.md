# DG3_Raiz_Belluccia
Página web de remodelación de muebles
gsap.registerPlugin(ScrollTrigger);

// animación general de secciones
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});

// hero text
gsap.from(".hero-text", {
  opacity: 0,
  y: 40,
  duration: 1
});

// cards
gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});