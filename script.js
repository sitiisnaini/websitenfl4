/* ================================================================
   KONFIGURASI MUDAH DIUBAH
   1. Ganti REGISTRATION_URL jika tautan pendaftaran berubah.
   2. Ganti objek slides untuk memperbarui 5 foto carousel dokumentasi.
   3. Isi nama, kutipan, dan foto testimoni dapat diganti langsung di index.html.
   ================================================================ */
const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeDadnRj60qU6T1ie_1lsTIc-0wiGRg3TaWcE1GyHsd6-8tAw/viewform";

// Foto dan caption carousel diubah langsung pada elemen .gallery-slide di index.html.

// Terapkan satu tautan pendaftaran pada seluruh tombol Daftar.
document.querySelectorAll("[data-register-link]").forEach((link) => {
  link.href = REGISTRATION_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Menu mobile.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
    mainNav.classList.toggle("is-open", !isOpen);
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
      mainNav.classList.remove("is-open");
    });
  });
}

// Animasi masuk saat elemen terlihat di layar.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Buka/tutup detail timeline. Lebih dari satu acara boleh terbuka bersamaan.
document.querySelectorAll("[data-event-toggle]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const targetId = trigger.getAttribute("data-event-toggle");
    const target = document.getElementById(targetId);
    if (!target) return;
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", String(willOpen));
    target.hidden = !willOpen;
    trigger.closest(".event-card")?.classList.toggle("is-open", willOpen);
  });
});

// Carousel dokumentasi: otomatis berganti, dapat dikontrol manual, berhenti saat diarahkan.
const gallery = document.querySelector(".gallery");
const gallerySlides = Array.from(document.querySelectorAll(".gallery-slide"));
const currentCounter = document.getElementById("gallery-current");
const progressBar = document.getElementById("gallery-progress");
const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");
let activeSlide = 0;
let carouselTimer = null;
const AUTOPLAY_DELAY = 5000;

function showSlide(index) {
  if (!gallerySlides.length) return;
  activeSlide = (index + gallerySlides.length) % gallerySlides.length;
  gallerySlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
    slide.setAttribute("aria-hidden", String(slideIndex !== activeSlide));
  });
  if (currentCounter) currentCounter.textContent = String(activeSlide + 1).padStart(2, "0");
  if (progressBar) progressBar.style.width = `${((activeSlide + 1) / gallerySlides.length) * 100}%`;
}
function stopCarousel() {
  if (carouselTimer) window.clearInterval(carouselTimer);
  carouselTimer = null;
}
function startCarousel() {
  stopCarousel();
  if (gallerySlides.length > 1) carouselTimer = window.setInterval(() => showSlide(activeSlide + 1), AUTOPLAY_DELAY);
}
if (gallerySlides.length) {
  showSlide(0);
  startCarousel();
  prevButton?.addEventListener("click", () => { showSlide(activeSlide - 1); startCarousel(); });
  nextButton?.addEventListener("click", () => { showSlide(activeSlide + 1); startCarousel(); });
  gallery?.addEventListener("mouseenter", stopCarousel);
  gallery?.addEventListener("mouseleave", startCarousel);
  gallery?.addEventListener("focusin", stopCarousel);
  gallery?.addEventListener("focusout", startCarousel);
  document.addEventListener("visibilitychange", () => document.hidden ? stopCarousel() : startCarousel());
}

