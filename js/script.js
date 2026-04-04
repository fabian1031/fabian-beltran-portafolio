/* ==========================================================================
   1. CONFIGURACION DE TAILWIND
   ========================================================================== */

// Se define la configuracion de los temas para que Tailwind los procese
if (window.tailwind) {
    window.tailwind.config = {
        theme: {
            extend: {
                colors: {
                    deepBlack: '#0B0E11',
                    carbon: '#1E2329',
                    neonBlue: '#00D1FF',
                    electricPurple: '#7B61FF',
                    lime: '#C1FF72',
                    border: '#2B3139',
                    muted: '#848E9C',
                },
                fontFamily: {
                    sans: ['Space Grotesk', 'sans-serif'],
                    mono: ['IBM Plex Mono', 'monospace'],
                }
            }
        }
    }
}

/* ==========================================================================
   2. LOGICA DE INTERFAZ (UI)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * Logica para la animacion de revelado (Scroll Reveal)
     * Detecta cuando los elementos con la clase .reveal entran en el viewport
     */
    const iniciarScrollReveal = () => {
        const opciones = {
            threshold: 0.15 // Se activa cuando el 15% del elemento es visible
        };

        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('active');
                }
            });
        }, opciones);

        const elementosARevelar = document.querySelectorAll('.reveal');
        elementosARevelar.forEach(el => observador.observe(el));
    };

    /**
     * Logica para el menu movil e icono hamburguesa **/
     
    const iniciarMenuMovil = () => {
        const botonMenu = document.getElementById('menu-toggle');
        const menuContenido = document.getElementById('mobile-menu');
        
        // Elementos del icono (lineas de la hamburguesa)
        const l1 = document.getElementById('line1');
        const l2 = document.getElementById('line2');
        const l3 = document.getElementById('line3');

        // Solo se ejecuta si los elementos existen en el DOM
        if (botonMenu && menuContenido) {
            botonMenu.addEventListener('click', () => {
                const estaAbierto = menuContenido.classList.contains('open');

                if (estaAbierto) {
                    // Estado Cerrado
                    menuContenido.classList.remove('open');
                    l1.style.transform = "translateY(0) rotate(0)"; 
                    l2.style.opacity = "1"; 
                    l3.style.transform = "translateY(0) rotate(0)"; 
                    l3.style.width = "1rem"; // Ancho original de la linea inferior
                } else {
                    // Estado Abierto (X)
                    menuContenido.classList.add('open');
                    l1.style.transform = "translateY(8px) rotate(45deg)"; 
                    l2.style.opacity = "0"; 
                    l3.style.transform = "translateY(-8px) rotate(-45deg)"; 
                    l3.style.width = "1.5rem"; // Ancho completo para formar la X
                }
            });

            // Cerrar menu automaticamente al hacer click en un enlace de navegacion
            const enlacesMenu = document.querySelectorAll('.mobile-nav-link');
            enlacesMenu.forEach(enlace => {
                enlace.addEventListener('click', () => {
                    if (menuContenido.classList.contains('open')) {
                        botonMenu.click(); // Simula click para ejecutar la animacion de cierre
                    }
                });
            });
        }
    };

    /* ==========================================================================
       3. EJECUCION DE FUNCIONES
       ========================================================================== */
    
    iniciarScrollReveal();
    iniciarMenuMovil();
});