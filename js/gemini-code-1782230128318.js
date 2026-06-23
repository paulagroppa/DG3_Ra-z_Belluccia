// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Animación del Hero (Al cargar la página)
window.addEventListener("load", () => {
    const heroTimeline = gsap.timeline();

    heroTimeline.to(".hero-content > *", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    })
    .to(".hero-image", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    }, "-=1"); // Se superpone con la animación anterior
});

// 2. Animaciones al hacer Scroll (Secciones)
const sections = gsap.utils.toArray(".gs-section");

sections.forEach((section) => {
    gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // La animación empieza cuando el top de la sección llega al 80% de la pantalla
            toggleActions: "play none none reverse" 
        }
    });
});

// 3. Efecto "Magnético" suave en el Botón Primario del Hero (Detalle UI/UX Premium)
const magneticBtn = document.querySelector('.magnetic-btn');

if(magneticBtn) {
    magneticBtn.addEventListener('mousemove', (e) => {
        const position = magneticBtn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        gsap.to(magneticBtn, {
            x: x * 0.15, // Multiplicador suave
            y: y * 0.15,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    magneticBtn.addEventListener('mouseleave', () => {
        gsap.to(magneticBtn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
}