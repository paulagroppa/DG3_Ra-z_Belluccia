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

    // PEGÁ ESTO EN SU LUGAR:
    const colorDots = document.querySelectorAll(".color-dot");
    const muebleBaseImg = document.getElementById("muebleBaseImg");

    colorDots.forEach(dot => {
        dot.addEventListener("click", function() {
            // Quitamos la clase activa de todos los botones
            colorDots.forEach(d => d.classList.remove("active"));
            // Añadimos activa al seleccionado
            this.classList.add("active");

            // Obtenemos la ruta de la imagen desde el data-img
            const targetImg = this.getAttribute("data-img");
            
            // Reemplazamos el origen de la imagen principal
            if (muebleBaseImg && targetImg) {
                muebleBaseImg.src = targetImg;
            }
        });
    });

    // ----------------------------------------------------------------------
    // 3. DINAMISMO EXTRALÚDICO: ANIMACIÓN DE GRADIENTE EN WORKSHOPS (SECCIÓN 3)
    // ----------------------------------------------------------------------
    const workshopSection = document.getElementById("workshops");
    if (workshopSection) {
        let hueShift = 0;
        setInterval(() => {
            // Altera sutilmente el tono naranja vivo original para darle vibración artística
            hueShift = (hueShift + 1) % 15; 
            workshopSection.style.filter = `hue-rotate(${hueShift}deg)`;
        }, 150);
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