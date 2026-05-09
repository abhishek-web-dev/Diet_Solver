const basePath = window.location.pathname.includes('/services/') ? '../' : '';

const DIET_NAVBAR = `
<header class="main-header bg-section" id="header">
    <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="${basePath}index.html">
                    <img src="${basePath}images/logo.svg" alt="DietSolver Logo">
                </a>

                <div class="collapse navbar-collapse main-menu">
                    <div class="nav-menu-wrapper">
                        <ul class="navbar-nav mr-auto" id="menu">
                            <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="${basePath}about.html">About Us</a></li>
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
                            <li class="nav-item highlighted-menu"><a class="nav-link" href="${basePath}book-appointment.html">Book Consultation</a></li>
                        </ul>
                    </div>

                    <div class="header-btn">
                        <a href="${basePath}book-appointment.html" class="btn-default btn-highlighted">Book Free Consultation</a>
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
        <div class="row">
            <div class="col-lg-12">
                <div class="main-footer-box">
                    <div class="footer-about">
                        <div class="footer-logo">
                            <img src="${basePath}images/footer-logo.svg" alt="DietSolver Footer Logo">
                        </div>
                        <div class="footer-contact-box">
                            <div class="footer-contact-item">
                                <div class="icon-box">
                                    <img src="${basePath}images/icon-phone.svg" alt="">
                                </div>
                                <div class="footer-contact-content">
                                    <p>Call Us</p>
                                    <h3><a href="tel:+917011626850">+91 70116 26850</a></h3>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="icon-box">
                                    <img src="${basePath}images/icon-phone.svg" alt="">
                                </div>
                                <div class="footer-contact-content">
                                    <p>Email Us</p>
                                    <h3><a href="mailto:anjani78m@gmail.com">anjani78m@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="footer-menu">
                            <ul>
                                <li><a href="${basePath}index.html">Home</a></li>
                                <li><a href="${basePath}about.html">About Us</a></li>
                                <li><a href="${basePath}services.html">Services</a></li>
                                <li><a href="${basePath}contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-links-box">
                        <div class="footer-links">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="${basePath}services/weight-loss.html">Weight Loss & Management</a></li>
                                <li><a href="${basePath}services/diabetes-diet.html">Diabetes Management</a></li>
                                <li><a href="${basePath}services/pcos-pcod.html">PCOS / PCOD</a></li>
                                <li><a href="${basePath}services/custom-diet.html">Diet for Women</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <h3>Clinic Details</h3>
                            <ul>
                                <li>Mon - Sat : 9:00am - 7:00pm</li>
                                <li>Online Consultations Available</li>
                                <li>2007, O Tower, Ajnara Homes, Noida Extension</li>
                            </ul>
                        </div>

                        <div class="footer-social-links">
                            <span>Follow on: </span>
                            <ul>
                                <li><a href="https://www.facebook.com/dietsolver" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/dietsolver" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://wa.me/917011626850" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a></li>
                                <li><a href="mailto:anjani78m@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-copyright">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-5">
                    <div class="footer-copyright-text">
                        <p>Copyright © 2025 DietSolver. All Rights Reserved.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-7">
                    <div class="footer-privacy-policy">
                        <ul>
                            <li><a href="${basePath}contact.html">Contact</a></li>
                            <li><a href="${basePath}book-appointment.html">Book Appointment</a></li>
                            <li><a href="${basePath}services.html">Programmes</a></li>
                        </ul>
                    </div>
                </div>
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
