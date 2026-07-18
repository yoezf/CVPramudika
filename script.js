/* ============================================================
   CV PROFESIONAL — PRAMUDITA ANDHIKA PRATAMA
   script.js — Interactive and Dynamic Logic
   Sections:
   1.  Configuration & State (Certificate and CV Data)
   2.  Theme Toggle (Light/Dark Mode, default: light)
   3.  Mobile Menu Toggle (Hamburger)
   4.  Typed Profession Effect
   5.  Skills Category Tabs
   6.  Certificate Card Generator
   7.  PDF Preview Modal Viewer
   8.  Scroll & Active Link Highlight
   9.  Back to Top Button
   10. Statistics Counter Animation
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initTypedEffect();
  initSkillsTabs();
  generateCertificates();
  initPdfModal();
  initScrollEffects();
  initBackToTop();
  initStatCounters();
});

/* ============================================================
   1. CONFIGURATION & STATE
============================================================ */
// Complete portfolio assets and certificate registry
const CERTIFICATES_DATA = [
  {
    id: "skck-2026",
    name: "Surat Keterangan Catatan Kepolisian (SKCK)",
    file: "skck_2026.pdf",
    issuer: "Kepolisian Negara Republik Indonesia (Polresta Bandung)",
    date: "04 Februari 2026",
    tags: ["Legalitas", "Karakter", "SKCK"]
  },
  {
    id: "sertifikat-kompetensi-1",
    name: "Sertifikat Pelatihan Manajemen Administrasi & Tata Kelola",
    file: "sertifikat1.pdf",
    issuer: "Universitas Nurtanio Bandung",
    date: "2024",
    tags: ["Administrasi", "Tata Kelola"]
  },
  {
    id: "sertifikat-kompetensi-2",
    name: "Sertifikat Pengolahan Data Tingkat Lanjut (Microsoft Excel)",
    file: "sertifikat2.pdf",
    issuer: "Lembaga Sertifikasi Profesi",
    date: "2024",
    tags: ["Microsoft Excel", "Data Processing"]
  },
  {
    id: "sertifikat-warehouse",
    name: "Sertifikat Pelatihan Warehouse & Logistik Operasional",
    file: "sertifikat3.pdf",
    issuer: "Asosiasi Logistik Indonesia",
    date: "2023",
    tags: ["Warehouse", "Logistik"]
  },
  {
    id: "sertifikat-komunikasi",
    name: "Sertifikat Komunikasi Profesional & Pelayanan Publik",
    file: "sertifikat4.pdf",
    issuer: "Pusat Pelatihan Sektor Publik",
    date: "2023",
    tags: ["Komunikasi", "Public Service"]
  }
];

const PROFESSION_TITLES = [
  "Administrasi & Manajemen Profesional",
  "Warehouse & Logistik Specialist",
  "S1 Ilmu Administrasi Negara",
  "Pakar Pengolahan Data & Microsoft Office"
];

/* ============================================================
   2. THEME TOGGLE (Light/Dark Mode)
============================================================ */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // Default is always light mode; only a saved manual choice changes it
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme === "dark" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", initialTheme);
  updateThemeButton(themeToggle, initialTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeButton(themeToggle, newTheme);
  });
}

function updateThemeButton(button, theme) {
  if (theme === "dark") {
    button.setAttribute("aria-label", "Aktifkan mode terang");
    button.setAttribute("title", "Ganti ke Mode Terang");
  } else {
    button.setAttribute("aria-label", "Aktifkan mode gelap");
    button.setAttribute("title", "Ganti ke Mode Gelap");
  }
}

/* ============================================================
   3. MOBILE MENU TOGGLE (Hamburger)
============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!hamburger || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = hamburger.classList.contains("active");
    if (isOpen) {
      // Close menu
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      if (backdrop) {
        backdrop.classList.remove("open");
        backdrop.setAttribute("hidden", "true");
      }
      document.body.style.overflow = "";
    } else {
      // Open menu
      hamburger.classList.add("active");
      hamburger.setAttribute("aria-expanded", "true");
      mobileMenu.classList.add("open");
      mobileMenu.setAttribute("aria-hidden", "false");
      if (backdrop) {
        backdrop.removeAttribute("hidden");
        // Next frame so the opacity transition actually plays
        requestAnimationFrame(() => backdrop.classList.add("open"));
      }
      document.body.style.overflow = "hidden";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  // Tapping the dimmed backdrop closes the menu instead of blocking the page
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) toggleMenu();
    });
  }

  // Escape key closes the menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburger.classList.contains("active")) {
      toggleMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close menu after click
      if (hamburger.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close mobile menu on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && hamburger.classList.contains("active")) {
      toggleMenu();
    }
  });
}

/* ============================================================
   4. TYPED PROFESSION EFFECT
============================================================ */
function initTypedEffect() {
  const target = document.getElementById("typed-profession");
  if (!target) return;

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentTitle = PROFESSION_TITLES[titleIndex];
    
    if (isDeleting) {
      target.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30; // Faster deletion
    } else {
      target.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70; // Typing speed
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at full title
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % PROFESSION_TITLES.length;
      typingSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing
  setTimeout(type, 500);
}

/* ============================================================
   5. SKILLS CATEGORY TABS & PROGRESS BARS
============================================================ */
function initSkillsTabs() {
  const tabs = document.querySelectorAll(".skills-tab");
  const panels = document.querySelectorAll(".skills-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-tab");

      // Deactivate other tabs
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      // Activate clicked tab
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      // Show matching panel
      panels.forEach(panel => {
        if (panel.getAttribute("data-panel") === targetCategory) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });
}

/* ============================================================
   6. CERTIFICATE CARD GENERATOR
============================================================ */
function generateCertificates() {
  const grid = document.getElementById("certificates-grid");
  const emptyMessage = document.getElementById("cert-empty");
  if (!grid) return;

  if (CERTIFICATES_DATA.length === 0) {
    if (emptyMessage) emptyMessage.removeAttribute("hidden");
    return;
  }

  grid.innerHTML = "";
  CERTIFICATES_DATA.forEach((cert, index) => {
    const card = document.createElement("div");
    card.className = "cert-card glass-card";
    
    // Build tags markup
    const tagsMarkup = cert.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");

    card.innerHTML = `
      <div class="cert-thumbnail">
        <div class="cert-thumbnail-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          <span class="cert-thumbnail-label">DOKUMEN PDF</span>
        </div>
        <div class="cert-thumbnail-number" aria-label="Sertifikat nomor ${index + 1}">0${index + 1}</div>
      </div>
      <div class="cert-card-body">
        <h3 class="cert-card-name">${cert.name}</h3>
        <p class="about-info-label" style="margin-bottom:0.25rem;">Penerbit</p>
        <p class="about-text" style="font-weight:600; color:var(--text-primary); margin-bottom:0.5rem;">${cert.issuer}</p>
        <p class="about-info-label" style="margin-bottom:0.25rem;">Tanggal Terbit</p>
        <p class="about-text" style="margin-bottom:1rem;">${cert.date}</p>
        <div class="timeline-tags" style="margin-bottom:1.25rem;">
          ${tagsMarkup}
        </div>
        <div class="cert-card-actions">
          <button class="btn btn-primary btn-sm btn-preview" data-file="assets/pdf/${cert.file}" data-title="${cert.name}" aria-label="Pratinjau ${cert.name}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Preview
          </button>
          <a href="assets/pdf/${cert.file}" download="${cert.file}" class="btn btn-secondary btn-sm" aria-label="Unduh ${cert.name}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ============================================================
   7. PDF PREVIEW MODAL VIEWER
============================================================ */
function initPdfModal() {
  const modal = document.getElementById("pdf-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDownloadBtn = document.getElementById("modal-download-btn");
  const modalClose = document.getElementById("modal-close");
  const pdfFrame = document.getElementById("pdf-frame");

  if (!modal || !pdfFrame) return;

  // Add click listener to preview buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-preview");
    if (btn) {
      const file = btn.getAttribute("data-file");
      const title = btn.getAttribute("data-title");

      // Show loading/set values
      pdfFrame.src = file;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDownloadBtn) {
        modalDownloadBtn.href = file;
        modalDownloadBtn.setAttribute("download", file.substring(file.lastIndexOf("/") + 1));
      }

      // Open Modal
      openModal(modal);
    }
  });

  // Close Modal triggers
  modalClose.addEventListener("click", () => closeModal(modal, pdfFrame));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal, pdfFrame);
  });

  // Escape key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("visible")) {
      closeModal(modal, pdfFrame);
    }
  });
}

function openModal(modal) {
  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent body scroll
  
  // Accessibility: Focus modal
  modal.setAttribute("tabindex", "0");
  modal.focus();
}

function closeModal(modal, iframe) {
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Enable body scroll
  
  // Clear source to stop rendering
  setTimeout(() => {
    iframe.src = "";
  }, 300);
}

/* ============================================================
   8. SCROLL & ACTIVE LINK HIGHLIGHT
============================================================ */
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Navbar Scroll Background Change
    if (scrollPos > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // ScrollSpy: Active navigation link highlight
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Offset for navbar
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* ============================================================
   9. BACK TO TOP BUTTON
============================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.removeAttribute("hidden");
    } else {
      backToTopBtn.setAttribute("hidden", "true");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ============================================================
   10. STATISTICS COUNTER ANIMATION
============================================================ */
function initStatCounters() {
  document.querySelectorAll(".stat-number").forEach(animateCounter);
}

function animateCounter(counterElement) {
  if (!counterElement) return;

  const target = parseInt(counterElement.getAttribute("data-target"), 10);
  if (isNaN(target)) return;

  const duration = 1200; // Counter total time ms
  const stepTime = Math.max(Math.floor(duration / target), 30);
  let current = 0;

  const timer = setInterval(() => {
    current += 1;
    counterElement.textContent = current;

    if (current >= target) {
      counterElement.textContent = target; // Ensure exact final value
      clearInterval(timer);
    }
  }, stepTime);
}

// Update Year in Footer Automatically
const yearElement = document.getElementById("footer-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}