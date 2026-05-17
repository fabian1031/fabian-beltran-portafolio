// ================================
// Filtro de proyectos
// ================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        projectItems.forEach(item => {
            const show = filter === 'all' || item.dataset.category === filter || item.dataset.category === 'all';
            item.classList.toggle('d-none', !show);
        });
    });
});

// Activar filtro backend al cargar
document.querySelector('[data-filter="all"]').click();

// ================================
// Cerrar mobile menu al hacer click en un link
// ================================
document.querySelectorAll('#navbarMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('navbarMenu');
        const bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) bsCollapse.hide();
    });
});

// ================================
// Link activo por scroll
// ================================
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-custom');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});

// ================================
// Navbar border al hacer scroll
// ================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(255,107,53,0.2)'
        : 'rgba(255,255,255,0.06)';
});

// ================================
// Widget flotante — cerrar panel al abrir offcanvas
// ================================
const contactOffcanvas = document.getElementById('contactOffcanvas');

contactOffcanvas.addEventListener('show.bs.offcanvas', () => {
    const chatPanel = document.getElementById('chatPanel');
    const bsCollapse = bootstrap.Collapse.getInstance(chatPanel);
    if (bsCollapse) bsCollapse.hide();
});

// ================================
// Offcanvas mobile — cerrar con swipe
// ================================
let touchStartX = 0;

contactOffcanvas.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

contactOffcanvas.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 80) {
        bootstrap.Offcanvas.getInstance(contactOffcanvas).hide();
    }
});

// ================================
// Offcanvas mobile — bottom en mobile, end en desktop
// ================================
function adjustOffcanvas() {
    const el = document.getElementById('contactOffcanvas');
    if (window.innerWidth <= 576) {
        el.classList.remove('offcanvas-end');
        el.classList.add('offcanvas-bottom');
    } else {
        el.classList.remove('offcanvas-bottom');
        el.classList.add('offcanvas-end');
    }
}

adjustOffcanvas();
window.addEventListener('resize', adjustOffcanvas);

// ================================
// Formspree — Formulario de contacto
// ================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formView = document.getElementById('form-view');
const successView = document.getElementById('success-view');
const resetBtn = document.getElementById('reset-form');

if (contactForm) {
    contactForm.addEventListener('submit', async e => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';

        try {
            const response = await fetch('https://formspree.io/f/meenwjbe', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(contactForm)
            });

            if (response.ok) {
                formView.style.opacity = '0';
                formView.style.transition = 'opacity 0.3s';
                setTimeout(() => {
                    formView.style.display = 'none';
                    successView.style.display = 'block';
                    successView.style.opacity = '0';
                    successView.style.transition = 'opacity 0.3s';
                    setTimeout(() => successView.style.opacity = '1', 10);
                }, 300);
                contactForm.reset();
            } else {
                submitBtn.innerHTML = '<i class="bi bi-exclamation-circle"></i> Error — intenta de nuevo';
                submitBtn.style.background = '#ef4444';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="bi bi-send"></i> Enviar mensaje';
                    submitBtn.style.background = '';
                }, 3000);
            }
        } catch {
            submitBtn.innerHTML = '<i class="bi bi-exclamation-circle"></i> Sin conexión';
            submitBtn.disabled = false;
        }
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        successView.style.opacity = '0';
        setTimeout(() => {
            successView.style.display = 'none';
            formView.style.display = 'block';
            setTimeout(() => formView.style.opacity = '1', 10);
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="bi bi-send"></i> Enviar mensaje';
        }, 300);
    });
}

// ================================
// GSAP — Registro ScrollTrigger
// ================================
gsap.registerPlugin(ScrollTrigger);

// ================================
// GSAP — Hero
// ================================
gsap.from('.hero-label', {
    opacity: 0, y: -20, duration: 0.6, delay: 0.2
});
gsap.from('.hero-title', {
    opacity: 0, x: -60, duration: 0.8, delay: 0.4
});
gsap.from('.hero-bio', {
    opacity: 0, x: -60, duration: 0.8, delay: 0.6
});
gsap.from('.hero-stack', {
    opacity: 0, y: 20, duration: 0.6, delay: 0.8
});
gsap.from('.hero-actions', {
    opacity: 0, y: 20, duration: 0.6, delay: 1.0
});
gsap.from('.hero-socials', {
    opacity: 0, y: 20, duration: 0.6, delay: 1.2
});
gsap.from('.status-card', {
    opacity: 0, x: 60, duration: 0.8, delay: 0.6, stagger: 0.2
});

// ================================
// GSAP — Habilidades
// ================================
gsap.from('#habilidades .section-title', {
    scrollTrigger: { trigger: '#habilidades', start: 'top 85%', toggleActions: 'play none none none' },
    opacity: 0, y: -30, duration: 0.7
});

gsap.utils.toArray('#habilidades .skills-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        opacity: 0, y: 50, duration: 0.7, delay: i * 0.2
    });
});

// ================================
// GSAP — Trayectoria
// ================================
gsap.from('#trayectoria .section-title', {
    scrollTrigger: { trigger: '#trayectoria', start: 'top 85%', toggleActions: 'play none none none' },
    opacity: 0, scale: 0.8, duration: 0.7
});

gsap.utils.toArray('#trayectoria .col-md-6:first-child .timeline-entry').forEach((entry, i) => {
    gsap.from(entry, {
        scrollTrigger: { trigger: entry, start: 'top 90%', toggleActions: 'play none none none' },
        opacity: 0, x: -60, duration: 0.7, delay: i * 0.25
    });
});

gsap.utils.toArray('#trayectoria .col-md-6:last-child .timeline-entry').forEach((entry, i) => {
    gsap.from(entry, {
        scrollTrigger: { trigger: entry, start: 'top 90%', toggleActions: 'play none none none' },
        opacity: 0, x: 60, duration: 0.7, delay: i * 0.25
    });
});

// ================================
// GSAP — Proyectos
// ================================
gsap.from('#proyectos .section-title', {
    scrollTrigger: { trigger: '#proyectos', start: 'top 85%', toggleActions: 'play none none none' },
    opacity: 0, y: -30, duration: 0.7
});

gsap.utils.toArray('#proyectos .project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 95%', toggleActions: 'play none none none' },
        opacity: 0, y: 60, duration: 0.6, delay: i * 0.1
    });
});

