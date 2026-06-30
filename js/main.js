document.addEventListener("DOMContentLoaded", () => {
    
    // ----------------------------------------------------------------------
    // 1. COMPONENTE INTERACTIVO: SLIDER ANTES Y DESPUÉS + TOOLTIPS
    // ----------------------------------------------------------------------
    const sliderInput = document.getElementById("beforeAfterSlider");
    const imgAfterContainer = document.querySelector(".img-after");
    const sliderHandleButton = document.querySelector(".slider-button");

    // A) Movimiento del Slider (Revelar Antes y Después)
    if (sliderInput && imgAfterContainer && sliderHandleButton) {
        sliderInput.addEventListener("input", (e) => {
            const sliderValue = e.target.value;
            
            // Ajustamos el ancho del contenedor 'Después' de forma dinámica
            imgAfterContainer.style.width = `${sliderValue}%`;
            // Posicionamos la barra y el botón divisor
            sliderHandleButton.style.left = `${sliderValue}%`;
        });
    }

    // B) Soporte para clicks en Mobile para Tooltips Interactivos
    const hotspots = document.querySelectorAll(".hotspot-trigger");
    hotspots.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation(); // Evita que interfiera con el arrastre del slider
            const parent = trigger.parentElement;
            
            // Si ya estaba activo lo cierra; si no, apaga los demás y enciende este
            if (parent.classList.contains("active")) {
                parent.classList.remove("active");
            } else {
                document.querySelectorAll(".hotspot").forEach(h => h.classList.remove("active"));
                parent.classList.add("active");
            }
        });
    });

    // C) Cerrar tooltips abiertos al hacer click/tap en cualquier parte vacía
    document.addEventListener("click", () => {
        document.querySelectorAll(".hotspot").forEach(h => h.classList.remove("active"));
    });


    // ----------------------------------------------------------------------
    // 2. INTERACCIÓN SECCIÓN: EL COLOR COMO SEGUNDA VIDA
    // ----------------------------------------------------------------------
    const colorCircles = document.querySelectorAll(".color-circle-btn");
    const muebleBaseImg = document.getElementById("muebleBaseImg");

    if (colorCircles.length > 0 && muebleBaseImg) {
        colorCircles.forEach(circle => {
            circle.addEventListener("click", function() {
                // 1. Quitar la clase activa de todos los círculos
                colorCircles.forEach(c => c.classList.remove("active"));
                // 2. Agregar la clase activa al círculo clickeado
                this.classList.add("active");

                // 3. Capturar la ruta de la imagen del atributo 'data-img'
                const nuevaImagen = this.getAttribute("data-img");

                // 4. Cambiar el src con un efecto de transición de opacidad suave
                muebleBaseImg.style.opacity = "0.3";
                setTimeout(() => {
                    muebleBaseImg.src = nuevaImagen;
                    muebleBaseImg.style.opacity = "1";
                }, 150);
            });
        });
    }

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
// ----------------------------------------------------------------------
    // 5. CONTROL INTERACTIVO: MAZO DE CARTAS APILADAS (ESTILO TRUUS / RAÍZ)
    // ----------------------------------------------------------------------
    const stackContainer = document.getElementById("clientsStack");
    const deckProjectTitle = document.getElementById("deckProjectTitle");

    if (stackContainer) {
        // Obtenemos una matriz viva de las cartas internas
        let cards = Array.from(stackContainer.querySelectorAll(".client-card"));
        let isAnimating = false; // Candado lógico para evitar clicks simultáneos roturas

        // Función matemática y visual que posiciona las cartas como un abanico apilado
        const layoutDeck = () => {
            cards.forEach((card, index) => {
                // Removemos estados anteriores de interacción
                card.classList.remove("active-top");
                
                // Las cartas se acomodan basándose en su orden de ordenamiento del Array
                // index === 0 es la carta del frente (activa superior)
                if (index === 0) {
                    card.style.zIndex = "10";
                    card.style.opacity = "1";
                    // Posición central estable con leve rotación orgánica de autor
                    card.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
                    card.classList.add("active-top");
                    
                    // Actualizamos el título del banner inferior dinámicamente
                    if (deckProjectTitle) {
                        deckProjectTitle.textContent = card.getAttribute("data-project");
                    }
                } else if (index === 1) {
                    card.style.zIndex = "8";
                    card.style.opacity = "0.9";
                    // Desplazada a la derecha y rotada sutilmente hacia atrás
                    card.style.transform = "translate3d(20px, 0, -40px) rotate(4deg) scale(0.96)";
                } else if (index === 2) {
                    card.style.zIndex = "6";
                    card.style.opacity = "0.7";
                    // Desplazada hacia el ala izquierda profunda
                    card.style.transform = "translate3d(-25px, 10px, -80px) rotate(-5deg) scale(0.92)";
                } else {
                    // El resto de las cartas se guardan ocultas o colapsadas al fondo
                    card.style.zIndex = "2";
                    card.style.opacity = "0";
                    card.style.transform = "translate3d(0, 0, -120px) rotate(0deg) scale(0.85)";
                }
            });
        };

        // Evento clic sobre el contenedor para disparar el paso de carta
        stackContainer.addEventListener("click", () => {
            if (isAnimating) return; // Si la animación previa sigue corriendo, frena el evento
            isAnimating = true;

            const topCard = cards[0]; // Capturamos la del frente

            // 1. Fase de Despegue: La carta vuela hacia la izquierda y gana rotación exagerada en el aire
            topCard.style.transform = "translate3d(-130%, -20px, 50px) rotate(-20deg) scale(0.95)";
            topCard.style.opacity = "0";
            topCard.style.zIndex = "15"; // Se mantiene por encima durante el vuelo

            // 2. Fase de Reubicación (A mitad de la transición de CSS)
            setTimeout(() => {
                // Mandamos físicamente el elemento al final de nuestro arreglo lineal
                cards.push(cards.shift());

                // Re-calculamos los z-index de las que quedaron para que la nueva frente pase al frente de inmediato
                cards.forEach((card, idx) => {
                    if (idx === 0) card.style.zIndex = "10";
                });

                // 3. Fase de Reingreso: Redibujamos todo el mazo para que la carta vieja entre suave por detrás
                layoutDeck();

                // Liberamos el candado para permitir nuevos clics
                setTimeout(() => {
                    isAnimating = false;
                }, 300);

            }, 300); // 300ms equivale a la mitad exacta de los 0.6s definidos en tu propiedad transition de CSS
        });

        // Ejecución inicial limpia al montar la página
        layoutDeck();
    }
});