/* ======================================
   DietSolver - components.js
   Navbar, Mobile Nav, and Footer stored as JS variables.

   HOW IT WORKS:
   Each page has:
     <div id="navbar-placeholder"></div>
     <div id="footer-placeholder"></div>
     <script src="components.js"></script>

   This script injects the shared HTML immediately.
====================================== */

const basePath = window.location.pathname.includes('/services/') ? '../' : '';

const DIET_NAVBAR = `
<!-- TOP BAR -->
<div class="topbar">
  <div class="container">
    <div class="topbar-inner">
      <div class="topbar-left">
        <a href="mailto:anjani78m@gmail.com"><i class="fas fa-envelope"></i> anjani78m@gmail.com</a>
        <a href="tel:+917011626850"><i class="fas fa-phone"></i> +91 70116 26850</a>
      </div>
      <div class="topbar-right">
        <span><i class="fas fa-map-marker-alt"></i> Noida Extension, UP</span>
        <div class="topbar-socials">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://wa.me/917011626850" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="header" id="header">
  <div class="container">
    <nav class="nav-inner">
      <a href="${basePath}index.html" class="logo">
        <img src="${basePath}img/logo_01.png" alt="DietSolver Logo" class="logo-img"/>
      </a>
      <ul class="nav-links">
        <li><a href="${basePath}index.html">Home</a></li>
        <li><a href="${basePath}about.html">About Us</a></li>
        <li class="nav-item">
          <a href="${basePath}services.html">Services <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="${basePath}services/weight-loss.html"><i class="fas fa-weight"></i> Weight Loss & Management</a></li>
            <li><a href="${basePath}services/diabetes-diet.html"><i class="fas fa-heartbeat"></i> Diabetes Management</a></li>
            <li><a href="${basePath}services/pcos-pcod.html"><i class="fas fa-female"></i> PCOS / PCOD Management</a></li>
            <li><a href="${basePath}services/custom-diet.html"><i class="fas fa-utensils"></i> Diet for Women</a></li>
            <li><a href="${basePath}services/pre-wedding-diet.html"><i class="fas fa-ring"></i> Pre-Wedding Diet</a></li>
            <li><a href="${basePath}services/cholesterol-management.html"><i class="fas fa-heartbeat"></i> Cholesterol Management</a></li>
            <li><a href="${basePath}services/sports-nutrition.html"><i class="fas fa-child"></i> Sports Nutrition</a></li>
          </ul>
        </li>
        <li><a href="${basePath}career.html">Career</a></li>
        <li><a href="${basePath}gallery.html">Gallery</a></li>
        <li><a href="${basePath}blog.html">Blog</a></li>
        <li><a href="${basePath}contact.html">Contact</a></li>
      </ul>
      <a href="${basePath}book-appointment.html" class="btn btn-accent nav-cta"><i class="fas fa-calendar-check"></i> Book Free Consult</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>

<!-- MOBILE NAV -->
<nav class="mobile-nav" id="mobileNav">
  <a href="${basePath}index.html">Home</a>
  <a href="${basePath}about.html">About Us</a>
  <a href="${basePath}services.html">Services</a>
  <a href="${basePath}services/weight-loss.html" class="sub-link">-> Weight Loss & Management</a>
  <a href="${basePath}services/diabetes-diet.html" class="sub-link">-> Diabetes Management</a>
  <a href="${basePath}services/pcos-pcod.html" class="sub-link">-> PCOS / PCOD</a>
  <a href="${basePath}services/custom-diet.html" class="sub-link">-> Diet for Women</a>
  <a href="${basePath}services/pre-wedding-diet.html" class="sub-link">-> Pre-Wedding Diet</a>
  <a href="${basePath}services/cholesterol-management.html" class="sub-link">-> Cholesterol Management</a>
  <a href="${basePath}services/sports-nutrition.html" class="sub-link">-> Sports Nutrition</a>
  <a href="${basePath}career.html">Career</a>
  <a href="${basePath}gallery.html">Gallery</a>
  <a href="${basePath}blog.html">Blog</a>
  <a href="${basePath}contact.html">Contact</a>
  <a href="${basePath}book-appointment.html" class="btn btn-accent">Book Free Consultation</a>
</nav>
`;

const DIET_FOOTER = `
<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <img src="${basePath}img/logo_02.png" alt="DietSolver" class="footer-logo-img"/>
          <p>Diet Solvers is a comprehensive programme designed to address weight loss and effective weight management through personalised, science-backed nutrition strategies.</p>
          <div class="footer-socials">
            <a href="https://www.facebook.com/dietsolver" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/dietsolver" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-insta" aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a href="https://wa.me/917011626850" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-wa" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
              </svg>
            </a>
            <a href="mailto:anjani78m@gmail.com" class="fsoc fsoc-mail" aria-label="Email">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-yt" aria-label="YouTube">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 6.2a2.99 2.99 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a2.99 2.99 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a2.99 2.99 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="${basePath}index.html">Home</a></li>
            <li><a href="${basePath}about.html">About Us</a></li>
            <li><a href="${basePath}services.html">Services</a></li>
            <li><a href="${basePath}career.html">Career</a></li>
            <li><a href="${basePath}gallery.html">Gallery</a></li>
            <li><a href="${basePath}blog.html">Blog</a></li>
            <li><a href="${basePath}contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="${basePath}services/weight-loss.html">Weight Loss & Management</a></li>
            <li><a href="${basePath}services/diabetes-diet.html">Diabetes Management</a></li>
            <li><a href="${basePath}services/pcos-pcod.html">PCOS / PCOD</a></li>
            <li><a href="${basePath}services/custom-diet.html">Diet for Women</a></li>
            <li><a href="${basePath}services/pre-wedding-diet.html">Pre-Wedding Diet</a></li>
            <li><a href="${basePath}services/sports-nutrition.html">Sports Nutrition</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get In Touch</h4>
          <ul class="footer-contact-list">
            <li><i class="fas fa-map-marker-alt"></i><span>2007, O Tower, Ajnara Homes, Noida Extension</span></li>
            <li><i class="fas fa-phone"></i><a href="tel:+917011626850">+91 70116 26850</a></li>
            <li><i class="fas fa-envelope"></i><a href="mailto:anjani78m@gmail.com">anjani78m@gmail.com</a></li>
            <li><i class="fas fa-envelope"></i><a href="mailto:dietitiananjnai@gmail.com">dietitiananjnai@gmail.com</a></li>
          </ul>
          <h4 style="margin-top:24px">Newsletter</h4>
          <form class="newsletter-form" action="${basePath}contact.html" method="GET">
            <input type="email" placeholder="Your email address" required/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-inner">
        <span>&copy; 2025 DietSolver. All Rights Reserved.</span>
        <span>
          Design and Managed by
          <a href="https://lso360seoplugin.com/" target="_blank" rel="noopener noreferrer">
            Advertising India
          </a>
        </span>
        <span><a href="#">Privacy Policy</a> &middot; <a href="#">Terms of Service</a></span>
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
