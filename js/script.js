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
document.querySelector('[data-filter="backend"]').click();

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
