document.addEventListener("DOMContentLoaded", () => {
    
    // ----------------------------------------------------------------------
    // 1. COMPONENTE INTERACTIVO: SLIDER ANTES Y DESPUÉS (SECCIÓN 2)
    // ----------------------------------------------------------------------
    const sliderInput = document.getElementById("beforeAfterSlider");
    const imgAfterContainer = document.querySelector(".img-after");
    const sliderHandleButton = document.querySelector(".slider-button");

    if (sliderInput && imgAfterContainer && sliderHandleButton) {
        sliderInput.addEventListener("input", (e) => {
            const sliderValue = e.target.value;
            
            // Ajustamos el ancho del contenedor 'Después' de forma dinámica
            imgAfterContainer.style.width = `${sliderValue}%`;
            // Posicionamos la barra y el botón divisor
            sliderHandleButton.style.left = `${sliderValue}%`;
        });
    }

    // ----------------------------------------------------------------------
    // 2. COMPONENTE INTERACTIVO: COLOR STUDIO (SECCIÓN 5)
    // ----------------------------------------------------------------------
    const colorDots = document.querySelectorAll(".color-dot");
    const muebleOverlay = document.getElementById("muebleOverlay");

    colorDots.forEach(dot => {
        dot.addEventListener("click", function() {
            // Quitamos la clase activa de todos los botones
            colorDots.forEach(d => d.classList.remove("active"));
            // Añadimos activa al seleccionado
            this.classList.add("active");

            // Obtenemos el color RGBA del atributo de datos custom
            const targetColor = this.getAttribute("data-color");
            
            // Aplicamos la laca de color con una transición fluida vía CSS
            if (muebleOverlay) {
                muebleOverlay.style.backgroundColor = targetColor;
            }
        });
    });

   // ----------------------------------------------------------------------
    // 3. CONTROL INTERACTIVO DEL SLIDER DE CURSOS (CENTRADO ABSOLUTO EJE WEB)
    // ----------------------------------------------------------------------
    const coursesTrack = document.getElementById("coursesTrack");
    const courseCards = document.querySelectorAll(".course-card-wrapper");
    const prevBtn = document.getElementById("coursePrevBtn");
    const nextBtn = document.getElementById("courseNextBtn");

    if (coursesTrack && courseCards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;

        const updateSlider = () => {
            // 1. Gestionamos la clase activa para aplicar las opacidades del CSS
            courseCards.forEach(card => card.classList.remove("active"));
            courseCards[currentIndex].classList.add("active");

            // 2. Calculamos el ancho real de la tarjeta y el espacio (gap) configurado
            const cardWidth = courseCards[0].getBoundingClientRect().width;
            const gap = 40; 

            // 3. Renderizado matemático para centrado absoluto:
            // Desplazamos el track basándonos en el índice, manteniendo el equilibrio visual simétrico
            const displacement = currentIndex * (cardWidth + gap);

            // Movemos el contenedor usando aceleración por hardware
            coursesTrack.style.transform = `translateX(-${displacement}px)`;
        };

        // Evento click para avanzar al siguiente curso
        nextBtn.addEventListener("click", () => {
            if (currentIndex < courseCards.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Vuelve al primer curso de forma cíclica
            }
            updateSlider();
        });

        // Evento click para volver al curso anterior
        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = courseCards.length - 1; // Salta al último curso
            }
            updateSlider();
        });

        // Forzamos recalcular la posición si el usuario cambia el tamaño del navegador o gira el celu
        window.addEventListener("resize", updateSlider);
        
        // Ejecución inicial para posicionar la primera tarjeta al cargar la página
        updateSlider();
    }
    // ----------------------------------------------------------------------
    // 4. EFECTOS SCROLL REVEAL (Efectos de aparición gradual simples)
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "all 0.8s ease-out";
            }
        });
    };

    // Inicialización suave de opacidades para el reveal
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecución inicial por si ya están visibles
});