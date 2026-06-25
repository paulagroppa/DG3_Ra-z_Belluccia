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


// ==========================================
// 4. Interactividad del Slider Antes/Después
// ==========================================
const initCompareSlider = () => {
    const container = document.getElementById('compareContainer');
    const clip = document.getElementById('compareClip');
    const handle = document.getElementById('compareHandle');
    
    if (!container || !clip || !handle) return;

    let isDragging = false;

    // Función que calcula la posición y mueve los elementos
    function moveSlider(x) {
        const rect = container.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        
        // Límites para que no se pase de los bordes (0% a 100%)
        if (position < 0) position = 0;
        if (position > 100) position = 100;

        // Aplicamos la posición al CSS
        handle.style.left = `${position}%`;
        clip.style.width = `${position}%`;
    }

    // --- Eventos para Mouse ---
    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });

    // --- Eventos para Pantallas Táctiles (Mobile) ---
    handle.addEventListener('touchstart', () => {
        isDragging = true;
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveSlider(e.touches[0].clientX);
    });
    
    // Hacer clic en cualquier parte del contenedor para mover el slider
    container.addEventListener('click', (e) => {
        if (e.target !== handle && !handle.contains(e.target)) {
            moveSlider(e.clientX);
        }
    });
};

// Ejecutar la función directamente
initCompareSlider();
// ==========================================
// 5. Efecto de Revelado Circular en el Hero (CORREGIDO)
// ==========================================
const initHeroReveal = () => {
    // Buscamos la sección entera del Hero como el área de movimiento
    const heroSection = document.querySelector('section.relative.min-h-screen');
    const clip = document.getElementById('heroBeforeClip');
    
    if (!heroSection || !clip) return;

    // Tamaño del círculo de revelado (en píxeles)
    const circleRadius = 150; 

    // Escuchamos el movimiento en TODO el Hero, no solo en la foto
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        // Calculamos la posición exacta respecto a la pantalla
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Aplicamos la máscara
        clip.style.clipPath = `circle(${circleRadius}px at ${x}px ${y}px)`;
    });

    // Si el cursor sale por completo de la sección del Hero, se oculta
    heroSection.addEventListener('mouseleave', () => {
        clip.style.clipPath = `circle(0px at 0px 0px)`;
    });
};

// Volvemos a ejecutar la función corregida
initHeroReveal();

// ==========================================
// INTERACTIVIDAD DEL MENÚ FULLSCREEN (GSAP) - ¡CORREGIDO VERTICAL!
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuLinks = document.querySelectorAll('#fullscreenMenu a');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isMenuOpen = false;

// Creamos la Timeline de GSAP modificada para desplazamiento VERTICAL (eje Y)
const menuTimeline = gsap.timeline({ paused: true });

menuTimeline.to(fullscreenMenu, {
    y: "0%", // Ahora baja desde arriba tapando el top-20
    duration: 0.5,
    ease: "power3.out",
    onStart: () => {
        fullscreenMenu.classList.remove('pointer-events-none');
    }
})
.to(".menu-item", {
    opacity: 1,
    y: 0, // Los textos suben sutilmente a su posición original
    duration: 0.4,
    stagger: 0.06,
    ease: "power2.out"
}, "-=0.2");

function toggleMenu() {
    if (!isMenuOpen) {
        menuTimeline.play();
        // Transformación del botón a "X"
        line1.style.transform = "translateY(7px) rotate(45deg)";
        line2.style.opacity = "0";
        line3.style.transform = "translateY(-7px) rotate(-45deg)";
        line3.style.width = "24px"; 
        document.body.classList.add('overflow-hidden');
    } else {
        menuTimeline.reverse();
        // Botón vuelve a su estado original (3 líneas)
        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";
        line3.style.width = "16px"; 
        fullscreenMenu.classList.add('pointer-events-none');
        document.body.classList.remove('overflow-hidden');
    }
    isMenuOpen = !isMenuOpen;
}

menuToggle.addEventListener('click', toggleMenu);

// Cierra el menú automáticamente al hacer click en una sección
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});
// CONFIGURADOR INTERACTIVO DE COLOR (SECCIÓN 4.5)
function cambiarColorSillon(nuevaRutaImg, botonActivo) {
    const visualizador = document.getElementById('mueble-visualizador');
    if (!visualizador) return;

    // 1. Efecto de salida suave (Fade out)
    visualizador.style.opacity = '0';
    visualizador.style.transform = 'scale(0.98)';

    setTimeout(() => {
        // 2. Cambiar la fuente de la imagen en el punto de opacidad 0
        visualizador.src = nuevaRutaImg;
        
        // 3. Efecto de entrada suave (Fade in)
        visualizador.style.opacity = '1';
        visualizador.style.transform = 'scale(1)';
    }, 250); // Ocurre a la mitad de la transición de CSS

    // 4. Actualizar el anillo visual del botón seleccionado
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('border-oscuro', 'ring-4', 'ring-oscuro/20', 'scale-110');
        btn.classList.add('border-transparent');
    });

    botonActivo.classList.remove('border-transparent');
    botonActivo.classList.add('border-oscuro', 'ring-4', 'ring-oscuro/20', 'scale-110');
}