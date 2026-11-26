document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    // Detecta el archivo HTML actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Si estamos en index.html baja a #about-section; si estamos en otra vista, va al index en esa sección
    const aboutHref = currentPage === 'index.html' ? '#about-section' : 'index.html#about-section';

    navbarContainer.innerHTML = `
        <header class="navbar main-top-nav">
            <a href="index.html" class="logo">FIA<span class="yellow-text">'O</span></a>

            <nav class="nav-links">
                <a href="index.html" data-en="Home" data-es="Inicio">Home</a>
                <a href="${aboutHref}" data-en="About Us" data-es="Nosotros">About Us</a>
                <a href="owner-credits.html" data-en="Credit" data-es="Créditos">Credit</a>
                <a href="owner-products.html" data-en="Products" data-es="Productos">Products</a>
                <a href="owner-clients.html" data-en="Clients" data-es="Clientes">Clients</a>
                <a href="owner-reports.html" data-en="Reports" data-es="Reportes">Reports</a>
                <a href="contacto.html" data-en="Contact" data-es="Contacto">Contact</a>
            </nav>

            <div class="nav-actions">
                <button type="button" id="langToggle" class="nav-btn-icon"><span id="langLabel">ES</span></button>
                <button type="button" id="themeToggle" class="nav-btn-icon">Theme</button>
                <div id="userNavArea"></div>
            </div>
        </header>
    `;

    // Marca con la clase "active" el enlace que corresponde a la página abierta
    document.querySelectorAll('.nav-links a').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});