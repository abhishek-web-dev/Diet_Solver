const basePath = window.location.pathname.includes('/services/') ? '../' : '';

const DIET_NAVBAR = `
    <header class="main-header bg-section">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="${basePath || '/'}">
                        <img src="${basePath}img/logo.png" alt="DietSolvers Logo">
                    </a>
                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}about.html">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}programs.html">Programs</a></li>
                                <li class="nav-item submenu"><a class="nav-link" href="${basePath}services.html">Services</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/weight-loss.html">Weight Loss & Management</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/diabetes-diet.html">Diabetes Management</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/pcos-pcod.html">PCOS / PCOD Management</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/custom-diet.html">Diet for Women</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/pre-wedding-diet.html">Pre-Wedding Diet</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/cholesterol-management.html">Cholesterol Management</a></li>
                                        <li class="nav-item"><a class="nav-link" href="${basePath}services/sports-nutrition.html">Sports Nutrition</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}career.html">Career</a></li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}gallery.html">Gallery</a></li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}blog.html">Blog</a></li>
                                <li class="nav-item"><a class="nav-link" href="${basePath}contact.html">Contact</a></li>
                                <li class="nav-item highlighted-menu"><a class="nav-link" href="${basePath}contact.html">Book Consultation</a></li>
                            </ul>
                        </div>
                        <div class="header-btn">
                            <a href="${basePath}contact.html" class="btn-default btn-highlighted">Book Consultation</a>
                        </div>
                    </div>
                    <div class="navbar-toggle"></div>
                </div>
            </nav>
            <div class="responsive-menu"></div>
        </div>
    </header>
`;

const DIET_FOOTER = `
    <footer class="main-footer bg-section dark-section">
        <div class="container">
            <div class="main-footer-box" style="padding:100px 0 0;">
                <div class="footer-grid-alt">
                    <div>
                        <img src="${basePath}img/logo-footer.png" alt="DietSolvers" style="max-width:260px; margin-bottom:24px;">
                        <p ">DietSolvers is a comprehensive lifestyle disease reversal and weight management programme designed to support natural healing through personalised, science-backed nutrition and sustainable daily habit transformation.</p>
                    </div>
                    <div style="line-height: 20px;">
                        <h3 ">Quick Links</h3>
                        <ul>
                            <li><a href="${basePath}index.html">Home</a></li>
                            <li><a href="${basePath}about.html">About Us</a></li>
                            <li><a href="${basePath}programs.html">Programs</a></li>
                            <li><a href="${basePath}services.html">Services</a></li>
                            <li><a href="${basePath}career.html">Career</a></li>
                            <li><a href="${basePath}gallery.html">Gallery</a></li>
                            <li><a href="${basePath}blog.html">Blog</a></li>
                            <li><a href="${basePath}contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div style="line-height: 20px;">
                        <h3 ">Services</h3>
                        <ul>
                            <li><a href="${basePath}services/weight-loss.html">Weight Loss & Management</a></li>
                            <li><a href="${basePath}services/diabetes-diet.html">Diabetes Management</a></li>
                            <li><a href="${basePath}services/pcos-pcod.html">PCOS / PCOD</a></li>
                            <li><a href="${basePath}services/custom-diet.html">Diet for Women</a></li>
                            <li><a href="${basePath}services/pre-wedding-diet.html">Pre-Wedding Diet</a></li>
                            <li><a href="${basePath}services/sports-nutrition.html">Sports Nutrition</a></li>
                        </ul>
                    </div>
                    <div style="line-height: 20px;">
                        <h3 ">Get In Touch</h3>
                        <ul>
                            <li ">2007, O Tower, Ajnara Homes, Noida Extension</li>
                            <li><a href="tel:+917011626850">+91 70116 26850</a></li>
                            <li><a href="mailto:anjani78m@gmail.com">anjani78m@gmail.com</a></li>
                            <li><a href="mailto:dietitiananjnai@gmail.com">dietitiananjnai@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom-alt">
                    <p ">Copyright © 2025 DietSolvers. All Rights Reserved. Design and Managed by <a style="color: black; text-decoration: underline;"  href="https://lso360seoplugin.com/" target="_blank" rel="noopener noreferrer">Advertising India</a></p>
                </div>
            </div>
        </div>
    </footer>
`;

(function () {
    const navEl = document.getElementById('navbar-placeholder');
    if (navEl) navEl.innerHTML = DIET_NAVBAR;

    const footEl = document.getElementById('footer-placeholder');
    if (footEl) footEl.innerHTML = DIET_FOOTER;
})();
